const mongoose = require('mongoose');


const ChatSchema = new mongoose.Schema({

    owner: {
        type: String,
        required: true,
        min:10
    },
    contact: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Chat', ChatSchema);