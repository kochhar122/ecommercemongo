const product = require('../../database/models/cart');
module.exports = async function () {
    let products = await product.find({});
    return products;
}