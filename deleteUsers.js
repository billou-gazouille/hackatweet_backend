require("dotenv").config();
require("./models/connection");

const User = require("./models/users");
User.deleteMany()
  .then(() => console.log("users deleted"))
  .catch(() => console.log("could not delete users"));
