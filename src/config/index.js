const dotenv = require("dotenv");

dotenv.config();

const  MONGO_URI = "mongodb+srv://exzobaidulkazi:tapMTRazUYw4mod6@cluster0.f143vc0.mongodb.net/kazi01"

const config = {
  PORT: process.env.PORT || 7654,
  MONGO_URI:  MONGO_URI,
  JWT_SECRET: process.env.JWT_SECRET,
};

module.exports = config;
