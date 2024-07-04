import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addAttendence } from '../../../services/operations/studentFeaturesAPI';
import { getFacultiesDetails } from '../../../services/operations/adminFeaturesAPI';

export const AddAttendence = () => {

    const {user} = useSelector((state) => state.profile)

    // const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    faculty:"",
    subject: "",
    semester:"",
    rollNo: "",
  })

  const student = user.fullName;
  const batch = user.passoutYear;
  const email = user.email;
  const dept = user.dept;

  const {faculty, subject, semester, rollNo} = formData;

  const handleOnChnage =(e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }))
  }

  // console.log("form data: ", formData);

  const [faculties, setFaculties] = useState([]);
  useEffect(() => {
    // Calling fetchCourseDetails fucntion to fetch the details
    (async () => {
      try {
        const res = await getFacultiesDetails()
        console.log("faculties details res: ", res)
        setFaculties(res)
      } catch (error) {
        console.log("Could not fetch Students Details")
      }
    })()
  }, [])

  const handleOnSubmit = (e) => {
    e.preventDefault()
    // console.log("under handle on submit")
    // console.log("dispatching login()")
    dispatch(addAttendence(faculty, student, subject, batch, semester, rollNo, email, dept))
  }


  return (
    <div className="bg-white h-[96%] w-[68%] ml-4 rounded-xl mr-7 mt-4 p-3">
       <div className='flex flex-row gap-4 w-[98%] p-3 border-gray-400 border-2 rounded-md justify-around items-center overscroll-y-auto'>
       <div className="bg-white rounded-lg p-4 mr-5 ">
                <h1 className="text-2xl mb-5 p-5 border-b-2 ">Make Your Attendance</h1>
                <div className="flex flex-row justify-around m-5 ">
                    <form 
                    onSubmit={handleOnSubmit}
                    >
                    
                        <div>
                        <label for="name" className="block mb-2 text-lg font-medium text-gray-500 m-1">Roll No.</label>
                        <input 
                        type="number" 
                        name="rollNo"
                        value={rollNo}
                        onChange={handleOnChnage}
                        className="bg-gray-50 border rounded-lg h-10 px-5 w-96 mb-8 border-gray-500"
                        ></input>
                        
                        <label for="name" className="block mb-2 text-lg font-medium text-gray-500 m-1">Semester</label>
                        <select 
                        id="semester" 
                        name="semester"
                        value={semester}
                        onChange={handleOnChnage} 
                        className="bg-gray-50 border rounded-lg h-10 px w-96"
                        >
                        {Array.from(Array(8), (e, i) => {
                            return <option value={i+1}>{i+1}</option>
                        })}
                        </select>
                        </div>
                        
                        
                        <div className=' mt-3'>
                        <label for="name" className="block mb-2 text-lg font-medium text-gray-500 m-1">Subject</label>
                        <select 
                        id="subject"  
                        className="bg-gray-50 border rounded-lg h-10 px w-96"
                        name="subject"
                        value={subject}
                        onChange={handleOnChnage}
                        >
                            <option value="">None</option>
                            <option value="DBMS">DBMS</option>
                            <option value="OOPS">OOPS</option>
                            <option value="DSA">DSA</option>
                        </select>

                        <label for="name" className="block mt-2 text-lg font-medium text-gray-500 m-1">Faculty Name</label>
                        <select 
                        id="faculty"  
                        className="bg-gray-50 border rounded-lg h-10 px w-96"
                        name="faculty"
                        value={faculty}
                        onChange={handleOnChnage}
                        >
                            {/* <option value="DBMS">DBMS</option>
                            <option value="OOPS">OOPS</option>
                            <option value="DSA">DSA</option> */}
                            <option value="">None</option>
                            {
                                faculties.map( (faculty) => (
                                    <option value={faculty?.fullName} key={faculty?._id}>
                                        {faculty?.fullName}
                                    </option>
                                ))
                            }
                        </select>
                        </div>

                        <div className="flex mt-3 w-96">
                            <button 
                              type="submit"
                              className="bg-blue-500 text-white px-20 py-2 rounded-xl text-lg hover:bg-white hover:text-blue-500 border-2 border-blue-500"
                            >
                               Present
                            </button>
                        </div>

                    </form>
                </div>

            </div>
       </div>
    </div>
  )
}
