import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import jobireLogo from './Assets/jobire.png';
import { MdHomeFilled } from 'react-icons/md';

const GetReferral = () => {
  const [company, setCompany] = useState('');
  const [college, setCollege] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/matcheduser', { state: { company, college } });
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center h-screen">
      <div className="hidden md:block md:w-2/5 max-w-md p-8">
        <img src={jobireLogo} alt="Jobire Logo" className="w-full max-h-64 mx-auto mb-8" />
      </div>
      <div className="w-full md:w-3/5 max-w-lg p-8">
        <h2 className="text-2xl text-white mb-6 text-center">Connect and grow through mutual referrals at Jobire</h2>
        <form onSubmit={handleSubmit} className="bg-white rounded-lg p-8 shadow-md">
          <div className="mb-6">
            <label htmlFor="company" className="block text-sm font-medium text-gray-700">Company Name</label>
            <input
              type="text"
              id="company"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="form-input mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
              placeholder="Enter Company Name"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="college" className="block text-sm font-medium text-gray-700">College</label>
            <input
              type="text"
              id="college"
              value={college}
              onChange={(e) => setCollege(e.target.value)}
              className="form-input mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
              placeholder="Enter College Name"
              required
            />
          </div>
          <button type="submit" className="w-full py-3 bg-purple-900 text-white rounded-lg hover:bg-purple-800 focus:outline-none focus:bg-indigo-800">
            Search
          </button>
        </form>
        <div className="flex justify-center mt-4">
          <Link to="/home" className="w-full">
            <button className="flex items-center justify-center bg-purple-800 text-white py-3 px-6 rounded-lg hover:bg-purple-700 focus:outline-none focus:bg-indigo-800 w-full">
              <MdHomeFilled className="mr-2" />
              Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GetReferral;
