var express = require("express");
var router = express.Router();

const Tweet = require("../models/tweets");

router.get("/", async (req, res) => {
  try {
    const tweets = await Tweet.find();
    const array = tweets.map((tweet) => tweet.hashtags);
    let hashtags = [];
    for (let i of array) {
      hashtags = hashtags.concat(i);
    }
    // console.log("coucou", hashtags);
    const isUnique = (item, position, array) => {
      return hashtags.indexOf(item) === position;
    };
    const uniqueHashtags = hashtags.filter(isUnique);
    res.json({ uniqueHashtags });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
