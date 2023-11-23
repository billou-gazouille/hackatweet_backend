const mongoose = require("mongoose");

const tweetSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.types.ObjectId,
    ref: "users",
  },
  tweet: String,
  // hashtags: [{ type: mongoose.Schema.types.ObjectId, ref: "hashtags" }],
  hashtags: [String],

  date: Date,
});

const Tweet = mongoose.model("tweets", tweetSchema);

module.exports = Tweet;
