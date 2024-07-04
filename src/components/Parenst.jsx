import React, { useEffect, useState } from 'react'
import { getMarksDetails } from '../services/operations/facultyFeaturesAPI';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { getStudentDetails } from '../services/operations/adminFeaturesAPI';

export const Parenst = () => {

    const [studentDetails, setStudentDetails] = useState([]);
    const [studentMarks, setStudentMarks] = useState([]);

    const [formData, setFormData] = useState({
        email:"",
        password:"",
      })
    
      const [showPassword, setShowPassword] = useState(false);
      const [submit, setSubmit] = useState(false);
      const {email, password} = formData;
    
      const handleOnChnage =(e) => {
        setFormData((prevData) => ({
          ...prevData,
          [e.target.name]: e.target.value,
        }))
      }
    
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
    <div className="min-h-screen w-[99vw] flex flex-row space-x-10 items-center justify-center bg-gray-100">
      
      <div className="bg-white p-8 rounded shadow-md w-full">
        <div className='w-[100%]'>
        <h2 className="text-3xl text-center font-semibold mb-4">Enter Your Children's details</h2>

        <form action=""
        onSubmit={handleOnSubmit}
        // className='mt-6 flex w-full flex-col gap-y-4'
        className="mb-4"
        >

        <label htmlFor="" className='w-full'>
            <p className='mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5'>
            Email Address <sup className='text-pink-200'>*</sup>
            </p>
            <input type="email"
            name="email"
            value={email}
            onChange={handleOnChnage}
            placeholder='Enter Email Address'
            style={{
            boxShadow: "inset 0px -1px 0px rgba(225, 225, 225, 0.18)",
            }}
            className="w-full border rounded p-2 mt-2"
            />
        </label>

        <label htmlFor="" className='relative'>
            <p className='mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5'>
            Password <sup className='text-pink-200'>*</sup>
            </p>
            <input  type={showPassword ? "text" : "password"}
            name="password"
            value={password}
            onChange={handleOnChnage}
            placeholder='Enter Password'
            style={{
            boxShadow: "inset 0px -1px 0px rgba(225, 225, 225, 0.18)",
            }}
            className="w-full border rounded p-2 mt-2"
            />
            <span
            onClick={() => setShowPassword((prev) => !prev)}
            className='absolute right-3 top-[38px] z-[10] cursor-pointer '
            >
            {
                showPassword ?
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                : <AiOutlineEye fontSize={24} fill="#AFB2BF" /> 
            }
            </span>

            {/* <Link to="/forgot-password">
            <p className='mt-1 ml-auot max-w-max text-xs text-blue-100'>
                Forgot Passowrd
            </p>
            </Link> */}
        </label>

        <button
        type='submit'
        className="bg-blue-500 text-white w-full mt-4 py-2 rounded"
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
  )
}
