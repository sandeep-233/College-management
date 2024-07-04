import React, { useEffect, useState } from "react";
import { getStudentDetails } from "../../../services/operations/adminFeaturesAPI.js";
import { getMarksDetails } from "../../../services/operations/facultyFeaturesAPI.js";

const Students = () => {

  const [studentDetails, setStudentDetails] = useState([]);
  const [studentMarks, setStudentMarks] = useState([]);

  const [formData, setFormData] = useState({
    email: ""
  })


  const {
    email
  } = formData;

  const handleOnChnage =(e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }))
  }


  const [submit, setSubmit] = useState(false);

  const handleOnSubmit = (e) => {
    e.preventDefault()
    setSubmit(!submit);
  }

  
  useEffect(() => {
    // Calling fetchCourseDetails fucntion to fetch the details
    (async () => {
      try {
        const res_1 = await getStudentDetails(email);
        const res_2 = await getMarksDetails(email);
        // console.log("students details res: ", res)
        setStudentDetails(res_1);
        setStudentMarks(res_2)
      } catch (error) {
        console.log("Could not fetch Students Details")
      }
    })()
  }, [submit])


  return (
        <div className="bg-white h-[96%] w-[70%] ml-4 rounded-xl mr-7">
          <div className="bg-gray-200 h-screen  p-4">
            <div className="bg-white rounded-lg p-4 mr-5 ">
              <h1 className="text-2xl mb-5 p-5 border-b-2 ">Student Details</h1>
              <div className="flex flex-row justify-around m-5 ">
               
                <form
                  onSubmit={handleOnSubmit}
                  className="flex flex-wrap gap-1 justify-between items-center"
                >
                  <label
                    for="name"
                    className="flex flex-col text-lg font-medium text-gray-500 m-1">Registered Email Id

                    <input
                      type="text"
                      name="email"
                      value={email}
                      onChange={handleOnChnage}
                      className="bg-gray-50 border rounded-lg h-10 px-5 w-96 mb-8 border-gray-500"
                    ></input>
                  </label>
                  

                  <button
                    type="submit" 
                    className="bg-blue-500 text-white px-12 h-16 my-auto rounded-xl text-lg hover:bg-white hover:text-blue-500 border-2 border-blue-500"
                  >
                    Search
                  </button>

                </form>
                
              </div>

              {/* Student's Details */}
              <div>
                <h3 className=" font-semibold">Basic Student's Details: </h3>
                {
                  studentDetails &&
                  <div>
                      <table className="w-full border-collapse">
                        <thead>
                          <tr>
                            <th className="border p-2">Student Name</th>
                            <th className="border p-2">Gender</th>
                            <th className="border p-2">email</th>
                            <th className="border p-2">Date of Birth</th>
                            <th className="border p-2">Semseter</th>
                            <th className="border p-2">Department</th>
                            <th className="border p-2">Session</th>
                          </tr>
                        </thead>
                        <tbody>
                            <tr>
                              <td className="border p-2 text-center">{studentDetails?.fullName}</td>
                              <td className="border p-2 text-center">{studentDetails?.gender}</td>
                              <td className="border p-2 text-center">{studentDetails?.email}</td>
                              <td className="border p-2 text-center">{studentDetails?.dateOfBirth}</td>
                              <td className="border p-2 text-center">{studentDetails?.semester}</td>
                              <td className="border p-2 text-center">{studentDetails?.dept}</td>
                              <td className="border p-2 text-center">{studentDetails?.joinYear} - {studentDetails?.passoutYear} </td>
                            </tr>
                        </tbody>
                      </table>
                  </div>
                }
              </div>

              {/* Student's Marks Details  */}
              <div className=" mt-4">
              <h3 className=" font-semibold">Student's Marks Details: </h3>
                {
                  studentMarks &&
                  <div>
                    <table className="w-full border-collapse">
                      <thead>
                        <tr>
                          <th className="border p-2">Subject</th>
                          <th className="border p-2">semester</th>
                          <th className="border p-2">Internal/ External/ Lab Marks</th>
                          <th className="border p-2">Total Marks (Grade) </th>
                        </tr>
                      </thead>
                      <tbody>
                        {studentMarks.map((student) => (
                          <tr key={student.id}>
                            <td className="border p-2 text-center">{student?.subject}</td>
                            <td className="border p-2 text-center">{student?.semester}</td>
                            <td className="border p-2 text-center">{student?.internalMarks} / {student?.externalMarks} / {student?.labMarks}</td>
                            <td className="border p-2 text-center">{student?.totalMarks} ({student?.grade}) </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                }
              </div>
            </div>
          </div>
        </div>
  );
};

export default Students;
