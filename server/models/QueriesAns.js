// import mongoose library
const mongoose = require("mongoose");

// Define the user schema 
const queriesAnsSchema = new mongoose.Schema({
    topic: {
        type: String,
        required: true,
        trim: true,
    },
    ans: {
        type: String,
        required: true,
        trim: true,
    },

    addedDate: {
        type: Date,
        default: Date.now()
    }

});

module.exports = mongoose.model("QueriesAns", queriesAnsSchema);