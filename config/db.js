const mongoose = require("mongoose");
require('dotenv').config();

const dbconnect = async () => {
  await mongoose.connect(`${process.env.URL}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("Connected to db");
};

module.exports = dbconnect;
