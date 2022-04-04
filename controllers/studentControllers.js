const ErrorHandler = require('../utils/errorhandler');
const catchAsyncErrors = require('../middleware/catchAsyncErrors');
const Student = require('../models/studentModel');


// Create Student

exports.registerStudent = catchAsyncErrors(async (req, res, next) => {
    const {name, userId, schoolId} = req.body;

    const student = await Student.create({
        name,
        userId,
        schoolId,
    })

    res.status(201).json({
        success: true,
        student
    })

})

// Student get all Student

exports.getAllStudent = catchAsyncErrors(async (req, res, next) => {
    const GetStudent = await Student.find();

    res.status(200).json({
        success: true,
        GetStudent,
    })
})
