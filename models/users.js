const mongoose = require("mongoose");
const { Schema } = mongoose;
const TasksSchema = require("./tasks");

const UsersSchema = new Schema({
  firstname: String,
  lastname: String,
  email: String,
  // sub document collection
  tasks: [TasksSchema]
});

// registering userSchema with Mongoose
// We need to communicate to user Schema that it should have embedded list of tasks
mongoose.model("users", UsersSchema);
