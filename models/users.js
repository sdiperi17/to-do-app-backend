const mongoose = require("mongoose");
const { Schema } = mongoose;
const TasksSchema = require("./tasks");

const UsersSchema = new Schema({
  userID: String,
  name: String,
  posts: [TasksSchema]
});

mongoose.model("users", UsersSchema);

// We need to communicate to user Schema that it should have embedded list of tasks
