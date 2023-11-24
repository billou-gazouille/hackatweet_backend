var express = require("express");
var router = express.Router();
const mongoose = require("mongoose");
const Tweet = require("../models/tweets");
const User = require("../models/users");

router.get("/all", async (req, res) => {
  const tweets = await Tweet.find().populate("user");
  res.json({ tweets });
});

router.post("/newTweet", async (req, res) => {
  const { tweetBody, token } = req.body;
  const hashtags = tweetBody.split(" ").filter((word) => word[0] === "#");
  console.log(hashtags);
  console.log("token:", token);
  const user = await User.findOne({ token });
  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }
  await new Tweet({
    //user: mongoose.Schema.Types.ObjectId,
    user: user._id,
    tweet: tweetBody,
    hashtags,
    date: new Date(),
  }).save();
  const tweets = await Tweet.find().populate("user");
  res.json({ result: true, tweets });
});

module.exports = router;
