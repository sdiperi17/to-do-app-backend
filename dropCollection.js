const mongoose = require("mongoose");
const db = mongoose.connection;
const Schema = mongoose.Schema;
const keys = require("./config/keys");

db.on("error", console.error);

db.once("open", function() {
  console.log("db connect");

  db.dropCollection("users", function(err, result) {
    if (err) {
      console.log("error delete collection");
    } else {
      console.log("delete collection success");
    }
  });
});

mongoose.connect(keys.mongoURI);
