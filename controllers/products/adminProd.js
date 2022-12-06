const adminProdAdd = require('../../services/products/adminProd');

module.exports = async function (req, res) {
  try {
    var displayName = req.session.username;
    console.log("")
    var arrSend = []
    const adminProd = await adminProdAdd();
    adminProd.forEach(function (val) {
      if (val.sellername === displayName) {
        arrSend.push(val)
      }
      //console.log("hi "+ arrSend)
    })

    res.render("adminProd", { key: arrSend, key2: displayName })
  }
  catch {
    res.end("errrorrrr")
  }
}
