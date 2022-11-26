const User = require("../models/userModel");
const bcrypt = require("bcrypt");

exports.registerController = async (req, res) => {
  const { firstName, middleName, lastName, userName, email, password } =
    req.body;
  try {
    const hashPassword = await bcrypt.hash(password, 12);
    const user = await User.create({
      firstName,
      middleName,
      lastName,
      userName,
      email,
      password: hashPassword,
    });
    res.status(201).json({
      status: "success",
      data: {
        user,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "failed",
    });
    console.log(e)
  }
};

exports.loginController = async (req, res) => {
    const {email, password} = req.body;
    try{
        const userRecord = await User.findOne({email})
        if(!userRecord){
            return res.status(404).json({
                status:"failed",
                message: "No email address found."
            })
        }
        const isTrue = await bcrypt.compare(password, userRecord.password)
        if(isTrue){
            res.status(200).json({
                status: "success"
            })
        }else{
            return res.status(400).json({
                status:"failed",
                message: "Please enter the correct password or email"
            })
        }
    }catch (err){
        res.status(400).json({
            status:"failed"
        })
        console.log(err);
    }
}