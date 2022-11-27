const express = require("express");
const router = express.Router();
const postController = require("../controller/postController")
// @desc Create a Post
// @route /
router.post("/", postController.createPost)

// @desc Update a Post
// @route /:id
router.put("/:id", postController.updatePost)

// @desc Delete a Post
// @route /
router.delete("/:id", postController.deletePost)

// @desc Like a Post
// @route /
router.post("/:id/like", postController.likePost)

// @desc Dislike a Post
// @route /
router.post("/:id/dislike", postController.dislikePost)

// @desc Get a Post
// @route /
router.get("/:id", postController.getPost)

// @desc Get a Timeline Post
// @route /timeling
router.post("/:id/timeline", postController.timelinePost)

module.exports = router;
