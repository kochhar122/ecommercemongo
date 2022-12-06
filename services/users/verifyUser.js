const userdata = require('../../database/models/user');

module.exports = async function (userId) {
    const user = await userdata.findOne({ _id: userId });

    if (user) {
        console.log(user);
        await userdata.updateOne({ _id: userId }, { islogged: true });
        return;
    }
    else {
        throw new Error("user not found");
    }
}