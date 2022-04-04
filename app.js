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

app.use("/api/v1", user)
app.use("/api/v1", student)
app.use("/api/v1", school)



// Middleware for Errors
app.use(errorMiddleware);




module.exports = app