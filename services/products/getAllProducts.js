const productModel = require('../../database/models/products');
var i = 0;
module.exports = async function () {
    let products = await productModel.find({}).limit(5);
    return products;

}