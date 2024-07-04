// LoginPage.js

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { useNavigate } from "react-router-dom";
import { login } from "../services/operations/userAPI";

const Login = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    email:"",
    password:"",
  })

  const [showPassword, setShowPassword] = useState(false);

  const {email, password} = formData;

  const handleOnChnage =(e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }))
  }

  // console.log("form data: ", formData);

  const handleOnSubmit = (e) => {
    e.preventDefault()
    // console.log("under handle on submit")
    // console.log("dispatching login()")
    dispatch(login(email, password, navigate))
  }



  return (
    <div className="min-h-screen flex flex-row space-x-10 items-center justify-center bg-gray-100">
      
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-3xl text-center font-semibold mb-4">Login</h2>

        <form action=""
        onSubmit={handleOnSubmit}
        // className='mt-6 flex w-full flex-col gap-y-4'
        className="mb-4"
        >

          <label htmlFor="" className='w-full'>
            <p className='mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5'>
              Email Address <sup className='text-pink-200'>*</sup>
            </p>
            <input type="email"
            name="email"
            value={email}
            onChange={handleOnChnage}
            placeholder='Enter Email Address'
            style={{
              boxShadow: "inset 0px -1px 0px rgba(225, 225, 225, 0.18)",
            }}
            className="w-full border rounded p-2 mt-2"
            />
          </label>

          <label htmlFor="" className='relative'>
            <p className='mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5'>
              Password <sup className='text-pink-200'>*</sup>
            </p>
            <input  type={showPassword ? "text" : "password"}
            name="password"
            value={password}
            onChange={handleOnChnage}
            placeholder='Enter Password'
            style={{
              boxShadow: "inset 0px -1px 0px rgba(225, 225, 225, 0.18)",
            }}
            className="w-full border rounded p-2 mt-2"
            />
            <span
            onClick={() => setShowPassword((prev) => !prev)}
            className='absolute right-3 top-[38px] z-[10] cursor-pointer '
            >
              {
                showPassword ?
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                : <AiOutlineEye fontSize={24} fill="#AFB2BF" /> 
              }
            </span>

            {/* <Link to="/forgot-password">
              <p className='mt-1 ml-auot max-w-max text-xs text-blue-100'>
                Forgot Passowrd
              </p>
            </Link> */}
          </label>

          <button
          type='submit'
          className="bg-blue-500 text-white w-full mt-4 py-2 rounded"
          >
            Sign In
          </button>

        </form>

      </div>

    </div>
  );
};

export default Login;
