const express = require("express");
const router = express.Router();
const { registerUser } = require("../controller/userController");

router.route("/").post(registerUser);
// router.route("/login").post(authUser);

module.exports = router;
