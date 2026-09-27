import React, { useRef, useState } from 'react';
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';

const Login1 = () => {
  const loginForm = useRef();
  const signupForm = useRef();

  // Login / Signup switch
  const [isSignup, setIsSignup] = useState(false);

  // Password show/hide
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Login data
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  // Signup data
  const [signupData, setSignupData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  // Login input change
  const handleLoginChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  // Signup input change
  const handleSignupChange = (e) => {
    setSignupData({
      ...signupData,
      [e.target.name]: e.target.value,
    });
  };

  // Login submit
  const handleLoginSubmit = (e) => {
    e.preventDefault();

    console.log('Login Data:', loginData);

    alert('Login submitted!');

    setLoginData({
      email: '',
      password: '',
    });
  };

  // Signup submit
  const handleSignupSubmit = (e) => {
    e.preventDefault();

    // Password check
    if (signupData.password !== signupData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    // EmailJS
    emailjs
      .sendForm(
        'service_wxot13c',
        'template_c7484et',
        signupForm.current,
        {
          publicKey: 'yyktCNDG8lVdCYiDB',
        }
      )
      .then(
        () => {
          alert('Sign Up successful!');

          setSignupData({
            fullName: '',
            email: '',
            password: '',
            confirmPassword: '',
          });

          // After signup, show Login
          setIsSignup(false);
        },
        (error) => {
          console.log('FAILED...', error);
          alert('Something went wrong. Please try again.');
        }
      );
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center ">

      <div className="w-[43%] h-[100%] bg-white rounded-xl shadow-lg overflow-hidden border border-gray-500 -mt-10">

        {/* Header */}
        <div className="bg-[#d2e8d4] py-6 text-center">

          <h2 className="text-2xl font-bold text-green-950">
            {isSignup ? 'Create Hope Today' : 'Join The Movement'}
          </h2>

        </div>

       {/* LOGIN  */}
        {!isSignup && (
          <form
            ref={loginForm}
            onSubmit={handleLoginSubmit}
            className="p-6 space-y-4"
          >

            {/* Email */}
            <div>
              <label className="block text-gray-900 font-semibold mb-1">
                Email Address
              </label>

              <div className="relative flex items-center">

                <FaUser className="absolute left-3 text-gray-400" />

                <input
                  type="email"
                  name="email"
                  value={loginData.email}
                  onChange={handleLoginChange}
                  placeholder="Enter your email"
                  required
                  className="w-full pl-10 pr-4 py-2 border rounded-lg
                  focus:outline-none focus:ring-1 focus:ring-green-600
                  border-gray-300"
                />

              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-gray-900 font-semibold mb-1">
                Password
              </label>

              <div className="relative flex items-center">

                <FaLock className="absolute left-3 text-gray-400" />

                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={loginData.password}
                  onChange={handleLoginChange}
                  placeholder="Enter your password"
                  required
                  className="w-full pl-10 pr-10 py-2 border rounded-lg
                  focus:outline-none focus:ring-1 focus:ring-green-600
                  border-gray-300"
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                  className="absolute right-3 text-gray-500"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>

              </div>
            </div>

            {/* Forgot Password */}
            <div className="text-right">

              <a
                href="#forgot"
                className="text-sm text-gray-600 hover:underline"
              >
                Forgot Password?
              </a>

            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-[#1b3b22] text-white py-2.5
              rounded-lg font-semibold hover:bg-opacity-90
              transition duration-200"
            >
              Login
            </button>

            {/* Sign Up */}
            <div className="text-center pt-2 text-sm text-gray-600">

              Don't have a Zoo Pass?{' '}

              <button
                type="button"
                onClick={() => setIsSignup(true)}
                className="text-green-800 text-[16px] font-semibold underline"
              >
                Sign Up
              </button>

            </div>

          </form>
        )}

        {/*  SIGN UP  */}
        {isSignup && (
          <form
            ref={signupForm}
            onSubmit={handleSignupSubmit}
            className="p-6 space-y-4"
          >

            {/* Full Name */}
            <div>
              <label className="block text-gray-900 font-semibold mb-1">
                Full Name
              </label>

              <div className="relative flex items-center">

                <FaUser className="absolute left-3 text-gray-400" />

                <input
                  type="text"
                  name="fullName"
                  value={signupData.fullName}
                  onChange={handleSignupChange}
                  placeholder="Enter your full name"
                  required
                  className="w-full pl-10 pr-4 py-2 border rounded-lg
                  focus:outline-none focus:ring-1 focus:ring-green-600
                  border-gray-300"
                />

              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-900 font-semibold mb-1">
                Email Address
              </label>

              <div className="relative flex items-center">

                <FaEnvelope className="absolute left-3 text-gray-400" />

                <input
                  type="email"
                  name="email"
                  value={signupData.email}
                  onChange={handleSignupChange}
                  placeholder="Enter your email"
                  required
                  className="w-full pl-10 pr-4 py-2 border rounded-lg
                  focus:outline-none focus:ring-1 focus:ring-green-600
                  border-gray-300"
                />

              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-gray-900 font-semibold mb-1">
                Password
              </label>

              <div className="relative flex items-center">

                <FaLock className="absolute left-3 text-gray-400" />

                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={signupData.password}
                  onChange={handleSignupChange}
                  placeholder="Enter your password"
                  required
                  className="w-full pl-10 pr-10 py-2 border rounded-lg
                  focus:outline-none focus:ring-1 focus:ring-green-600
                  border-gray-300"
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                  className="absolute right-3 text-gray-500"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>

              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-gray-700 font-semibold mb-1">
                Confirm Password
              </label>

              <div className="relative flex items-center">

                <FaLock className="absolute left-3 text-gray-400" />

                <input
                  type={
                    showConfirmPassword
                      ? 'text'
                      : 'password'
                  }
                  name="confirmPassword"
                  value={signupData.confirmPassword}
                  onChange={handleSignupChange}
                  placeholder="Confirm your password"
                  required
                  className="w-full pl-10 pr-10 py-2 border rounded-lg
                  focus:outline-none focus:ring-1 focus:ring-green-600
                  border-gray-300"
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowConfirmPassword(
                      !showConfirmPassword
                    )
                  }
                  className="absolute right-3 text-gray-500"
                >
                  {showConfirmPassword ? (
                    <FaEyeSlash />
                  ) : (
                    <FaEye />
                  )}
                </button>

              </div>
            </div>

            {/* Sign Up Button */}
            <button
              type="submit"
              className="w-full bg-[#1b3b22] text-white py-2.5
              rounded-lg font-semibold hover:bg-opacity-90
              transition duration-200"
            >
              Sign Up
            </button>

            {/* Login */}
            <div className="text-center pt-2 text-sm text-gray-600">

              Already have an account?{' '}

              <button
                type="button"
                onClick={() => setIsSignup(false)}
                className="text-green-800 text-[17px] font-semibold underline"
              >
                Login
              </button>

            </div>

          </form>
        )}

      </div>
    </div>
  );
};

export default Login1;

