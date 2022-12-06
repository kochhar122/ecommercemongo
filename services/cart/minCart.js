const productCartModel = require('../../database/models/cart')

module.exports = async function (minToCart) {
    var id = minToCart.id;
    var quant = minToCart.quantity;

    const mincartProducts = await productCartModel.findOneAndUpdate({ _id: id }, { quantity: quant })
    return mincartProducts;
}