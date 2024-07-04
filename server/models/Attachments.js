// import mongoose library
const mongoose = require("mongoose");

// Define the attachment schema 
const attachmaentSchema = new mongoose.Schema ({
    file: {
        type: String,
        required: true,
        trim: true,
    },

    category: {
        type: String,
        enum: ["Notes", "Notice", "PYQ"],
        required: true,
    },

    heading: {
        type: String,
        required: true,
        trim: true,
    },

    subjectName: {
        type: String,
        trim: true,
        default: "",
    },

    attachmentDate: {
        type: String,
        default: ""
    }
    
})

module.exports = mongoose.model("Attachments", attachmaentSchema);