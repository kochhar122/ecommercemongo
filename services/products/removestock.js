const productModel = require('../../database/models/products')

module.exports = async function (id) {
    const products = await productModel.deleteOne({ _id: id });
    return products;
}