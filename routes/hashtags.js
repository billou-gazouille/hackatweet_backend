var express = require("express");
var router = express.Router();

const Tweet = require("../models/tweets");

router.get.get("/", async (req, res) => {
  try {
    const tweets = await Tweet.find();
    res.json(tweets);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
