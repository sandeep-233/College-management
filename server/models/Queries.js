// import mongoose library
const mongoose = require("mongoose");

// Define the user schema 
const queriesSchema = new mongoose.Schema({
    question: {
        type: String,
        required: true,
        trim: true,
    },

    addedDate: {
        type: Date,
        default: Date.now()
    }

});

module.exports = mongoose.model("Queries", queriesSchema);