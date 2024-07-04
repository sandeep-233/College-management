// Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4 flex justify-between items-center">
      {/* Left side (logo and brand name) */}
      <Link to="/"> 
     <div className="flex items-center">
        <img
          src="/logo.png" // Replace with your actual logo path
          alt="Logo"
          className="h-12 w-12 mx-5"
        />
        <span className="text-white font-semibold text-3xl">College Management</span>
      </div>
      </Link>

      {/* Right side (logout button) */}
      <button className="text-white border-2 border-white p-2 text-xl rounded-lg px-5 mx-5 hover:bg-white hover:text-blue-500">Logout</button>
    </nav>
  );
};

export default Navbar;
