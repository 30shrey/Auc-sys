const mongoose = require("mongoose");

const FurnitureSchema = new mongoose.Schema({
    Product: {
        type: String,
        required: true
    },
    Price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    material: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    }

})
 module.exports = furniture;