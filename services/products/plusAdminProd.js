const productModel = require('../../database/models/products')

module.exports = async function (minToStock) {
    var id = minToStock.id;
    var quant = minToStock.quantity;

    const minStockProducts = await productModel.findOneAndUpdate({ _id: id }, { quantity: quant })
    return minStockProducts;
}