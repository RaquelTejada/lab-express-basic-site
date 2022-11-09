const mongoose = require('mongoose')
// const { stringify } = require('querystring')

const productSchema = new mongoose.Schema({
    title: {
        type: String,
    },

    description: {
        type: String,
    },

    price: {
        type: Number
    },

    discountPercentage: {
        type: Number
    },

    rating: {
        type: Number
    },

    stock: {
        type: Number
    },

    brand: {
        type: String,
    },

    category: {
        type: String,
    },

    thumbnail: {
        type: String
    },

    images: {
        type: String,
        enum: []
    }
})

const Product = mongoose.model('', productSchema)

module.exports = Product