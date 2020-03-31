const mongoose = require("mongoose");
const express = require("express");
const User = mongoose.model("users");
const router = express.Router();

//Get all Tasks
router.get("/", async (req, res) => {
  try {
    let { _id } = req.body;
    const user = await User.findOne({ _id: _id });
    const tasks = user.tasks;
    res.send(tasks);
  } catch (err) {
    res.send(400).json({ message: err.message });
  }
});

//Create a new Task
router.post("/new", async (req, res) => {
  try {
    let {
      title,
      _user,
      category,
      description,
      createdAt,
      startDate,
      endDate
    } = req.body;
    await User.update(
      { _id: _user },
      {
        $push: {
          tasks: {
            title,
            category,
            description,
            createdAt,
            startDate,
            endDate,
            _user: _user
          }
        }
      }
    );
    res.status(201).json(req.body);
  } catch (err) {
    res.send(400).json({ message: err.message });
  }
});

//Update a task

router.put("/:userId", async (req, res) => {
  try {
    let { userId } = req.params;
    let { _id } = req.body;
    await User.update(
      {
        _id: userId,
        "tasks._id": _id
      },
      { $set: { "tasks.$": req.body } }
    );

    res.send("successfully updated");
  } catch (err) {
    res.send(400).json({ message: err.message });
  }
});

//Delete a task

router.delete("/:_userId", async (req, res) => {
  try {
    let { _taskId } = req.body;
    await User.update(
      {
        _id: req.params._userId
      },
      {
        $pull: {
          tasks: {
            _id: _taskId
          }
        }
      }
    );

    res.send("removed");
  } catch (err) {
    res.send(400).json({ message: err.message });
  }
});

module.exports = router;
