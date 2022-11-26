const bcrypt = require("bcrypt");
const { json } = require("body-parser");
const { castObject } = require("../models/userModel");
const User = require("../models/userModel");

exports.updateUser = async (req, res) => {
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    if (req.body.password) {
      try {
        const hashPassword = await bcrypt.hash(req.body.password, 12);
        req.body.password = hashPassword;
      } catch (err) {
        res.status(500).json({ status: "fail" });
        console.log(err);
      }
    }
    try {
      const user = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
      });
      res.status(200).json({
        status: "success",
        data: {
          user,
        },
      });
    } catch (e) {
      res.status(500).json({ status: "fail" });
    }
  } else {
    return res.status(403).json("You can only update your account.");
  }
};

exports.deleteUser = async (req, res) => {
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    try {
      const user = await User.findByIdAndDelete(req.params.id);
      res.status(200).json({
        status: "success",
        message: "you account has been deleted successfully",
        data: {
          user,
        },
      });
    } catch (e) {
      res.status(500).json({ status: "fail" });
    }
  } else {
    return res.status(403).json("You can only delete your account.");
  }
};

exports.getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    //to avoid sending password and updatedat in get user request
    const { password, updatedAt, ...other } = user._doc;
    res.status(200).json({
      data: other,
    });
  } catch (err) {
    res.status(500).json({
      status: "failed",
    });
  }
};

exports.followUser = async (req, res) => {
    if(req.body.userId !== req.params.id){
        try {
            const user = await User.findById(req.params.id);
            const currentUser = await User.findById(req.body.userId);
            if(!user.followers.includes(req.body.userId)){
                await user.updateOne({followers: req.body.userId})
                await currentUser.updateOne({following: req.params.id})
                res.status(200).json({
                    message:"successfully followed the user."
                  });
            }else{
                res.status(403).json("Cant follow same person twice.")
            }
        }catch(err){
            res.status(500).json(err)
        }
    }else{
        res.status(403).json({
            message: "You cant follow yourself"
        })
    }
}

exports.unfollowUser = async (req, res) => {
    if(req.body.userId !== req.params.id){
        try {
            const user = await User.findById(req.params.id);
            const currentUser = await User.findById(req.body.userId);
            if(user.followers.includes(req.body.userId)){
                await user.updateOne({followers: !req.body.userId})
                await currentUser.updateOne({following: !req.params.id})
                res.status(200).json({
                    message:"successfully unfollowed the user."
                  });
            }else{
                res.status(403).json({
                    message: "Cant unfollow same person twice."})
            }
        }catch(err){
            res.status(500).json(err)
        }
    }else{
        res.status(403).json({
            message: "You cant unfollow yourself"
        })
    }
}