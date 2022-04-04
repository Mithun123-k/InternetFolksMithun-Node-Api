const ErrorHandler = require('../utils/errorhandler');
const catchAsyncErrors = require('../middleware/catchAsyncErrors');
const User = require('../models/userModel');
const sendToken = require('../utils/jwtToken');


// Sing Up / Register a user

exports.registerUser = catchAsyncErrors(async (req, res, next) => {
    const {first_name, last_name, mobile, email, password} = req.body;

    const user = await User.create({
        first_name,
        last_name,
        mobile,
        email,
        password
    })  

    sendToken(user, 201, res)
})

// Login User

exports.loginUser = catchAsyncErrors(async (req, res, next) => {
    const {email, password} = req.body;

    //  Checking idf user has given password and email both

    if (!email || !password) {
        return next(new ErrorHandler("Please enter email and password", 400))
    }

    const user = await User.findOne({email}).select("+password");

    if(!user){
        return next(new ErrorHandler("Invalid email and password", 401))
    }
    
    const isPasswordMatch = user.comparePassword(password);

    if(!isPasswordMatch){
        return next(new ErrorHandler("Invalid email and password", 401))
    }

    sendToken(user, 200, res)
})

// LogOut User
exports.logOut = catchAsyncErrors(async (req, res, next) => {
    res.cookie("token", null,{
        expires: new Date(Date.now()),
        httpOnly: true,
    })
    res.status(200).json({
        success: true,
        message: "Logged Out"
    })
})

// Get All User

exports.getAllUser = catchAsyncErrors(async (req, res, next) => {
    const user = await User.find();

    res.status(200).json({
        success: true,
        user,
    })
})

// get Single user
exports.getsingleUser = catchAsyncErrors(async (req, res, next) => {
    let user = await User.findById(req.params.id);

    res.status(200).json({
        success: true,
        user,
    })
})
