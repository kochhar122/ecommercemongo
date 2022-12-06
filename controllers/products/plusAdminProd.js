const plusAdmin = require("../../services/products/plusAdminProd")

module.exports = async function (req, res) {
  console.log("cart plus btn")
  const ab = JSON.parse(req.body.text);
  console.log(ab.val)
  console.log(ab.val.quantity)
  ab.val.quantity += 1;
  console.log(ab.val.quantity);

  var plusToStock = {
    id: ab.val._id,
    productName: ab.val.productName,
    desc: ab.val.desc,
    img: ab.val.img,
    quantity: ab.val.quantity,
    username: ab.key2,
  }

  console.log(plusToStock);

  try {
    await plusAdmin(plusToStock);
    res.redirect("/viewAdminPage");
  }
  catch (err) {
    res.send(err);
  }

}