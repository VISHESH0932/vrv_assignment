import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Auth/Login';
import Signup from './Auth/Signup';
import Home from './Home/Home';
import Page404 from './Page404'
import About from './Home/About';
import Jobs from './Jobs';
import GetReferral from './Home/GetReferral'
import Register from './Home/Register';
import MatchedUser from './Home/MatchedUser';
import Post from './Home/Post';

function App() {
    return (
      <div>
    {/* // <div className='h-20 flex items-center w-full text-white'>
    //   <div className='text-3xl pl-20 font-bold'>
    //     Job<span className='inline-block animate-pulse-emoji'>ℹ</span>re
    //   </div> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/about" element={<About />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/referral" element={<GetReferral />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Page404 />} />
          <Route path="matcheduser" element={<MatchedUser />} /> 
          <Route path="post" element={<Post />} /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
