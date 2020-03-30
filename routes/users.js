const mongoose = require("mongoose");
const User = mongoose.model("users");

module.exports = app => {
  //Get all Users
  app.get("/users", async (req, res) => {
    const users = await User.find({});
    const userMap = {};
    users.forEach(user => {
      userMap[user._id] = user;
    });

    res.send(userMap);
  });

  app.post("/user/new", async (req, res) => {
    console.log(req.body);
    // const newUser = await new User({
    //   userID: 18,
    //   name: "Tyrone",
    //   posts: ["study", "teach", "eats"]
    // }).save();

    // const user = await User.find({ name: "Tyrone" });
    // const userMap = {};
    // users.forEach(user => {
    //   userMap[user._id] = user;
    // });

    res.send("test");
  });
};
