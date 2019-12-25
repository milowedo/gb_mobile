const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    author: {
        type: String,
        required: true,
    },
    title: {
        unique: true,
        type: String,
        required: true,
    },
    price: {
        type: Number,
    },
});

mongoose.model('Book', BookSchema);
