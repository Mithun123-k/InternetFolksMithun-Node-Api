const mongoose = require("mongoose");
// const validator = require("validator")
// const bcrypt = require('bcryptjs')
// const jwt = require('jsonwebtoken')

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required:[true, "Please Enter your name"],
        maxlength:[30, "Name Cannot exceed 30 characters"],
        minlength:[4, "Name should have more than 4 charactors"]
    },
    userId:{
        type:String,
        required:[true, "Please Enter Your userId "]
    },
    schoolId:{
        type:String,
        required:[true, "Please Enter Your schoolId "]
    },
}, {timestamps: true})


module.exports = mongoose.model("Student", studentSchema);