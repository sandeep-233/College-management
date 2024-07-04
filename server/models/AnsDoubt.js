// import mongoose library
const mongoose = require("mongoose");

// Define the user schema 
const ansDoubtSchema = new mongoose.Schema({
    topic: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
        trim: true,
    },

    addedDate: {
        type: Date,
        default: Date.now()
    }

});

module.exports = mongoose.model("AnsDoubt", ansDoubtSchema);