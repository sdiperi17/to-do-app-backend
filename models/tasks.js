const mongoose = require("mongoose");
const { Schema } = mongoose;

const TasksSchema = new Schema({
  title: String,
  category: String,
  description: String,
  createdAt: String,
  startDate: String,
  endDate: String,
  //to set up relationship betweeen tasks and user
  // to make mongoose to understand that every survey is going to be a reference to a very particular user or another instance of user
  _user: { type: Schema.Types.ObjectId, ref: "users" }
});

module.exports = TasksSchema;

// we didn't create a mongoose model because this is not going to map to a distinct collection of tasks

//   category: String,
//   description: String
//   createAt: String,
//   startDate: String,
//   endDate: String
