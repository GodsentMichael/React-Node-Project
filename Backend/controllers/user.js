const express = require("express");
const path = require("path");
const User = require("../models/user");
const router = express.Router();
const { upload } = require("../multer");
const ErrorHandler = require("../utils/ErrorHandler");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const fs = require("fs");
// const jwt = require("jsonwebtoken");
// const sendMail = require("../utils/sendMail");
// const sendToken = require("../utils/jwtToken");
// const { isAuthenticated, isAdmin } = require("../middleware/auth");


exports.registerUser = async (req, res, next) => {
    try {
      const { name, email, password } = req.body;
      const userEmail = await User.findOne({ email });
  
      if (userEmail) {
        const filename = req.file.filename;
        const filePath = `uploads/${filename}`;
        fs.unlink(filePath, (err) => {
          if (err) {
            console.log(err);
            res.status(500).json({ message: "Error deleting file" });
          }
        });
        return next(new ErrorHandler("User already exists", 400));
      }
  
      const filename = req.file.filename;
      const fileUrl = path.join(filename);
  
      const user = {
        name: name,
        email: email,
        password: password,
        avatar: fileUrl,
      };
      console.log("The User=>",user);

      // To save the user to Db
      const newUser = await User.create( user);
      res.status(201).json({
        success: true,
        newUser,
      });
      // const activationToken = createActivationToken(user);
  
      // const activationUrl = `https://eshop-tutorial-cefl.vercel.app/activation/${activationToken}`;
  
      // try {
      //   await sendMail({
      //     email: user.email,
      //     subject: "Activate your account",
      //     message: `Hello ${user.name}, please click on the link to activate your account: ${activationUrl}`,
      //   });
      //   res.status(201).json({
      //     success: true,
      //     message: `please check your email:- ${user.email} to activate your account!`,
      //   });
      // } catch (error) {
      //   return next(new ErrorHandler(error.message, 500));
      // }
    } catch (error) {
      return next(new ErrorHandler(error.message, 400));
    }
  }
