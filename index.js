const express = require("express");
const app = express();
const mongoose = require("mongoose");
const keys = require("./config/keys");
const bodyParser = require("body-parser");
require("./models/users");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const userRoutes = require("./routes/user");
const tasksRoutes = require("./routes/task");

//pull the Schema/Model out we pass one argument into => mongoose.model("collectionName")

mongoose.connect(keys.mongoURI);

// const User = mongoose.model("users");

// async function addUser() {
//   const user = await new User({ userID: 17, name: "Saida" }).save();
// }
// addUser();

app.get("/", (req, res) => {
  res.send("TO DO APP");
});

app.use("/user", userRoutes);
app.use("/task", tasksRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
