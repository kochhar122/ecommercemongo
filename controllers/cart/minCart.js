const minCart = require("../../services/cart/minCart")

module.exports = async function (req, res) {
  console.log("cart min btn")
  const ab = JSON.parse(req.body.text);
  //  console.log(ab.val.quantity)
  var q = ab.val.quantity;
  console.log(q);
  if (q > 1) {
    q -= 1;
  }
  //console.log(q);

  var minToCart = {
    id: ab.val._id,
    productName: ab.val.productName,
    desc: ab.val.desc,
    img: ab.val.img,
    quantity: q,
    username: ab.key2,
  }

  try {
    await minCart(minToCart);
    // res.redirect("/openCart");
  }
  catch (err) {
    res.send(err);
  }

}