const Marks = require("../models/Marks");


// add students marks 
exports.addMarks = async (req, res) => {
	try {
		// Destructure fields from the request body
		const {
			email,
			subject,
			internalMarks,
			externalMarks,
			labMarks,
            semester,
            dept,
            batch
		} = req.body;

        console.log("req.body: ", req.body);

		// Check if All Details are there or not
		if (
			!email ||
			!subject ||
			!internalMarks ||
			!externalMarks ||
			!labMarks ||
            !semester ||
            !dept ||
            !batch
		) {
			return res.status(403).send({
				success: false,
				message: "All Fields are required",
			});
		}

        // is marks is added already to the particular subject 
        // const isMarksDetails = await Marks.find({
        //     subject: subject,
        //     email: email
        // })

        // if(isMarksDetails == []) {
        //     console.log("isMarksDetails: ", isMarksDetails);
        //     return res.status(403).send({
		// 		success: false,
		// 		message: "marks is already added",
		// 	});
        // }
        // Grade distribution based on TotalMarks 
        let totalMarks = 0;
        totalMarks = Number(internalMarks)+Number(externalMarks)+Number(labMarks);
        console.log("total marks: ", totalMarks);
        let grade = "F";

        if(totalMarks < 35)
            grade = "F"
        else if(totalMarks >= 35 && totalMarks < 40)
            grade = "C"
        else if(totalMarks >= 40 && totalMarks < 50)
            grade = "C+"
        else if(totalMarks >= 50 && totalMarks < 60)
            grade = "B"
        else if(totalMarks >= 60 && totalMarks < 70)
            grade = "B+"
        else if(totalMarks >= 70 && totalMarks < 80)
            grade = "A"
        else
            grade = "A+"

        console.log("grade: ", grade);

        // add attendence
		const marksDetails = await Marks.create({
            email: email,
            subject: subject,
            internalMarks: internalMarks,
            externalMarks: externalMarks,
            labMarks: labMarks,
            totalMarks: totalMarks,
            grade: grade,
            semester: semester,
            dept: dept,
            batch: batch
		});

        console.log("marks details: ", marksDetails);

		return res.status(200).json({
			success: true,
			marksDetails,
			message: "User marks successfully add",
		});
	} catch (error) {
		console.error(error);
		return res.status(500).json({
			success: false,
			message: "User marks can not added. Please try again.",
		});
	}
};

// Get student's marks details 
exports.getMarksDetails = async (req, res) => {
    try {
        const {email} = req.query;

        // check all required field 
        if(!email) {
            return res.status(403).send({
                success: false,
                message: "All Fields are required",
            });
        }


        const marksDetails = await Marks.find({
            email: email
        })

        console.log("marks details: ", marksDetails);

        // if file are not found 
        if(!marksDetails) {
            return res.status(404).json({
                success: false,
                message: "Marks details not found"
            })
        }

        return res.status(200).json({
            success: true,
            data: marksDetails,
            message: "successfully fetched all marks details"
        })
    } catch (error) {
		console.error(error);
		return res.status(500).json({
			success: false,
			message: "User marks details not found. Please try again.",
		});
	}
};
