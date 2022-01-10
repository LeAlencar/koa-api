const mongoose = require("mongoose");

require('dotenv').config()

const initDB = () => {
  mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true
  });

  mongoose.connection
    .once("open", () => {

      console.log("Connected to Database");
    });
};

module.exports = initDB;