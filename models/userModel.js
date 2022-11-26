const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  firstName: {
    type: String,
    trim: true,
    required: [true, "Firstname is mandatory"],
  },
  middleName: {
    type: String,
    trim: true,
    default: "",
  },
  lastName: {
    type: String,
    trim: true,
    required: [true, "Lastname is mandatory"],
  },
  userName: {
    type: String,
    required: [true, "Username is mandatory"],
    min: 3,
    trim: true,
    max: 15,
    unique: true,
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    validate: {
      validator: (v) => {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
      },
      message: (message) => `${message.value} is not a valid email address.`,
    },
    required: [true, "Email address is mandatory"],
  },
  password: {
    type: String,
    required: [true, "Password is mandatory"],
    min: 6,
  },
  profilePicture: {
    type: String,
    default: "",
  },
  coverPicture: {
    type: String,
    default: "",
  },
  followers: {
    type: Array,
    default: [],
  },
  following: {
    type: Array,
    default: [],
  },
  isAdmin: {
    type: Boolean,
    default: false
  },
  bio: {
    type:String,
    max:50
  },
  City: {
    type:String,
    max:50
  },
  from: {
    type:String,
    max:50
  },
  relationship: {
    type:String,
    enum: ['single', 'complicated', 'in relation']
  }
}, { timestamps: true });

const User = mongoose.model("User", userSchema)
module.exports = User
