const adminAddProd = require('../../database/models/products')

module.exports = async function (adminStock) {
    const adminProducts = await adminAddProd.create(adminStock)
    return adminProducts;
}

