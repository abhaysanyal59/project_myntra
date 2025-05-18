<<<<<<< HEAD
const Router = require("express").Router();
const Validator = require("../validator/user.auth.validator");

Router.post("/signup", Validator.signUp, Service.signUp);
=======
const { signin } = require("../controller/user.auth.controller");

const router = require("express").Router();
>>>>>>> bd205eb11ef7fb2d257ac1f144a57684fa71de3e

// router.post("/signup");
router.post("/signin", signin);

module.exports = router;
