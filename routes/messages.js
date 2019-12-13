const router = require('express').Router();
const verify = require('./verifyToken');
const Client = require('../model/client');
const Message = require('../model/messages');
const Chat = require('../model/chat');

router.post('/', verify, async (req, res) => {

    // verify if chat exists
    const verifyChat = await Chat.find({
        owner: req.user._id,
        contact: req.body.contact
    });
    if(verifyChat) try{

        const message = new Message({
            owner: req.user._id,
            message: req.body.message,
            chat: verifyChat[0]._id
            });
            try{
                const savedMessage = await message.save();
                res.send(savedMessage);
            }
            catch(err){
                res.send(err);
            }

    }
    catch(err){
        res.status(400).send(err);
    }
    else try{
        console.log("Hello")
    }
    catch(err){
        res.send(err);
    }



})



module.exports = router;