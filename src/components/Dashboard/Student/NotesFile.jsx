import React, { useEffect, useState } from 'react'
import { getNotes } from '../../../services/operations/studentFeaturesAPI';

export const NotesFile = () => {

  const [notesDetails, setNotesDetails] = useState([]);

  const [formData, setFormData] = useState({
    subject: ""
  })


  const {subject} = formData;

  const handleOnChnage =(e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }))
  }

//   console.log("form data: ", formData);

  const [submit, setSubmit] = useState(false);

  const handleOnSubmit = (e) => {
    e.preventDefault()
    setSubmit(!submit);
  }

  
  useEffect(() => {
    // Calling fetchCourseDetails fucntion to fetch the details
    (async () => {
      try {
        const res = await getNotes(subject)
        console.log("notes details res: ", res)
        setNotesDetails(res)
      } catch (error) {
        console.log("Could not fetch Students Details")
      }
    })()
  }, [submit])


  return (
    <div className="bg-white h-[96%] w-[70%] ml-4 rounded-xl mr-7">
          <div className="bg-gray-200 h-screen  p-4">
            <div className="bg-white rounded-lg p-4 mr-5 ">
                <h1 className="text-2xl mb-5 p-5 border-b-2 ">NOTES</h1>
                <div className="flex flex-row justify-around m-5 ">
                    <form
                        onSubmit={handleOnSubmit}
                        className="flex flex-row justify-around m-5 relative gap-3"
                    >
                      <label for="name" className="block mb-2 text-lg font-medium text-gray-500 m-1">Subject</label>
                      <select 
                        id="subject"  
                        className="bg-gray-50 border rounded-lg h-10 px w-96"
                        name="subject"
                        value={subject}
                        onChange={handleOnChnage}
                      >
                          <option value="">none</option>
                          <option value="DBMS">DBMS</option>
                          <option value="OOPS">OOPS</option>
                          <option value="DSA">DSA</option>
                          <option value="PPL">PPL</option>
                      </select>
                        
                        <button 
                          type="submit"
                          className="bg-blue-500 text-white px-20 py-2 rounded-xl text-lg hover:bg-white hover:text-blue-500 border-2 border-blue-500"
                        >
                          Search
                        </button>
                    </form>
                </div>
                {/* Notes  */}
                  <div className='w-[60%] flex gap-4 flex-wrap justify-start items-center m-auto'>
                        {
                            notesDetails.map((notes) => (
                                <div 
                                 key={notes._id}
                                 className=' w-48 bg-notes border-slate-300 border rounded-md flex justify-center items-end h-44 pb-2' 
                                >
                                    <a 
                                     href={notes?.file}
                                     target="_blank"
                                     className=' p-1 flex flex-col gap-1 bg-white rounded-md w-full font-semibold text-center m-1 bg-opacity-70' 
                                    >
                                        {notes?.heading}
                                        <span className=''>{notes?.attachmentDate}</span>
                                    </a>
                                </div>
                            ))
                        }
                    </div>
            </div>
          </div>
    </div>
  )
}
