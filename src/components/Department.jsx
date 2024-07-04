// DepartmentSection.js

import React from 'react';

const Department = () => {
  return (
    <div className='flex flex-row justify-center '>
        <div className='flex flex-col w-1/5  justify-center ml-10 '>
        <div className='flex flex-col w-2/5 p-5 px-10 justify-center items-center border-2 border-black bg-black rounded-lg text-white '>
            <h2 className='text-6xl font-bold'>D</h2>
            <h2 className='text-6xl font-bold'>E</h2>
            <h2 className='text-6xl font-bold'>P</h2>
            <h2 className='text-6xl font-bold'>A</h2>
            <h2 className='text-6xl font-bold'>R</h2>
            <h2 className='text-6xl font-bold'>T</h2>
            <h2 className='text-6xl font-bold'>M</h2>
            <h2 className='text-6xl font-bold'>E</h2>
            <h2 className='text-6xl font-bold'>N</h2>
            <h2 className='text-6xl font-bold'>T</h2>
            <h2 className='text-6xl font-bold'>S</h2>

        </div>
        </div>
    <div className="grid grid-cols-2 gap-5 max-w-screen-lg p-10 align-middle justify-center">
      {/* Card 1 */}
      <div className="relative overflow-hidden">
        <img
          src="/d5.jpg" // Replace with actual image path
          alt="Department 1"
          className="w-full h-40vh object-cover rounded-lg transition-opacity duration-300 hover:opacity-25"
        />
        <div className="absolute inset-0 flex items-center justify-center text-white opacity-0 hover:opacity-100 transition-opacity duration-300">
          <p className="text-xl font-semibold">Computer Science</p>
        </div>
      </div>

      {/* Add similar cards for other departments */}
      {/* Card 2 */}
      <div className="relative overflow-hidden">
        <img
          src="/d2.jpg" // Replace with actual image path
          alt="Department 1"
          className="w-full 40vh object-cover rounded-lg transition-opacity duration-300 hover:opacity-25"
        />
        <div className="absolute inset-0 flex items-center justify-center text-white opacity-0 hover:opacity-100 transition-opacity duration-300">
          <p className="text-xl font-semibold">Mechanical</p>
        </div>
      </div>
      {/* Card 3 */}
      <div className="relative overflow-hidden">
        <img
          src="/d3.jpg" // Replace with actual image path
          alt="Department 1"
          className="w-full 40vh object-cover rounded-lg transition-opacity duration-300 hover:opacity-25"
        />
        <div className="absolute inset-0 flex items-center justify-center text-white opacity-0 hover:opacity-100 transition-opacity duration-300">
          <p className="text-xl font-semibold">Information Technology</p>
        </div>
      </div>
      {/* Card 4 */}
      <div className="relative overflow-hidden">
        <img
          src="/d4.jpg" // Replace with actual image path
          alt="Department 1"
          className="w-full 40vh object-cover rounded-lg transition-opacity duration-300 hover:opacity-25"
        />
        <div className="absolute inset-0 flex items-center justify-center text-white opacity-0 hover:opacity-100 transition-opacity duration-300">
          <p className="text-xl font-semibold">Electronics and Communication</p>
        </div>
      </div>
    </div>
    </div>
    
  );
};

export default Department;
