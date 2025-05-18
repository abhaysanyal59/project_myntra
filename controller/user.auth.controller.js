const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");
const Lang = require("../locales/en.json");
const Response = require("../utils/response.util");

exports.signUp = async (request, response) => {
  try {
    const { username, email, password } = request.body;

    const isUserExist = await mongoose
      .model("authorizationModel")
      .findOne({ username, email })
      .exec();
    if (isUserExist) {
      return Response.validatorResponse(response, Lang.USER_ALREADY_EXIST);
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const signUpUser = {
      user_name: username,
      email: email,
      password: hashedPassword,
    };

    await mongoose.model("authorizationModel").create(signUpUser);
    return Response.success();
  } catch (error) {
    console.log(error.message);
    return Response.validatorResponse(response, error.message);
  }}
  
exports.signin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      {
        expiresIn: process.env.JWT_EXPIRES_IN,
      }
    );

    res.status(200).json({
      success: true,
      message: "User Signed In Successfully",
      token: token,
      user: user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};