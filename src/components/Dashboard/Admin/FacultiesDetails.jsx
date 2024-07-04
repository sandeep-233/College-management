import React, { useEffect, useState } from 'react'
import { getFacultiesDetails } from '../../../services/operations/adminFeaturesAPI';

export const FacultiesDetails = () => {

  const [faculties, setFaculties] = useState([]);

  // const [formData, setFormData] = useState({
  //   email: ""
  // })


  // const {
  //   email
  // } = formData;

  // const handleOnChnage =(e) => {
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [e.target.name]: e.target.value,
  //   }))
  // }


  // const [submit, setSubmit] = useState(false);

  // const handleOnSubmit = (e) => {
  //   e.preventDefault()
  //   setSubmit(!submit);
  // }

  
  useEffect(() => {
    // Calling fetchCourseDetails fucntion to fetch the details
    (async () => {
      try {
        const res = await getFacultiesDetails()
        // console.log("students details res: ", res)
        setFaculties(res)
      } catch (error) {
        console.log("Could not fetch Students Details")
      }
    })()
  }, [])


  return (
        <div className="bg-white h-[96%] w-[68%] ml-4 rounded-xl mr-7 overflow-y-scroll ">
            <div className="bg-gray-200 h-screen  p-4 ">
                <div className="bg-white rounded-lg p-4 mr-5 ">
                    <h1 className="text-2xl mb-5 p-5 border-b-2 ">Faculties Details</h1>
{/*                         
                    <form 
                        onSubmit={handleOnSubmit}
                        className="flex flex-row justify-around m-5 relative items-center "
                    >
                            <label for="name" className="flex flex-col text-lg font-medium text-gray-500">Registered Email ID</label>
                                <input 
                                type="email" 
                                id="name"
                                name="email"
                                value={email}
                                onChange={handleOnChnage} 
                                className="bg-gray-50 border rounded-lg h-10 w-48"
                                ></input>


                            <div className="flex  w-64 ">
                                <button 
                                type="submit"
                                className="bg-blue-500 text-white px-20 py-2 rounded-xl text-lg hover:bg-white hover:text-blue-500 border-2 border-blue-500"
                                >
                                    Search
                                </button>
                            </div>
                            
                        
                    </form> */}
                        
                        {/* Faculties's Details  */}
                        <table className="w-full border-collapse">
                        <thead>
                            <tr>
                            <th className="border p-2">Faculty Name</th>
                            <th className="border p-2">Gender</th>
                            <th className="border p-2">email</th>
                            <th className="border p-2">Date of Birth</th>
                            <th className="border p-2">Department</th>
                            </tr>
                        </thead>
                        <tbody>
                            {faculties.map((faculty) => (
                            <tr key={faculty.id}>
                                <td className="border p-2 text-center">{faculty?.fullName}</td>
                                <td className="border p-2 text-center">{faculty?.gender}</td>
                                <td className="border p-2 text-center">{faculty?.email}</td>
                                <td className="border p-2 text-center">{faculty?.dateOfBirth}</td>
                                <td className="border p-2 text-center">{faculty?.dept}</td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
  )
}
