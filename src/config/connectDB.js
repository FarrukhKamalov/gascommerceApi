const mongoose = require("mongoose")

const connectDB  = async() => {
    await mongoose.connect('mongodb+srv://admin:admin@gazmagazine.wuheobk.mongodb.net/?retryWrites=true&w=majority')
}

module.exports = connectDB