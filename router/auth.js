const Router = require("express").Router();
const Validator = require("../validator/user.auth.validator");

Router.post("/signup", Validator.signUp, Service.signUp);

module.exports = Router;
