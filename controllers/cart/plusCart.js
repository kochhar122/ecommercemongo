const plusCart = require("../../services/cart/plusCart")

module.exports = async function (req, res) {
  // console.log("cart plus btn")
  const ab = JSON.parse(req.body.text);
  // console.log(ab.val)
  // console.log(ab.val.quantity)
  ab.val.quantity += 1;
  console.log(ab.val.quantity);

  var plusToCart = {
    id: ab.val._id,
    productName: ab.val.productName,
    desc: ab.val.desc,
    img: ab.val.img,
    quantity: ab.val.quantity,
    username: ab.key2,
  }

  console.log(plusToCart);

  try {
    await plusCart(plusToCart);
    // res.redirect("openCart");
  }
  catch (err) {
    res.send(err);
  }

}