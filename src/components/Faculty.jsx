// CardContainer.js

import React from 'react';

const Faculty = () => {
  return (
    <div className="bg-white w-1/2 rounded-xl m-10 flex px-10 pb-5 shadow-md flex-col space-y-4">

        <h1 className='text-3xl font-semibold py-5'>Our Faculty</h1>
      {/* Card 1 */}
      <div className="bg-white rounded-lg border-2 border-gray-100 shadow-md p-4 flex flex-row">
        <img
          src="/p1.jpg" // Replace with actual image path
          alt="Faculty 1"
          className="w-16 h-20 "
        />
        <div className="flex flex-col mt-5 ml-20 ">
            <h1 className='text-center text-2xl'>Hanna richard</h1>
            <p className="text-center ">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

        </div>
      </div>

      {/* Card 2 */}
      <div className="bg-white rounded-lg border-2 border-gray-100 shadow-md p-4 flex flex-row">
        <img
          src="/p2.jpg" // Replace with actual image path
          alt="Faculty 1"
          className="w-16 h-20 "
        />
        <div className="flex flex-col mt-5 ml-20 ">
            <h1 className='text-center text-2xl'>Rima paul</h1>
            <p className="text-center ">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

        </div>
      </div>
    </div>
  );
};

export default Faculty;
