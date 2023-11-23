require("dotenv").config();
require("./models/connection");

const Tweet = require("./models/tweets");
Tweet.deleteMany()
    .then(() => console.log('tweets deleted'))
    .catch(() => console.log('could not delete tweets'));
