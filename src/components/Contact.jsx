import React from 'react'
import { IoIosContact } from "react-icons/io";
import { IoChatboxEllipses } from "react-icons/io5";
import { useState } from 'react';

function Contact() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add form submission logic here
  };

  console.log(formData)

  return (
    <div className='flex flex-col mt-6 p-5'>
      <div className='flex flex-col items-center gap-5'>
        <h1 className='flex justify-center border-4 w-max border-purple-600 p-3 rounded-lg items-center gap-2 text-[18px]'><IoIosContact className='text-purple-600 text-[30px]' /> <span className='font-bold text-purple-600'>CONNECTING...</span></h1>
        <h1 className='text-[30px] lg:text-[50px] font-bold text-center'>Get in touch with us for more information</h1>
        <p className='text-[13px] lg:text-[20px]'>If you need help or have a question, we're her for you</p>
      </div>


      <div className='mt-12 flex flex-col lg:flex-row'>
        {/* <----ContactPage----> */}
        <div className='h-[600px] lg:h-[650px] bg-[url("/images/contactBg.png")] bg-cover bg-center rounded-lg flex items-center justify-center lg:w-[800px]'>
          <form onSubmit={handleSubmit} className='flex flex-col items-center justify-center w-[90%] h-[80%] backdrop-blur-[6px] bg-white bg-opacity-20 rounded-lg border border-gray-400 gap-8'>
            <h1 className='text-[20px] font-bold text-green-600'>Don't hesitate to Ask</h1>
            <div className='flex w-[80%]'>
              <label htmlFor="name" className='font-bold p-2 bg-green-600 h-10 lg:h-14 flex items-center text-white rounded-l-lg'>Name</label>
              <input
                type="name"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder='enter here...'
                required
                className='rounded-r-lg outline-none p-2 bg-gray w-full' />
            </div>
            <div className='flex w-[80%]'>
              <label htmlFor="email" className='font-bold p-2 bg-green-600 h-10 text-white rounded-l-lg lg:h-14 flex items-center'>Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder='enter here...'
                required
                className='rounded-r-lg outline-none p-2 bg-gray w-full' />
            </div>
            <div className='flex flex-col w-[80%]'>
              <label htmlFor="message"></label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder='What can we help with?'
                required
                className='outline-none p-2 bg-gray h-[150px] resize-none rounded-lg' />
            </div>
            <button type="submit" className='bg-green-600 text-white font-bold text-[20px] p-3 w-[80%] rounded-lg'>Submit</button>
          </form>
        </div>

        <div className='flex flex-col gap-4 lg:gap-8 mt-10 lg:justify-center lg:items-center lg:w-[50%]'>
          <div className='flex flex-col items-center'>
            <h1 className='flex items-center gap-3 text-[20px] font-semibold text-green-600 lg:text-[30px]'><IoChatboxEllipses /><span>Chat to us</span></h1>
            <p className='text-[14px] font-semibold text-gray-500 pl-8'>Our Friendly team is here to help</p>
            <h1 className='font-bold text-[14px] text-gray-700 pl-8'>skilled@gmail.com</h1>
          </div>
          <div className='flex flex-col items-center'>
            <h1 className='flex items-center gap-3 text-[20px] font-semibold text-green-600 lg:text-[30px]'><IoChatboxEllipses /><span>Visit Us</span></h1>
            <p className='text-[14px] font-semibold text-gray-500 pl-8'>Come say hello at our office HQ</p>
            <h1 className='font-bold text-[14px] text-gray-700 pl-8'>Random Smith Street/Delhi</h1>
          </div>
          <div className='flex flex-col items-center'>
            <h1 className='flex items-center gap-3 text-[20px] font-semibold text-green-600 lg:text-[30px]'><IoChatboxEllipses /><span>Call Us</span></h1>
            <p className='text-[14px] font-semibold text-gray-500 pl-8'>Mon-Fri from 8am to 5pm</p>
            <h1 className='font-bold text-[14px] text-gray-700 pl-8'>+1234567890</h1>
          </div>
          <div className='w-[400px] hidden lg:block'>
            <img src='/images/handShake.png' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact