const router = require('express').Router();
const verify = require('./verifyToken');
const Messages = require('../model/messages');

router.post('/', verify, async (req, res) => {

    // searching chats
    const find = await Messages.find({
        owner: req.user._id
    })

    res.send(find);


})



module.exports = router;