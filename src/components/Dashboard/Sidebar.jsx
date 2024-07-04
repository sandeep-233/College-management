// Sidebar.js

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import SidebarLink from './SidebarLink';
import { sidebarLinks } from '../../data/dashboard-links';

const Sidebar = () => {

    const {user, loading: profileLoading} = useSelector((state) => state.profile);
    console.log("user: ", user);

    const {loading: authLoading} = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    if(profileLoading || authLoading) {
      return (
          <div className="grid h-[calc(100vh-3.5rem)] min-w-[220px] items-center border-r-[1px] border-r-richblack-700 bg-richblack-800">
              <div className="spinner"></div>
          </div>
      )
    }

  return (
    <div className="bg-gray-200 h-[97%] w-[20%] overflow-hidden  p-4">
      {/* Top Card: User Info */}
      <Link to="dashboard/my-profile">
      <div className="flex justify-between items-center bg-white rounded-lg p-4 mb-4 h-[20%]">
        <img
          src={user?.image} // Replace with your actual avatar path
          alt="User Avatar"
          className="w-20 h-20 rounded-full mx-auto mb-2"
        />
        <div className=' flex flex-col justify-center items-center'>
          <h3 className="text-center text-gray-800 text-xl font-semibold">{user?.fullName}</h3>
          <h3 className="text-center text-gray-500 text-sm ">{user?.accountType}</h3>
        </div>
      </div>
      </Link>

      {/* Bottom Card: Navigation Links */}
      <div className="bg-white rounded-xl px-4 h-[80%] overflow-auto">
        <ul className="space-y-7 flex flex-col h-full text-left font-semibold text-xl my-6 align-middle overflow-hidden">

          {
            sidebarLinks.map((link) => {
              if(link.type && user?.accountType !== link.type) return null;

              return (
                <SidebarLink key={link.id} link={link} iconName={link.icon}/>
              )
            })
          }

        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
