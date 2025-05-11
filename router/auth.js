const { signin } = require("../controller/user.auth.controller");

const router = require("express").Router();

// router.post("/signup");
router.post("/signin", signin);

module.exports = router;
