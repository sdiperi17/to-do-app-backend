const mongoose = require("mongoose");
const User = mongoose.model("users");
const express = require("express");
var router = express.Router();

//GET ALL USERS
router.get("/", async (req, res) => {
  const users = await User.find({});
  const userMap = {};
  users.forEach(user => {
    userMap[user._id] = user;
  });

  res.send(userMap);
});

//ADD NEW USERS
router.post("/new", async (req, res) => {
  console.log("TEST", req.body);
  const { firstname, lastname, email } = req.body;
  const user = new User({
    firstname,
    lastname,
    email,
    tasks: []
  });

  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE USER
router.delete("/:id", async (req, res) => {
  let id = req.params.id;
  await User.find({ _id: id }).remove();
  res.json({ success: id });
});

module.exports = router;
