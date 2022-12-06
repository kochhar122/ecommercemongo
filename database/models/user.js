const mongoose = require("mongoose");
const { Schema } = mongoose;

const userDetails = new Schema({
  username: String,
  password: String,
  email: String,
  role: String,
});

/*const userdata = (data) => {
  console.log("datad>.>>>>", data);
};*/

const userModel = new mongoose.model("user", userDetails);

// by using ".exports" we'll make userDetails available for app.js

//module.exports = userdata;
module.exports = userModel;
