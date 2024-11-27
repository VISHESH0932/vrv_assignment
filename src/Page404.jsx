import React from 'react';
import { Link } from 'react-router-dom';

function NoPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen  text-white">
      <div className="flex flex-col items-center justify-center">
        <p className="text-center text-white text-3xl font-bold mb-8">
          Oops! The Page you are looking for does not exist
        </p>
        <Link to="/home" className="bg-white text-black px-4 py-2 rounded-lg shadow-md hover:bg-gray-200 transition duration-300">
          Go Home
        </Link>
      </div>
    </div>
  );
}

export default NoPage;

