const getMoreProducts = require('../../services/products/getMoreProducts');

module.exports = async function (req, res) {
	let page = req.params.id;
	console.log(page);
	try {
		const data = await getMoreProducts(page);
		res.json(data);
	} catch (err) {
		console.log('Error in getting more products', err);
	}
};