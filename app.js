const express = require('express');
const app = express();
const mongoose = require('mongoose')
require('dotenv/config');


//1-Middlewares

//function that executes when specific routes are being hit. (bus)
/*
* For example = auth can be a middleware feature.
* */
app.use('/posts', () => {
   // console.log("this is a middleware running.")
});

//2-Routes
//get, post, delete, patch
app.get('/', (req, res) => {
    res.send('We are on home.');
});

app.get('/posts', (req, res) => {
    res.send('We are on posts.');
});



//3-DB
mongoose.set('strictQuery', true);
mongoose.connect(process.env.DB_CONNECTION, ()  => {
    console.log('connected to db!');

});


//4-How do we start listening to the server?
app.listen(3000);