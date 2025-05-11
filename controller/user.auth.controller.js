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
  }
};
