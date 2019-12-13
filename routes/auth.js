const router = require('express').Router();
const Client = require('../model/client');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { RegisterValidation, LoginValidation } = require('../validation');



router.post('/register', async (req, res) => {

    // validation
    const { error } = RegisterValidation(req.body);
    if(error) return res.status(400).send(error.details[0].message);


    // check if client exists
    const TestEmail = await Client.findOne({email:req.body.email});
    if(TestEmail) return res.status(400).send('Email already exists');

    // hash password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    // new client
    const client = new Client({
        name: req.body.name,
        email: req.body.email,
        password: hashPassword
    });

    try{

        const savedClient = await client.save();
        res.send(savedClient);

    }catch(err){
        res.status(400).send(err);
    }

});

router.post('/login', async (req, res) => {
    
    // validation
    const { error } = LoginValidation(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    // check if email exists
    const user = await Client.findOne({email:req.body.email});
    if(!user) return res.status(400).send('Email or pass doesnt exists');
    // check pass
    const validPass = await bcrypt.compare(req.body.password, user.password);
    if(!validPass) return res.status(400).send('Wrong Password');

    // create session (token)
    const token = jwt.sign({_id: user._id}, process.env.TOKEN);
    res.header('auth-token', token).send(token);

    res.send('Logged In');
    


});

module.exports = router;