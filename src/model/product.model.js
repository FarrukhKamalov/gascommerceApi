const mongoose = require('mongoose');
const {ObjectId } = mongoose.Schema.Types


const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: [{
        type: ObjectId,
        ref: 'categories'
    }],
    image: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        default: true,
        required: true
    }
}, {timestamps: true});


module.exports = mongoose.model('products', productSchema)
