// import mongoose library
const mongoose = require("mongoose");

// Define the user schema 
const raiseDoubtSchema = new mongoose.Schema({
    doubt: {
        type: String,
        required: true,
        trim: true,
    },

    addedDate: {
        type: Date,
        default: Date.now()
    }

});

module.exports = mongoose.model("RaiseDoubt", raiseDoubtSchema);