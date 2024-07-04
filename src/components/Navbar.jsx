import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../services/operations/userAPI';
import { useDispatch, useSelector } from 'react-redux';

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {user, loading: profileLoading} = useSelector((state) => state.profile);

  return (
    <nav className="bg-blue-500 p-4 flex justify-between items-center">
      {/* Left side (logo and brand name) */}
      <>
        <Link 
          to="/"
          className="flex items-center"
        >
          <img
            src="/logo.png" // Replace with your actual logo path
            alt="Logo"
            className="h-12 w-12 mx-5"
          />
          <span className="text-white font-semibold text-3xl">College Management</span>
        </Link>
      </>

       <div className=' flex gap-3'>
           {/* Right side (logout or login button) */}
          <button 
            className="text-white border-2 border-white p-2 text-xl rounded-lg px-5 mx-5 hover:bg-white hover:text-blue-500"
          >
            < Link to="/parent">Parent</Link>
          </button>
          {
            !user ? (
              <button 
                className="text-white border-2 border-white p-2 text-xl rounded-lg px-5 mx-5 hover:bg-white hover:text-blue-500"
              >
                < Link to="/Login">Login</Link>
              </button>
            ) : (
              <div className='flex gap-3 items-center'>
                <button
                  className="text-white border-2 border-white p-2 text-xl rounded-lg px-5 mx-5 hover:bg-white hover:text-blue-500"
                >
                  <Link to="/dashboard/my-profile">Dashboard</Link>
                </button>
                <button
                  className="text-white border-2 border-white p-2 text-xl rounded-lg px-5 mx-5 hover:bg-white hover:text-blue-500"
                  onClick={() => dispatch(logout(navigate))}
                >
                  Logout
                </button>
              </div>
            )
            
          }
       </div>
      

      
    </nav>
  );
};

export default Navbar;