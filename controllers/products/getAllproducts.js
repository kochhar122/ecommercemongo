

const getAllprod = require('../../services/products/getAllproducts');

module.exports = async function (req, res) {
  try {
    var displayName = req.session.username;

    arrSend = []
    const prodCartData = await getAllprod();
    //console.log(prodData)
    res.render("home", { key: prodCartData, key2: displayName })
  }
  catch {
    res.end("errrorrrr")
  }
}
