const mongoose = require('mongoose');


const ClientSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
        min: 10
    },
    email: {
        type: String,
        required: true,
        min: 10,
        max: 255
    },
    password: {
        type: String,
        required: true,
        max: 1024,
        min: 6
    },
    date: {
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model('Client', ClientSchema);