const verifyUserService = require('../../services/users/verifyUser');

module.exports = async function (req, res) {

	const userId = req.params.userId;
	try {
		await verifyUserService(userId)
		res.redirect("/");
	}
	catch (err) {
		res.json(err);
	}

}