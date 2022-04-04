const ErrorHandler = require('../utils/errorhandler');
const catchAsyncErrors = require('../middleware/catchAsyncErrors');
const School = require('../models/schoolModel');
const Student = require('../models/studentModel');


// Create School

exports.createSchool = catchAsyncErrors(async (req, res, next) => {
    const {Name, city, state, country} = req.body;

    const school = await School.create({
        Name,
        city,
        state,
        country
    })

    res.status(201).json({
        success: true,
        school
    })

})

// Get all School

exports.getAllSchool = catchAsyncErrors(async (req, res, next) => {
    const getSchool = await School.find();

    res.status(200).json({
        success: true,
        getSchool,
        
    })
})


// Get all School's student

exports.getAllSchoolStudent = catchAsyncErrors(async (req, res, next) => {
    let getSchool = await School.find();
    let student = await Student.find()
    const schoolStudent = {
        getSchool,
        student
    }
    res.status(200).json({
        success: true,
        schoolStudent
    })
})


