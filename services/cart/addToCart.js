const productCartModel = require('../../database/models/cart')

module.exports = async function (prodCart) {
    const cartProducts = await productCartModel.create(prodCart)
    return cartProducts;
}