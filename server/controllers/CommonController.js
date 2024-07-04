const AnsDoubt = require("../models/AnsDoubt");
const Attachments = require("../models/Attachments");
const Attendence = require("../models/Attendence");
const InternOpp = require("../models/InternOpp");
const Marks = require("../models/Marks");
const Queries = require("../models/Queries");
const QueriesAns = require("../models/QueriesAns");
const RaiseDoubt = require("../models/RaiseDoubt");

// Get all Notice 
exports.getAllNotices = async (req, res) => {
	try {

		const noticeDetails = await Attachments.find({ 
			category: "Notice"
		})

		// if file are not found 
		if(!noticeDetails) {
			return res.status(404).json({
				success: false,
				message: "Notice's details not found"
			})
		}
	
		return res.status(200).json({
			success: true,
			data: noticeDetails,
			message: "successfully fetched all notice details"
		})

	} catch(error) {
		console.log(error);
		return res.status(500).json({
			success: false,
			message: "Error during, fetching Notices files"
		})
	}
}

// Get my attendence details 
exports.getAttendence = async (req, res) => {
	try {
		const {
			dept,
			date, 
			subject, 
			semester,
		} = req.query;

		let updateDate = date[0];
		for(let i=1; i<date.length; i++) {
			if(date[i-1] == '-' && date[i] == '0')
				continue;
			else
				updateDate += date[i];
		}

		console.log("update date:", updateDate)
		const attendenceDetails = await Attendence.find({ 
			dept: dept,
			attendenceDate: updateDate,
			subjectName: subject,
			semester: semester
		})

		// if file are not found 
		if(!attendenceDetails) {
			return res.status(404).json({
				success: false,
				message: "attendence's details not found"
			})
		}
	
		return res.status(200).json({
			success: true,
			data: attendenceDetails,
			message: "successfully fetched all attendence details"
		})

	} catch(error) {
		console.log(error);
		return res.status(500).json({
			success: false,
			message: "Error during, fetching my attendence"
		})
	}
}

// Get my marks details, subject wise
exports.getStudentsMarksDetails = async (req, res) => {
	try {
		// console.log("query: ", req.query);
		const {semester, dept, batch, subject} = req.query;

		const marksDetails = await Marks.find({ 
			semester: semester,
			dept: dept,
			batch: batch,
			subject: subject
		})

		// if file are not found 
		if(!marksDetails) {
			return res.status(404).json({
				success: false,
				message: "Marks details not found"
			})
		}
		
		// console.log("Marks Details: ", marksDetails);

		return res.status(200).json({
			success: true,
			data: marksDetails,
			message: "successfully fetched all marks details"
		})

	} catch(error) {
		console.log(error);
		return res.status(500).json({
			success: false,
			message: "Error during, fetching marks details"
		})
	}
}

// add intership opportunity 
exports.addInternOpp = async (req, res) => {
	try {

		const {heading, desc, link, company} = req.body;

		if(!heading || !link || !company) {
			return res.status(404).json({
				success: false,
				message: "all filed are required",
			})
		}
		
		var today = new Date();
		var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

		const internOpp = await InternOpp.create({ 
			heading: heading,
			desc: desc,
			link: link,
			company: company,
			addDate: date
		})

		// if internship opportunity is not created
		if(!internOpp) {
			return res.status(404).json({
				success: false,
				message: "Failed to add internship opportunity"
			})
		}
	
		return res.status(200).json({
			success: true,
			data: internOpp,
			message: "successfully added internship opportunity"
		})

	} catch(error) {
		console.log(error);
		return res.status(500).json({
			success: false,
			message: "Error during, adding internship opportunity"
		})
	}
}

// get all internship opportunity 
exports.getInternOpp = async (req, res) => {
	try {

		const opportunity = await InternOpp.find({})

		// if file are not found 
		if(!opportunity) {
			return res.status(404).json({
				success: false,
				message: "Internship opportunity details not found"
			})
		}
	
		return res.status(200).json({
			success: true,
			data: opportunity,
			message: "successfully fetched all internship opportunity details"
		})

	} catch(error) {
		console.log(error);
		return res.status(500).json({
			success: false,
			message: "Error during, fetching internship opportunity"
		})
	}
}

// add queries 
exports.addQueries = async (req, res) => {
	try {

		const {query} = req.body;
		// console.log("query: ", req.body)

		if(!query) {
			return res.status(404).json({
				success: false,
				message: "all filed are required",
			})
		}

		const questionData = await Queries.create({ 
			question: query
		})

		// if Queries is not created
		if(!questionData) {
			return res.status(404).json({
				success: false,
				message: "Failed to add Queries"
			})
		}
	
		return res.status(200).json({
			success: true,
			data: questionData,
			message: "successfully added Queries"
		})

	} catch(error) {
		console.log(error);
		return res.status(500).json({
			success: false,
			message: "Error during, adding Queries"
		})
	}
}

// get queries 
exports.getQueries = async (req, res) => {
	try {

		const queries = await Queries.find({})

		// if file are not found 
		if(!queries) {
			return res.status(404).json({
				success: false,
				message: "Queries not found"
			})
		}
	
		return res.status(200).json({
			success: true,
			data: queries,
			message: "successfully fetched all Queries"
		})

	} catch(error) {
		console.log(error);
		return res.status(500).json({
			success: false,
			message: "Error during, fetching Queries"
		})
	}
}


// add Queries Ans 
exports.addQueriesAns = async (req, res) => {
	try {

		const {topic, ans} = req.body;

		if(!ans) {
			return res.status(404).json({
				success: false,
				message: "Ans is required",
			})
		}

		const ansData = await QueriesAns.create({ 
			ans: ans,
			topic: topic
		})

		// if answer data was not created
		if(!ansData) {
			return res.status(404).json({
				success: false,
				message: "Failed to add Queries Answers"
			})
		}
	
		return res.status(200).json({
			success: true,
			data: ansData,
			message: "successfully added Queries Answer"
		})

	} catch(error) {
		console.log(error);
		return res.status(500).json({
			success: false,
			message: "Error during, adding Queries Ans"
		})
	}
}

// get Queries Ans 
exports.getQueriesAns = async (req, res) => {
	try {

		const queriesAns = await QueriesAns.find({})

		// if data are not found 
		if(!queriesAns) {
			return res.status(404).json({
				success: false,
				message: "Queries Answer not found"
			})
		}
	
		return res.status(200).json({
			success: true,
			data: queriesAns,
			message: "successfully fetched all Queries Answers"
		})

	} catch(error) {
		console.log(error);
		return res.status(500).json({
			success: false,
			message: "Error during, fetching Queries Answers"
		})
	}
}

// add Doubt 
exports.addDoubt = async (req, res) => {
	try {

		const {doubt} = req.body;
		console.log("req.body: ", req.body)

		if(!doubt) {
			return res.status(404).json({
				success: false,
				message: "Dobut is required",
			})
		}

		const doubtData = await RaiseDoubt.create({ 
			doubt: doubt
		})

		// if Doubt was not created
		if(!doubtData) {
			return res.status(404).json({
				success: false,
				message: "Failed to add Doubt"
			})
		}
	
		return res.status(200).json({
			success: true,
			data: doubtData,
			message: "successfully added Doubt"
		})

	} catch(error) {
		console.log(error);
		return res.status(500).json({
			success: false,
			message: "Error during, adding Dobut"
		})
	}
}

// get Doubt
exports.getDoubt = async (req, res) => {
	try {

		const doubttAns= await RaiseDoubt.find({})

		// if data are not found 
		if(!doubttAns) {
			return res.status(404).json({
				success: false,
				message: "Doubt  not found"
			})
		}
	
		return res.status(200).json({
			success: true,
			data: doubttAns,
			message: "successfully fetched all Doubt"
		})

	} catch(error) {
		console.log(error);
		return res.status(500).json({
			success: false,
			message: "Error during, fetching Doubt Answers"
		})
	}
}

exports.addDoubtAns = async (req, res) => {
	try {

		const {topic, desc} = req.body;
		// console.log("req.body (add Dobut Ans)", req.body)

		if(!topic || !desc) {
			return res.status(404).json({
				success: false,
				message: "All field is required",
			})
		}

		const ansData = await AnsDoubt.create({
			topic: topic, 
			desc: desc
		})

		// if Doubt was not created
		if(!ansData) {
			return res.status(404).json({
				success: false,
				message: "Failed to add Doubt"
			})
		}
	
		return res.status(200).json({
			success: true,
			data: ansData,
			message: "successfully added Doubt"
		})

	} catch(error) {
		console.log(error);
		return res.status(500).json({
			success: false,
			message: "Error during, adding Dobut"
		})
	}
}

// get DoubtAns
exports.getDoubtAns = async (req, res) => {
	try {

		const doubttAns= await AnsDoubt.find({})

		// if data are not found 
		if(!doubttAns) {
			return res.status(404).json({
				success: false,
				message: "Doubt  not found"
			})
		}
	
		return res.status(200).json({
			success: true,
			data: doubttAns,
			message: "successfully fetched all Doubt's Answer"
		})

	} catch(error) {
		console.log(error);
		return res.status(500).json({
			success: false,
			message: "Error during, fetching Doubt Answers"
		})
	}
}