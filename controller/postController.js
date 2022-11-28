const Post = require("../models/postModel");
const User = require("../models/userModel");

exports.createPost = async (req, res) => {
  try {
    const newPost = await Post.create(req.body);
    res.status(200).json({
      newPost,
    });
  } catch (e) {
    res.status(500).json(e);
  }
};

exports.updatePost = async (req, res) => {
  if (req.body.userId === req.params.id) {
    try {
      const updatePost = await Post.findById(req.params.id);
      const updatedPost = await updatePost.updateOne(req.body, {
        new: true,
        runValidators: true,
      });
      res.status(200).json({
        message: "post updated successfully",
      });
    } catch (e) {
      res.status(500).json(e);
    }
  } else {
    res.status(403).json("you can update your posts only.");
  }
};

exports.deletePost = async (req, res) => {
  const deletePost = await Post.findById(req.params.id);
  if (req.body.userId === deletePost.userId) {
    try {
      await deletePost.deleteOne();
      res.status(200).json({
        message: "post deleted successfully",
      });
    } catch (e) {
      console.log(e);
      res.status(500).json(e);
    }
  } else {
    res.status(403).json("you can delete your posts only.");
  }
};

exports.likePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    const user = await User.findById(req.body.userId);
    if (!post.like.includes(req.body.userId)) {
      if (!post.dislike.includes(req.body.userId)) {
        await post.updateOne({ like: req.body.userId });
        res.status(200).json({
          message: "The post has been liked",
        });
      } else {
        await post.updateOne({ dislike: !req.body.userId });
        await post.updateOne({ like: req.body.userId });
        res.status(200).json({
          message1: "The post is now liked",
          message2: "You no longer dislike the post",
        });
      }
    } else {
      await post.updateOne({ like: !req.body.userId });
      res.status(200).json({
        message: "You no longer like this post",
      });
    }
  } catch (e) {
    console.log(e);
    res.status(500).json(e);
  }
};

exports.dislikePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    const user = await User.findById(req.body.userId);
    if (!post.dislike.includes(req.body.userId)) {
      if (!post.like.includes(req.body.userId)) {
        await post.updateOne({ dislike: req.body.userId });
        res.status(200).json({
          message: "The post has been disliked",
        });
      } else {
        await post.updateOne({ like: !req.body.userId });
        await post.updateOne({ dislike: req.body.userId });
        res.status(200).json({
          message1: "The post is now disliked",
          message2: "You no longer like the post",
        });
      }
    } else {
      await post.updateOne({ dislike: !req.body.userId });
      res.status(200).json({
        message: "You no longer dislike this post",
      });
    }
  } catch (e) {
    console.log(e);
    res.status(500).json(e);
  }
};

exports.getPost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json({
      post,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json(e);
  }
};

exports.timelinePost = async (req, res) => {
    try {
      const currentUser = await User.findById(req.body.userId);
      const userPosts = await Post.find({ userId: currentUser._id });
      const friendPosts = await Promise.all(
        currentUser.following.map((friendId) => {
          return Post.find({ userId: friendId });
        })
      );
      res.json(userPosts.concat(...friendPosts))
    } catch (err) {
      res.status(500).json(err);
    }
  };
