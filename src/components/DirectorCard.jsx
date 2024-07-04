// DirectorCard.js

import React from 'react';

const DirectorCard = () => {
  return (
    <div className="bg-white w-1/2 rounded-lg my-10 ml-10 shadow-md p-4 flex flex-row overflow-hidden">
      {/* Circular Image */}
      <div className="w-1/3 flex align-middle pl-5 justify-items-center m-auto">
        <img
          src="/pic-1.png" // Replace with actual image path
          alt="Director Avatar"
          className="w-32 h-32 rounded-full border-4 border-black"
        />
      </div>

      {/* Director Text */}
      <div className="ml-5 w-2/3">
        <h3 className="text-3xl font-semibold pt-5 mb-5">Our Director</h3>
        <p className="text-gray-600 mr-10 text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae justo nec elit
          vestibulum Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed accusantium eum cumque. Recusandae natus reiciendis, ea minima atque omnis deserunt eius, ipsam placeat beatae veniam qui repellendus, provident fugiat distinctio.
        </p>
      </div>
    </div>
  );
};

export default DirectorCard;
