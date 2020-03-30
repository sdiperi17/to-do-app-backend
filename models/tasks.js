const mongoose = require("mongoose");
const { Schema } = mongoose;

const TasksSchema = new Schema({
  title: String
  //   category: String,
  //   description: String
  //   createAt: String,
  //   startDate: String,
  //   endDate: String
});

module.exports = TasksSchema;

// we didn't create a mongoose model because this is not going to map to a distinct collection of tasks
