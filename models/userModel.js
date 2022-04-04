const mongoose = require("mongoose");
const validator = require("validator")
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required:[true, "Please Enter your name"],
        maxlength:[30, "Name Cannot exceed 30 characters"],
        minlength:[4, "Name should have more than 4 charactors"]
    },
    last_name: {
        type: String,
        required:[true, "Please Enter your name"],
        maxlength:[30, "Name Cannot exceed 30 characters"],
        minlength:[4, "Name should have more than 4 charactors"]
    },
    mobile:{
        type: String,
        required:[true, "Please Enter Your Mobile Number"]
    },
    email:{
        type: String,
        required:[true, "Please Enter Your Email"],
        unique:true,
        validate:[validator.isEmail, " Please Enter the valid email"],
    },
    password: {
        type: String,
        required:[true, "Please Enter your password"],
        minlength:[8, "Password should be greater than 8 charectors"],
        select: false,
    },
    role:{
        type:String,
        default: "student",
    }
}, {timestamps: true})

// Password Hashing
userSchema.pre("save", async function(next) {
    this.password = await bcrypt.hash(this.password, 10)
})

// JWT Token
userSchema.methods.getJWTToken = function () {
    return jwt.sign({id:this._id}, process.env.JWT_SECRET,{
        expiresIn:process.env.JWT_EXPIRE,
    })
}

// Compare Password
userSchema.methods.comparePassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password);
}

module.exports = mongoose.model("User", userSchema);