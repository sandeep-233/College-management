import React, { useEffect, useState } from 'react'
import { getNotices } from '../../../services/operations/userAPI';

export const Notices = () => {

    const [noticeDetails, setNoticeDetails] = useState([]);
  
  useEffect(() => {
    // Calling fetchCourseDetails fucntion to fetch the details
    (async () => {
      try {
        const res = await getNotices()
        // console.log("notes details res: ", res)
        setNoticeDetails(res)
      } catch (error) {
        console.log("Could not fetch Students Details")
      }
    })()
  }, [])



  return (
    <div className="bg-white h-[96%] w-[70%] ml-4 rounded-xl mr-7">
          <div className="bg-gray-200 h-screen  p-4">
            <div className="bg-white rounded-lg p-4 mr-5 ">
                <h1 className="text-2xl mb-5 p-5 border-b-2 ">NOTICE</h1>
                
                {/* Notices  */}
                  <ul className='w-full flex-row-reverse gap-4 flex-wrap justify-start items-center m-auto'>
                        {
                            noticeDetails.map((notice) => (
                                <li
                                 key={notice._id}
                                 className=' rounded-md flex justify-center items-end pb-2' 
                                >
                                    <a 
                                     href={notice?.file}
                                     target="_blank"
                                     className=' p-1 flex gap-1 border-slate-300 border bg-white rounded-md w-full font-semibold text-center m-1' 
                                    >
                                        <span className=' mr-3'>{notice?.heading}</span> - 
                                        <span className='mx-3'>{notice?.attachmentDate}</span>
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
            </div>
          </div>
    </div>
  )
}
