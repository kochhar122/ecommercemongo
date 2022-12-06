const productCartModel = require('../../database/models/cart')

module.exports = async function (id) {
    const cartProducts = await productCartModel.deleteOne({ _id: id });
    return cartProducts;
}

