const productAdmin = require('../../database/models/products');
module.exports = async function () {
    let products = await productAdmin.find({});
    return products;
}