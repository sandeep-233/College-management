// import mongoose library
const mongoose = require("mongoose");

// Define the marks schema 
const marksSchema = new mongoose.Schema ({
    student: {
		type: mongoose.Schema.Types.ObjectId,
		// required: true,
		ref: "User",
	},

    semester: {
        type: Number,
    },
    dept: {
        type: String,
        enum: ["CSE", "IT", "ME", "ECE"]
    },
    batch:{
        type: Number
    },
    
    email: {
        type: String,
        required: true,
        // trim: true,
    },
    subject: {
        type: String,
        required: true,
        // trim: true,
    },

    internalMarks: {
        type: Number,
        // trim: true,
        default: 0
    },
    externalMarks: {
        type: Number,
        // trim: true,
        default: 0
    },
    labMarks: {
        type: Number,
        // trim: true,
        default: 0
    },

    totalMarks: {
        type: Number,
        required: true,
        // trim: true,
        default: 0
    },
    grade: {
        type: String,
        required: true,
        // trim: true,
    }
})

module.exports = mongoose.model("Marks", marksSchema);