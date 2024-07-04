import React from 'react'
import { useSelector } from 'react-redux';

export const MyProfile = () => {

  const {user} = useSelector((state) => state.profile)
  // console.log("user: ", user);

  return (
    <div className="bg-white h-[96%] w-[68%] ml-4 rounded-xl mr-7 mt-4 p-3">
       <div className='flex flex-row gap-4 w-[98%] p-3 border-gray-400 border-2 rounded-md justify-around items-center overscroll-y-auto'>
          {/* imgage */}
          <div className='flex flex-col gap-3 items-center justify-center'>
            <img 
             src={user?.image} 
             alt="User Image" 
             className=' w-40 rounded-full'
            />
            <p className=' text-2xl flex gap-3'> 
              <span className=' font-semibold'>{user?.accountType}</span>
              <span className=' text-gray-200 font-semibold'>({user?.joinYear})</span>
            </p>
          </div>

          {/* basic details  */}
          <div className=' text-2xl gap-3 flex flex-col items-start font-semibold'>
            <p> Name: <span className=' text-gray-300 font-semibold'> {user?.fullName} ({user?.gender})</span> </p>
            <p> Date of Birth: <span className=' text-gray-300 font-semibold'>{user?.dateOfBirth}</span></p>
            <p> Email ID: <span className=' text-gray-300 font-semibold'>{user?.email} </span></p>
            
          </div>
       </div>
    </div>
  )
}
