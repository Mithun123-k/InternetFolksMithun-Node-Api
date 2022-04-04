const mongoose = require("mongoose");

const roleSchema = new mongoose.Schema({
    name: {
        type: String,
        required:[true, "Please Enter your School name"],
    },
    scopes: [
        {
            type: String,
            required:[true, "Please Enter scopes"]
        }
    ]
    

}, {timestamps: true})

module.exports = mongoose.model("Role", roleSchema)