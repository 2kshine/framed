const express = require("express");
const router = express.Router();
const userController = require('../controller/userController')

// @desc Update User
// @route /:id
router.put("/:id", userController.updateUser)

// @desc Delete user
// @route /:id
router.delete("/:id", userController.deleteUser)

// @desc Get a User
// @route /:id
router.get("/:id", userController.getUser)

// @desc follow a user
// @route /register
router.put("/:id/follow", userController.followUser)

// @desc Unfollow a user
// @route /register
router.put("/:id/unfollow", userController.unfollowUser)

module.exports = router;
