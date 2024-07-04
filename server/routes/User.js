// Import the required modules
const express = require("express")
const router = express.Router()

// Import the required controllers and middleware functions
const {
  login,
  changePassword,
} = require("../controllers/Auth")

const { auth } = require("../middlewares/auth")
const { getAllNotices, 
  addInternOpp, 
  getInternOpp, 
  addQueries, 
  getQueries, 
  addQueriesAns, 
  getQueriesAns, 
  addDoubt, 
  getDoubtAns, 
  getStudentsMarksDetails,
  getAttendence,
  getDoubt,
  addDoubtAns
} = require("../controllers/CommonController")

// Routes for Login, Signup, and Authentication
// Route for user login
router.post("/login", login)

// Route for sending OTP to the user's email
// router.post("/sendotp", sendotp)

// Route for Changing the password
router.post("/changePassword", auth, changePassword)


// Route for Getting Notices details 
router.get("/notices", getAllNotices)

// Route for adding internship opportunity 
router.post("/addOpportunity", addInternOpp)
// Route for getting internship Opportunity 
router.get("/opportunities", getInternOpp);

// Route for adding Queries 
router.post("/addQueries", addQueries);
// Route for getting all Queries 
router.get("/queries", getQueries);

// Route for adding Queries answer
router.post("/addQueriesAns", addQueriesAns);
// Route for getting  Queries answers
router.get("/queriesAns", getQueriesAns);

// Route for adding Doubt 
router.post("/addDoubt", addDoubt);
// Route for getting Doubt
router.get("/doubts", getDoubt);

// Route for adding Doubt 
router.post("/addDoubtAns", addDoubtAns);
// Route for getting Doubt Answer
router.get("/doubtAns", getDoubtAns);

// Route for getting student marks details
router.get("/studentsMarks", getStudentsMarksDetails);

// Rotue for getting students attendence 
router.get("/attendence", getAttendence);

// Export the router for use in the main application
module.exports = router