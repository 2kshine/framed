const express = require("express");
const router = express.Router();
const authController = require("../controller/authController");
// @desc Register
// @route /register
router.post("/register", authController.registerController);

// @desc Login
// @route /login
router.post("/login", authController.loginController)
module.exports = router;
