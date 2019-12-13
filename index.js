const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');


dotenv.config();



// connection
mongoose.connect(process.env.DB_CONN,
{ useNewUrlParser: true , useUnifiedTopology: true} ,() => console.log('Connected'));


// middle
app.use(express.json());

// routes
const authRoute = require('./routes/auth');
const Messages = require('./routes/messages');
const Search = require('./routes/search');

// middle route
app.use('/clients', authRoute);
app.use('/messages', Messages);
app.use('/search', Search);


app.listen(3000,() => console.log("Server up"));


