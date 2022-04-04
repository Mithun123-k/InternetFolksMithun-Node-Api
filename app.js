const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser")

const errorMiddleware = require('./middleware/error')

const app = express()

app.use(express.json());
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true }));

// Route import
const user = require("./routes/userRoutes")
const student = require("./routes/studentRoutes");
const school = require("./routes/schoolRout");
const role = require("./routes/roleRoute")

app.use( user)
app.use( student)
app.use( school)
app.use( role)



// Middleware for Errors
app.use(errorMiddleware);




module.exports = app