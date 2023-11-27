const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: false,
  },
  password: {
    type: String,
    required: false,
  },
  mobile: {
    type: Number,
    required: false,
  },
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
