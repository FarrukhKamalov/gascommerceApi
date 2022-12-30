//require package and file
const express = require('express');
const app = express();
const morgan = require('morgan');
const productRouter = require('./routes/product.routes');
const categoryRouter = require('./routes/category.routes')
const cors = require('cors');
const cloudinary = require('cloudinary').v2
const expressFileUpload = require('express-fileupload')



// middlewares
require('dotenv').config({ path: 'src/config/config.env' });
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(cors('*'))
require('./config/connectDB')()
app.use(expressFileUpload({useTempFiles: true}))
cloudinary.config({
    cloud_name :'dfmuosdhb',
    api_key:'891263354768368',
    api_secret:'VVFQXnZFYtv_8MsUTkSbk98U-3g' 
});


app.use('/api/products', productRouter)
app.use('/api/category', categoryRouter)

//start run server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`PORT: ${PORT} SERVER`)
})