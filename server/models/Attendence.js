// import mongoose library
const mongoose = require("mongoose");

// Define the attendence schema 
const attendenceSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        trim: true
    },
    facultyName: {
        type: String,
        required: true,
        trim: true,
    },
    studentName: {
        type: String,
        required: true,
        trim: true,
    },
    subjectName: {
        type: String,
        required: true,
        trim: true,
    },
    dept: {
        type: String,
        enum: ["CSE", "IT", "ECE", "ME"],
        required: true,
        trim: true,
    },
    semester: {
        type: Number,
        required: true,
        trim: true,
    },
    rollNo: {
        type: Number,
        // required: true,
        trim: true,
    },

    attendence: {
        type: String,
        enum: ["Present"],
        default: "Present",
        required: true,
    },

    attendenceDate: {
        type: String,
        default: ""
    }

});

module.exports = mongoose.model("Attendence", attendenceSchema);