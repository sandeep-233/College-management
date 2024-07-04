// import mongoose library
const mongoose = require("mongoose");

// Define the user schema 
const internOppSchema = new mongoose.Schema({
    heading: {
        type: String,
        required: true,
        trim: true,
    },
    desc: {
        type: String,
        trim: true,
    },
    link: {
        type: String,
        required: true,
        trim: true,
    },
    company: {
        type: String,
        required: true,
        trim: true,
    },
    addDate: {
        type: String,
        default: ""
    }
});

module.exports = mongoose.model("InternOpp", internOppSchema);