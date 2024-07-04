// import mongoose library
const mongoose = require("mongoose");

// Define the user schema 
const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
        trim: true,
    },
    gender: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
    },
    // contactNumbe: {
    //     type: Number,
    //     required: true
    // },
    password: {
        type: String,
        required: true,
    },
    dateOfBirth: {
        type: String,
        required: true,
        trim: true,
    },

    accountType: {
        type: String,
        enum: ["Admin", "Faculty", "Student", "Parent"],
        required: true,
    },

    token: {
        type: String,
    },
    image: {
        type: String,
    },

    semester: {
        type: Number,
        // required: true,
        default: 0,
    },
    dept: {
        type: String,
        enum: ["CSE", "IT", "ECE", "ME","Admin", "Faculty"],
        // required: true,
        trim: true,
    },
    joinYear: {
        type: Number,
        required: true,
        trim: true,
    },
    passoutYear: {
        type: Number,
        // required: true,
        trim: true,
        default: 0
    },

    // additionalDetails: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     required: true,
    //     ref: "Profile",
    // },
    // markSheet: [
    //     {
    //         type: mongoose.Schema.Types.ObjectId,
    //         ref: "Marks"
    //     }
    // ],
    // attendence: [
    //     {
    //         type: mongoose.Schema.Types.ObjectId,
    //         ref: "Attendence"
    //     }
    // ],

    // semesterFeePayment: [{
    //     type: Number
    // }]
});

module.exports = mongoose.model("User", userSchema);