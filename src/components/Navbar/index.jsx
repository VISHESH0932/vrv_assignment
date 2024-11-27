import React from 'react';
import './nav.css';

function Navbar() {
  return (
    <div className='h-20 flex items-center w-full text-white'>
      <div className='text-3xl font-bold w-full text-center md:text-left md:pl-20'>
        Job<span className='inline-block animate-pulse-emoji'>ℹ</span>re
      </div>
    </div>
  );
}

export default Navbar;
