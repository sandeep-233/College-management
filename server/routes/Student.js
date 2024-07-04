// Import the required modules
const express = require("express")
const router = express.Router()

// Import the required controllers and middleware functions
const {
    getPYQfiles,
    getNotesFiles,
    addAttendence,
    getMyAttendence,
    getSubjectMarks,
    addPaymentDetails,
    getPaymentDetails
} = require("../controllers/StudentsController")


// Route for adding attendence
router.post("/addAttendence", addAttendence)

// Route for getting PYQ files
router.get("/pyqFiles", getPYQfiles)

// Route for getting notes files
router.get("/notesFiles", getNotesFiles)

// Route for adding attendence
router.post("/payment", addPaymentDetails)

// Route for getting PYQ files
router.get("/getPaymentDetails", getPaymentDetails)

// Route for getting my attendence details
router.get("/myAttendence", getMyAttendence);

// Route for gettng subject's marks details
router.get("/subjectMarks", getSubjectMarks);

// Export the router for use in the main application
module.exports = router