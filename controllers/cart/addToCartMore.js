const addToCart = require('../../services/cart/addToCart');

module.exports = async function (req, res) {

  const product = req.body.text

  //console.log(product)

  var prodMoreCart = {
    productName: product[0],
    desc: product[1],
    img: product[2],
    quantity: "1",
    username: req.session.username
  }
  //console.log("product added to cart is"+" "+prodMoreCart.productName)
  try {
    await addToCart(prodMoreCart);
    res.redirect("/");
  }
  catch (err) {
    res.send(err);
  }
}