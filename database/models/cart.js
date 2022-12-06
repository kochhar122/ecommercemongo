const mongoose = require('mongoose');
const { Schema } = mongoose;

const productDetails = new Schema({
  productName: String,
  desc: String,
  img: String,
  quantity: {
    type: Number,
    default: "1"
  },
  username: String
});

const productCartModel = new mongoose.model("cart", productDetails);

// by using ".exports" we'll make userDetails available for appjs 
module.exports = productCartModel;