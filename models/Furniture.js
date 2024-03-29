const mongoose = require("mongoose");

const FurnitureSchema = new mongoose.Schema({
    product: {
        type: String,
        required: true
    },
    price: {
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
module.exports = Furniture = mongoose.model('furniture', FurnitureSchema);


