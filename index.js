const express = require("express");
const app = express();
const mongoose = require("mongoose");
const keys = require("./config/keys");

//pull the Schema/Model out we pass one argument into => mongoose.model("collectionName")

mongoose.connect(keys.mongoURI);
require("./models/users");
const User = mongoose.model("users");

async function addUser() {
  const user = await new User({ userID: 17, name: "Saida" }).save();
}
addUser();

app.get("/", (req, res) => {
  res.send("TO DO APP");
});

require("./routes/users")(app);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
