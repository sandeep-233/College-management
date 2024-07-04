// import mongoose library
const mongoose = require("mongoose");

// Define the attendence schema 
const PaymentSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        trim: true
    },
    studentName: {
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
    batch: {
        type: Number,
        required: true,
        trim: true,
    },
    semester: {
        type: Number,
        required: true,
        trim: true,
    },
    paymentDate: {
        type: String,
        default: ""
    }

});

module.exports = mongoose.model("Payment", PaymentSchema);