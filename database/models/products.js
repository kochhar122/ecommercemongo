const mongoose = require('mongoose');
const { Schema } = mongoose;

const productDetails = new Schema({
  productName: String,
  desc: String,
  price: Number,
  img: String,
  quantity: Number,
  sellername: String
});

const productModel = new mongoose.model("product", productDetails);

// by using ".exports" we'll make userDetails available for app.js 
module.exports = productModel;