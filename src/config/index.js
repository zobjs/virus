const dotenv = require("dotenv");

dotenv.config();

const config = {
  PORT: process.env.PORT || 5001,
  MONGO_URI: process.env.MONGO_URI || "",
  JWT_SECRET: process.env.JWT_SECRET,
};

module.exports = config;
