import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase.config';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
      
        const user = userCredential.user;
        console.log("User signed in: ", user);
        setError("");
        
        toast.success("Logged in successfully!");
        setTimeout(() => {
          navigate('/home'); 
        }, 7000);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.error("Error signing in: ", errorMessage);
        setError(errorMessage);
        toast.error(errorMessage);
      });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen  text-white">
      <ToastContainer />
      <div className="text-3xl font-bold mb-8">
        Job<span className="inline-block animate-pulse-emoji">ℹ</span>re
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 bg-white p-6 rounded-lg shadow-md w-96">
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
        {error && <div className="text-red-500 text-sm">{error}</div>}
        <button type="submit" className="bg-violet-800 text-white py-2 rounded-lg hover:bg-violet-700 transition duration-300">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
