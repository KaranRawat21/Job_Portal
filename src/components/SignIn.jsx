import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';

function SignIn() {

  const [signInData, setsignInData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setsignInData({
      ...signInData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', signInData);
    // Add form submission logic here
  };

  console.log(signInData)


  return (
    <div>
      <div className='bg-[url("/images/laptop2.png")] bg-cover bg-center h-[500px] lg:h-[800px] flex items-center'>
        <form onSubmit={handleSubmit} className=' w-full lg:min-w-[500px] lg:w-[700px]'>
          <div className='flex justify-center pt-4'>
            <p className='text-[25px] lg:text-[40px] font-bold text-white'>Log in to your Account</p>
          </div>
          <div className='p-5'>
            <label htmlFor="email" className='font-bold text-white'>Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={signInData.email}
              onChange={handleChange}
              placeholder='enter here...'
              autoComplete='email'
              required
              className='rounded-lg outline-none p-2 bg-gray w-full lg:h-14' />
          </div>

          <div className='p-5'>
            <label htmlFor="password" className='font-bold text-white'>Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={signInData.password}
              onChange={handleChange}
              placeholder='enter here...'
              autoComplete="current-password"
              required
              className='rounded-lg outline-none p-2 bg-gray w-full lg:h-14' />
            <div className='flex justify-end text-[12px] text-white font-medium cursor-pointer '>
              <h1>Show password</h1>
            </div>
          </div>
          <div className='p-5'>
            <button type='submit' className='bg-green-600 w-full p-4 rounded-lg text-[20px] font-bold text-white hover:bg-green-700'>Login</button>
          </div>
          <div className='p-5 text-sm text-white font-medium flex justify-center' >
            <p className='bg-black rounded-md'>Don't have an account? <span className='text-[16px] font-bold text-purple-600 cursor-pointer'><Link to='/signup'>Create an account</Link></span></p>
          </div>
        </form>

        <div className='hidden lg:flex w-[800px] h-[90%] lg:items-center'>
          <img src='/images/manWithPc.png' className='h-[70%] rounded-lg' />
        </div>
      </div>
    </div>
  )
}

export default SignIn