const deleteFromCart = require('../../services/cart/deleteFromCart');

module.exports = async function (req, res) {
  var abc = JSON.parse(req.body.text);

  var id = abc.val._id;
  // const removeElem


  try {
    await deleteFromCart(id);
    res.redirect("/openCart");
  }
  catch (err) {
    res.send(err);
  }
}