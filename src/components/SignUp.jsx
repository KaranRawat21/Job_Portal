import React, { useState } from 'react'

function SignUp() {

  const [signUpData, setSignUpData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignUpData({
      ...signUpData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', signUpData);
    // Add form submission logic here
  };


  return (
    <div className='bg-[url("/images/signUpBg.jpg")] md:bg-[url("/images/signUpBgPc.png")] bg-cover bg-center h-screen pt-5'>
      <div className='flex justify-center'>
        <form onSubmit={handleSubmit} className='w-[90%] backdrop-blur-sm bg-gray-200 bg-opacity-5  border-gray-500 border rounded-lg md:w-[600px]'>
          <div className='flex justify-center p-5'>
            <h1 className='font-bold text-[30px] text-green-600'>Sign Up</h1>
          </div>
          <div className='px-4 py-3'>
            <label htmlFor='firstName' className='font-bold text-white' >First Name</label>
            <input
              type='text'
              id='firstName'
              name='firstName'
              value={signUpData.firstName}
              onChange={handleChange}
              placeholder='enter first name...'
              required
              className='rounded-lg outline-none p-2 bg-gray w-full lg:h-12'
            />
          </div>
          <div className='px-4 py-3'>
            <label htmlFor='lastName' className='font-bold text-white' >Last Name</label>
            <input
              type='text'
              id='lastName'
              name='lastName'
              value={signUpData.lastName}
              onChange={handleChange}
              placeholder='enter last name...'
              required
              className='rounded-lg outline-none p-2 bg-gray w-full lg:h-12'
            />
          </div>
          <div className='px-5 py-3'>
            <label htmlFor='email' className='font-bold text-white' >Email</label>
            <input
              type='email'
              id='email'
              name='email'
              value={signUpData.email}
              onChange={handleChange}
              placeholder='enter your email...'
              required
              className='rounded-lg outline-none p-2 bg-gray w-full lg:h-12'
            />
          </div>
          <div className='px-5 py-3'>
            <label htmlFor='password' className='font-bold text-white' >Password</label>
            <input
              type='password'
              id='password'
              name='password'
              value={signUpData.password}
              onChange={handleChange}
              placeholder='enter your password...'
              required
              autoComplete='password'
              className='rounded-lg outline-none p-2 bg-gray w-full lg:h-12'
            />
          </div>
          <div className='px-5 py-3'>
            <label htmlFor='confirmPassword' className='font-bold text-white' > Confirm Password</label>
            <input
              type='password'
              id='confirmPassword'
              name='confirmPassword'
              value={signUpData.confirmPassword}
              onChange={handleChange}
              placeholder='enter password again...'
              required
              autoComplete='confirmPassword'
              className='rounded-lg outline-none p-2 bg-gray w-full lg:h-12'
            />
          </div>
          <div className='flex justify-center p-3 '>
            <button type='submit' className='bg-green-600 text-white font-bold text-[20px] w-[200px] h-14 rounded-lg hover:bg-green-800'>Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignUp