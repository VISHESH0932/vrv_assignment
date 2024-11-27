import React from 'react';
import { Link } from 'react-router-dom';
import aboutImage from './Assets/jobire.png'; 
import { MdHomeFilled, MdScreenSearchDesktop, MdContactMail } from "react-icons/md";
import { RiLoginCircleFill } from "react-icons/ri";
import { FcAddDatabase } from "react-icons/fc";

function About() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center h-screen bg-gray-900 text-white p-5">
      <div className="w-full md:w-2/3 p-5 md:p-10">
        <h2 className="text-3xl md:text-4xl font-bold mt-14">About Jobℹre</h2>
        <p className=" mt-10 text-base md:text-lg leading-6 md:leading-7 mb-6 md:mb-0">
          Welcome to Jobire, your gateway to finding the perfect job tailored to your preferences. Our platform offers robust job filtering options, ensuring you can easily discover opportunities that match your skills and aspirations. Jobire also facilitates connections with industry professionals for valuable referrals, enhancing your chances of landing your dream job. Start your job search journey with Jobire today.
        </p>
        <div className="flex flex-col md:flex-row gap-4 mt-6 justify-center">
          <Link to='/home' className="px-6 py-3 justify-center bg-indigo-900 text-white rounded-lg hover:bg-indigo-800 transition duration-300 flex items-center">
            <MdHomeFilled className="mr-2" /> Home
          </Link>
          <Link to='/jobs' className="px-6 py-3 justify-center bg-indigo-900 text-white rounded-lg hover:bg-indigo-800 transition duration-300 flex items-center">
            <MdScreenSearchDesktop className="mr-2" /> Get Your Jobs
          </Link>
          <Link to='/referral' className="px-6 py-3 justify-center bg-indigo-900 text-white rounded-lg hover:bg-indigo-800 transition duration-300 flex items-center">
            <MdContactMail className="mr-2" /> Find Referral
          </Link>
          <Link to='/post' className="px-6 py-3 justify-center bg-indigo-900 text-white rounded-lg hover:bg-indigo-800 transition duration-300 flex items-center">
            <FcAddDatabase className="mr-2" /> Post a Job
          </Link>
          <Link to='/register' className="px-6 py-3 justify-center bg-indigo-900 text-white rounded-lg hover:bg-indigo-800 transition duration-300 flex items-center">
            <RiLoginCircleFill className="mr-2" /> Join Us
          </Link>
        </div>
      </div>
      <div className="w-full md:w-1/3 mt-6 md:mt-0">
        <img
          src={aboutImage}
          alt="About Jobℹre"
          className="w-full h-auto hidden md:block"
        />
      </div>
    </div>
  );
}

export default About;
