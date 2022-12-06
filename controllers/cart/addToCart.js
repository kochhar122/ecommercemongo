const addToCart = require('../../services/cart/addToCart');

module.exports = async function (req, res) {

  const product = req.body.text
  const abc = JSON.parse(product);

  var prodCart = {
    productName: abc.val.productName,
    desc: abc.val.desc,
    img: abc.val.img,
    quantity: "1",
    username: abc.key2
  }
  //console.log("product added to cart is"+" "+prodCart)
  try {
    await addToCart(prodCart);
    res.redirect("/");
  }
  catch (err) {
    res.send(err);
  }
}