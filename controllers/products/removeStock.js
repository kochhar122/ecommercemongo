const deleteFromProd = require('../../services/products/removeStock');

module.exports = async function (req, res) {
  var abc = JSON.parse(req.body.text);

  var id = abc.val._id;
  console.log(abc.val);
  console.log(abc.val)

  try {
    await deleteFromProd(id);
    res.redirect("/viewAdminPage")
  }
  catch (err) {
    res.send(err);
  }
}