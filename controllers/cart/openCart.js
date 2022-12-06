

const cartProd = require('../../services/cart/openCart');

module.exports = async function (req, res) {
  try {
    var displayName = req.session.username;

    var arrSend = []
    const prodData = await cartProd();
    prodData.forEach(function (val) {
      if (val.username === displayName) {
        arrSend.push(val)
      }
      //console.log("hi "+ arrSend)
    })

    res.render("cart", { key: arrSend, key2: displayName })
  }
  catch {
    res.end("errrorrrr")
  }
}
