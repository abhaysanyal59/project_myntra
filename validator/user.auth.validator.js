const Response = require("../utils/response.util");
const Lang = require("../locales/en.json");

exports.signUp = (request, response, next) => {
  if (!request.body.username) {
    return Response.badRequest(response, Lang.USERNAME_REQUIRED);
  }
  if (!request.body.email) {
    return Response.badRequest(response, Lang.EMAIL_REQUIRED);
  }
  if (!request.body.age) {
    return Response.badRequest(response, Lang.AGE_REQUIRED);
  }
  if (!request.body.gender) {
    return Response.badRequest(response, Lang.GENDER_REQUIRED);
  }
  if (!request.body.password) {
    return Response.badRequest(response, Lang.PASSWORD_REQUIRED);
  }
  next();
};
