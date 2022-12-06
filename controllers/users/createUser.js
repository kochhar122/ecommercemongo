const createUserService = require("../../services/users/createUser");

module.exports = async function (req, res) {
  const user = {
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
    role: req.body.role,
  };
  try {
    await createUserService(user);
    //res.redirect("/login.html");
  } catch (err) {
    console.log("error in controllers");
  }
};
