const productCartModel = require('../../database/models/cart')

module.exports = async function (plusToCart) {
    var id = plusToCart.id;
    var quant = plusToCart.quantity;
    
    const pluscartProducts = await productCartModel.findOneAndUpdate({ _id: id }, { quantity: quant });
    return pluscartProducts;
}