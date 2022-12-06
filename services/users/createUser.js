// const userModel = require('../../database/models/user');
// const mail=require('../../utils/sendMail.js')

const userModel = require("../../database/models/user");

module.exports = async (req, res, next) => {

  const { username, email, password, role } = req.body;
  try {
    const existingUser = await userModel.findOne({ username,role });
    if (existingUser) {
      const error = new Error(
        `Account with this User Name: ${username} already exists`
      );
      error.statusCode = 401;
      return next(error);
    } else {
    
      const data = new userModel({
    username,
    email,
    password,
    role,
      });

      await data.save();
      res.status(201).json({
        msg: `User Registered successfully !`,
        data,
      });
    }
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
