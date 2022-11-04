const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    ingredient: {
        type: Array,
        required: true

    },
    Category: {
        type: String,
        enum: ['SOUP', 'RICE', 'BEANS', 'BEANS', 'SNACKS', 'PORRIDGE'],
        required: true
    },
    image: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
}, { timestamps: true });


// indexing for search
recipeSchema.index({name: 'text', description: 'text'});

// for search- wildcard indexing
// recipeSchema.index({"$**": 'text'});


const Recipe = mongoose.model('recipe', recipeSchema)

module.exports = Recipe