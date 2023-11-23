const mongoose = require("mongoose");

const tweetSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.types.ObjectId,
    ref: "users",
  },
  tweet: String,
  hashtag: [{ type: mongoose.Schema.types.ObjectId, ref: "hashtags" }],
  date: Date,
});

const Tweet = mongoose.model("tweets", tweetSchema);

module.exports = Tweet;
