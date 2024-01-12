const mongoose = require("mongoose")



const productSchema = mongoose.Schema({

    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    featured: {
        type: Boolean,
        default: false,
    },
    rating: {
        type: Number,
        min: 0,
        max: 5,
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now,
    },
    company: {
        type: String,
        required: true,
    },
})


const ProductModel = mongoose.model("products", productSchema)

module.exports = { ProductModel }