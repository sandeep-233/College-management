// Import the required modules
const express = require("express")
const router = express.Router()

// Import the required controllers and middleware functions
const {
    addMarks,
    getMarksDetails,
} = require("../controllers/FacultyController")


// Route for adding studetn's marks
router.post("/addMarks", addMarks)

// Route for getting all student marks details
router.get("/marksDetails", getMarksDetails)


// Export the router for use in the main application
module.exports = router