const adminAdd = require('../../services/products/adminAdd');

module.exports = async function (req, res) {

  const product = req.body
  var adminStock = {
    productName: product.productName,
    desc: product.productDesc,
    price: product.productPrice,
    img: product.productImg,
    quantity: product.productQuantity,
    sellername: req.session.username
  }
  const name = req.session.username;
  console.log(name)
  //console.log("product added to cart is"+" "+prodCart.productName)
  try {
    await adminAdd(adminStock);
    res.render("admin-home", { key2: name });
  }
  catch (err) {
    res.send(err);
  }
}