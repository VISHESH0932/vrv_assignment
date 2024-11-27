import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {  createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase.config'; 

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
      
        const user = userCredential.user;
        console.log("User signed up: ", user);
        setSuccessMessage("Registered Successfully");
        setError("");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Error signing up: ", errorCode, errorMessage);
        setError(errorMessage);
        setSuccessMessage("");
      });
  };

  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => {
        navigate('/home');
      }, 2000); 

      return () => clearTimeout(timer);
    }
  }, [successMessage, navigate]);

  return (
    <div className="flex flex-col items-center justify-center h-screen  text-white">
      <div className="text-3xl font-bold mb-8">
        Job<span className="inline-block animate-pulse-emoji">ℹ</span>re
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 bg-white p-6 rounded-lg shadow-md w-96">
        <input
          type="text"
          placeholder="Enter Name"
          className="text-black py-2 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-indigo-500"
        />
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="Enter Email"
          className="text-black py-2 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-indigo-500"
        />
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder="Enter Password"
          className="text-black py-2 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-indigo-500"
        />
        <input
          type="password"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          placeholder="Confirm Password"
          className="text-black py-2 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-indigo-500"
        />
        {error && <div className="text-red-500 text-sm">{error}</div>}
        {successMessage && <div className="text-green-500 text-sm">{successMessage}</div>}
        <button type="submit" className="bg-violet-800 text-white py-2 rounded-lg hover:bg-indigo-700 transition duration-300">
          Sign up
        </button>
        <Link to="/login" className="text-blue-400 text-sm mt-2 inline-block text-center">
          Already have an Account ? Login
        </Link>
      </form>
    </div>
  );
}

export default Signup;
