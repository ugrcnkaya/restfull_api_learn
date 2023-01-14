const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
const bodyParser = require('body-parser');

app.use(bodyParser.json());


router.get('/', (req,res) => {
    res.send("posts")
});

router.post('/', (req,res) => {
    console.log(req.body);

});
module.exports = router;
