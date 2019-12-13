const mongoose = require('mongoose');


const MessagesSchema = new mongoose.Schema({

    owner: {
        type: String,
        required: true,
        min:10
    },
    message: {
        type: String,
        required: true,
        min: 10
    },
    chat: {
        type: String,
        required: true,
        min: 10
    }



})

module.exports = mongoose.model('Messages', MessagesSchema);