//schema means structure
const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
}, { timestamps: true });
//create a Model
const Category = mongoose.model('category', categorySchema)
//export model
module.exports = Category





