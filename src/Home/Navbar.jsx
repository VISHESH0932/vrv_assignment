import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaInfoCircle, FaSearch, FaUserFriends, FaBriefcase, FaUserPlus } from 'react-icons/fa';


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <div className="flex justify-between items-center px-10 py-4 bg-gradient-to-r from-[#150f1d] via-[#1d0635] to-[#0f1113]">
        <div className="text-3xl font-bold text-white">
          Job<span className="inline-block animate-pulse">ℹ</span>re
        </div>
        <div className="hidden md:flex gap-8 text-center text-xl">
          <Link to="/about" className="text-white hover:scale-110 transition-transform duration-300">About</Link>
          <Link to="/jobs" className="text-white hover:scale-110 transition-transform duration-300">Search Jobs</Link>
          <Link to="/referral" className="text-white hover:scale-110 transition-transform duration-300">Get Referral</Link>
          <Link to="/post" className="text-white hover:scale-110 transition-transform duration-300">Post Jobs</Link>
          <Link to="/register" className="text-white hover:scale-110 transition-transform duration-300">
            <button className="bg-purple-900 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition duration-300">
              Join Now
            </button>
          </Link>
        </div>
        <div className="md:hidden text-white text-3xl cursor-pointer" onClick={toggleDrawer}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-gradient-to-r from-[#150f1d80] via-[#1d063580] to-[#0f111380] flex flex-col items-center text-white text-xl py-4">
          <Link to="/about" className="flex items-center gap-2 py-2 hover:scale-110 transition-transform duration-300" onClick={toggleDrawer}>
            <FaInfoCircle /> About
          </Link>
          <Link to="/jobs" className="flex items-center gap-2 py-2 hover:scale-110 transition-transform duration-300" onClick={toggleDrawer}>
            <FaSearch /> Search Jobs
          </Link>
          <Link to="/referral" className="flex items-center gap-2 py-2 hover:scale-110 transition-transform duration-300" onClick={toggleDrawer}>
            <FaUserFriends /> Get Referral
          </Link>
          <Link to="/post" className="flex items-center gap-2 py-2 hover:scale-110 transition-transform duration-300" onClick={toggleDrawer}>
            <FaBriefcase /> Post Jobs
          </Link>
          <Link to="/register" className="flex items-center gap-2 py-2 hover:scale-110 transition-transform duration-300" onClick={toggleDrawer}>
            <FaUserPlus />
            <button className="bg-purple-900 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition duration-300">
              Join Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Navbar;
