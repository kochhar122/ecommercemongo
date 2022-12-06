const productModel = require('../../database/models/products');

module.exports = async function (page) {
    const products = await productModel
        .find({}).skip(page * 5).limit(5);

    return products;
};