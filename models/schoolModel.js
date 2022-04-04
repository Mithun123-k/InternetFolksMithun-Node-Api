const mongoose = require("mongoose");

const schoolSchema = new mongoose.Schema({
    Name: {
        type: String,
        required:[true, "Please Enter your School name"],
    },
    city:{
        type: String,
        required:[true, "Please Enter Your City"],
    },
    state:{
        type: String,
        required:[true, "Please Enter Your State"],
    },
    country:{
        type: String,
        required:[true, "Please Enter Your Country"],
    },
    

}, {timestamps: true})

module.exports = mongoose.model("School", schoolSchema)