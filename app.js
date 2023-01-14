const express = require('express');
const app = express();
const mongoose = require('mongoose')
const cors = require('cors');
require('dotenv/config');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(cors());

//Import Routes
const postsRoute = require('./routes/posts');
app.use('/posts', postsRoute);


//get, post, delete, patch
app.get('/', (req, res) => {
    res.send('We are on home.');
});

//db
mongoose.set('strictQuery', true);
mongoose.connect(process.env.DB_CONNECTION, ()  => {
    console.log('connected to db!');

});
//listen
app.listen(3000);