
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="bg-gray-200 h-screen  p-4">
      {/* Top Card: User Info */}
      <Link to="/faculty-dashboard">
      <div className="bg-white rounded-lg p-4 mb-4">
        <img
          src="/pic-1.png" // Replace with your actual avatar path
          alt="User Avatar"
          className="w-20 h-20 rounded-full mx-auto mb-2"
        />
        <h3 className="text-center text-gray-800 text-xl font-semibold">John Doe</h3>
        <h3 className="text-center text-gray-500 text-sm ">Faculty</h3>
      </div>
      </Link>

      {/* Bottom Card: Navigation Links */}
      <div className="bg-white rounded-lg p-4">
        <ul className="space-y-7 text-center font-semibold text-xl my-6 align-middle h-96">
         <li><Link to="/faculty-student">Student</Link></li>
          <li> <Link to="/faculty-notes">Notes</Link></li>
         <li> <Link to="/faculty-attendance">Attendance</Link></li>
          {/* <li> <Link to="/Attendance">Attendance</Link></li> */}
          <li> <Link to="/faculty-result">Result</Link></li>
          {/* <li> <Link to="/fee">Fee details</Link></li> */}
          {/* <li> <Link to="/Gallery">Gallery</Link></li> */}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;