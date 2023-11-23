var express = require('express');
var router = express.Router();
const Tweet = require("../models/tweets");

router.get('/', async(req, res) => {
    const tweets = await Tweet.find();
    res.json({ tweets });
});

router.post('/newTweet', async(req, res) => {
    const { tweetBody } = req.body;
    const hashtags = tweetBody.split(' ').filter(word => word[0] === '#');
    console.log(hashtags);
    await new Tweet({
        user: '655f26b61eaa972ef516bf61',   
        tweet: tweetBody,
        hashtags,
        date: new Date()
    }).save();
    const tweets = await Tweet.find();
    res.json({ result: true, tweets });
});

module.exports = router;