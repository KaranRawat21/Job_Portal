import React, { useState } from 'react'
import './Navbar.css'
import { FaBars } from "react-icons/fa";
import { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { IoMdHome } from "react-icons/io";
import { CgBrowse } from "react-icons/cg";
import { FaClipboardQuestion } from "react-icons/fa6";
import { IoMdContact } from "react-icons/io";
import { Link } from 'react-router-dom';

function Navbar() {
  const sliderRef = useRef(null);
  const [navstatus, setNavStatus] = useState(true)

  const slider = () => {
    navstatus ? sliderRef.current.style.top = '64px' : sliderRef.current.style.top = '-100vh';
    setNavStatus(!navstatus)
  }

  const handlenavbar = () => {
    setNavStatus(!navstatus)
    navstatus ? sliderRef.current.style.top = '64px' : sliderRef.current.style.top = '-100vh';

  }

  return (
    <>
      <div className='bg-gray-900 text-white h-16 flex p-2 justify-between items-center  overflow-hidden z-10 fixed top-0 w-full'>
        <div className='flex gap- items-center'>
          <img src='/images/logo.png' alt='logo' className='w-12' />
          <h1 className='font-bold text-[18px]'>SKILLED</h1>
        </div>
        <div><FaBars onClick={slider} className='text-[25px] cursor-pointer hover:text-gray-400 lg:hidden' /></div>
        <div className='mr-4 sm:hidden lg:block hidden'>
          <ul className='flex items-center gap-8 font-semibold'>
            <li className='hover:text-purple-500'><NavLink to='/' className='flex items-center gap-2'><IoMdHome />Home</NavLink></li>
            <li className='hover:text-purple-500'><NavLink to='/findjob' className='flex items-center gap-2'><CgBrowse />Browse Job</NavLink></li>
            <li className='hover:text-purple-500 onClick={handlenavbar}'><NavLink to='/about' className='flex items-center gap-2'><FaClipboardQuestion />About Us</NavLink></li>
            <li className='hover:text-purple-500'><NavLink to='/contact' className='flex items-center gap-2'><IoMdContact />Contact</NavLink></li>
            <li className='text-center bg-green-700 text-[12px] hover:bg-green-800 font-bold p-3 rounded-md cursor-pointer'><Link to='/jobpost'>POST A JOB</Link></li>
            <li className='text-center bg-purple-700 text-[12px] hover:bg-purple-800  font-bold p-3 rounded-md cursor-pointer'><Link to='/login'>LOG IN</Link></li>
          </ul>
        </div>

      </div>
      <div ref={sliderRef} className='h-screen w-screen fixed bg-[rgba(0,0,0,0.9)] top-[-100vh] left-0 transition-all z-[1] text-white flex justify-center font-semibold text-[20px]' onClick={handlenavbar}>
        <ul className='flex flex-col gap-4 pt-5'>
          <li className='hover:text-purple-500 ' onClick={handlenavbar}><NavLink to='/' className='flex items-center gap-2'><IoMdHome />Home</NavLink></li>
          <li className='hover:text-purple-500' onClick={handlenavbar}><NavLink to='/findjob' className='flex items-center gap-2'><CgBrowse />Browse Job</NavLink></li>
          <li className='hover:text-purple-500 onClick={handlenavbar}'><NavLink to='/about' className='flex items-center gap-2'><FaClipboardQuestion />About Us</NavLink></li>
          <li className='hover:text-purple-500' onClick={handlenavbar}><NavLink to='/contact' className='flex items-center gap-2'><IoMdContact />Contact</NavLink></li>
          <li className='text-center bg-green-700 text-[16px] hover:bg-green-800 font-bold p-3 rounded-md cursor-pointer' onClick={handlenavbar} ><Link to='/jobpost'>POST A JOB</Link></li>
          <li className='text-center bg-purple-700 text-[16px] hover:bg-purple-800  font-bold p-3 rounded-md cursor-pointer' onClick={handlenavbar}><Link to='/login'>LOG IN</Link></li>
        </ul>
      </div>
    </>
  )
}

export default Navbar