import React from 'react'
import { NavLink } from 'react-router-dom';


function AboutUs() {
  return (
    <>
      <div>
        <div className='flex flex-col items-center'>
          <div className='flex flex-col items-center'>
            <h1 className='text-[45px] text-purple-600 font-bold m-4 lg:text-[80px]'>About Us</h1>
            <p className='p-5 text-center text-[16px] lg:text-[20px] lg:w-[900px]'><span className='text-purple-600 font-semibold lg:text-[30px]'>Welcome to Skilled</span>, your premier destination for finding the perfect job or hiring the right talent. Our platform is dedicated to bridging the gap between job seekers and employers, ensuring that the right opportunities reach the right people.</p>
          </div>
          <img src='/images/teamImg.png' className='mt-6 w-[350px] lg:w-[90%] rounded-lg shadow-2xl' />
        </div>

        <div className='p-5 lg:p-10'>
          <h1 className='text-[25px] font-semibold mb-4 lg:text-[60px] lg:w-[900px] '>Impressive Stats and Achievement You Can Trust</h1>
          <div className='flex flex-col gap-6'>
            <div className='lg:flex items-center gap-6'>
              <h1 className='text-[60px] lg:text-[100px] font-bold text-purple-600'>12</h1>
              <p className='text-[20px] lg:text-[30px] font-semibold text-gray-700'>Years in Business</p>
            </div>
            <div className='lg:flex items-center gap-6'>
              <h1 className='text-[60px] lg:text-[100px] font-bold text-purple-600'>5/5</h1>
              <p className='text-[20px] lg:text-[30px] font-semibold text-gray-700'>Client Happiness</p>
            </div>
            <div className='lg:flex items-center gap-6'>
              <h1 className='text-[60px] lg:text-[100px] font-bold text-purple-600'>100+</h1>
              <p className='text-[20px] lg:text-[30px] font-semibold text-gray-700'>Service Coverage Area</p>
            </div>
          </div>

          <div className='flex flex-col gap-4 mt-20'>
            <div className='bg-green-500 rounded-lg flex flex-col items-center shadow-xl'>
              <img src='images/img2.png' />
              <h1 className='text-[18px] lg:text-[25px] font-semibold'>Where Ambition Meets Opportunity</h1>
              <p className='p-5 text-[14px] lg:text-[16px] text-white'>Unlock Your Potential and Transform Your Career with Us. Your Journey to Success Begins Here</p>
            </div>
            <div className='bg-green-800 rounded-lg flex flex-col items-center shadow-xl lg:flex-row lg:justify-center'>
              <img src='images/img3.png' className='w-[300px] lg:w-[600px]' />
              <div className='flex flex-col items-center'>
                <h1 className='bg-yellow-400 w-[150px] lg:w-[300px] h-10 lg:h-16 lg:font-semibold lg:text-[30px] rounded-lg flex items-center justify-center font-semibold cursor-pointer hover:bg-purple-600 hover:text-white hover:border-none'><NavLink to='/contact'>Contact</NavLink></h1>
                <p className='p-5 text-[14px] lg:text-[20px] lg:text-center text-white lg:w-[600px]'>We’re here to help you every step of the way. Whether you have questions about job listings, need assistance with your profile, or want to provide feedback, our team is ready to assist you.</p>
              </div>
            </div>
          </div>

          <div className='mt-16'>
            <div>
              <h1 className='text-purple-600 font-bold text-[35px] lg:text-[60px] mb-5'>Our Vision</h1>
              <p className=' text-[15px] lg:text-[20px]'>At <span className='text-purple-600 font-semibold text-[16px] lg:text-[25px]'>Skilled</span>, our vision is to create a world where job searching is seamless, efficient, and rewarding. We aim to empower individuals by connecting them with opportunities that match their skills, interests, and career aspirations.</p>
            </div>
            <div className='mt-10'>
              <h1 className='text-[35px] font-semibold text-purple-600 lg:text-[60px]'>What we Offer</h1>
              <ul className='flex flex-col gap-3 text-[14px] lg:text-[20px] lg:gap-8'>
                <li className='lg:w-[1000px]'>
                  <span className='text-[16px] lg:text-[25px] text-green-600 font-bold'>1. Extensive Job Listings:</span> With thousands of job postings across various industries, we provide a diverse range of opportunities for all types of job seekers.
                </li>
                <li className='lg:w-[1000px]'>
                  <span className='text-[16px] text-green-600 lg:text-[25px] font-bold'>2. User-Friendly Interface:</span> Our intuitive platform ensures an easy and efficient job search process, from creating a profile to applying for jobs.
                </li>
                <li className='lg:w-[1000px]'>
                  <span className='text-[16px] text-green-600 lg:text-[25px] font-bold'>3. Personalized Job Recommendations:</span> By leveraging advanced algorithms, we offer job suggestions tailored to your unique profile and preferences.
                </li>
                <li className='lg:w-[1000px]'>
                  <span className='text-[16px] text-green-600 lg:text-[25px] font-bold'>4. Employer Solutions:</span> For employers, we provide robust tools for posting jobs, managing applications, and finding the perfect candidates.
                </li>
              </ul>
            </div>
            <div className='mt-14 flex flex-col items-center gap-5'>
              <img src='images/img4.jpg' className='rounded-lg shadow-2xl mb-5' />
              <h1 className='text-[35px] lg:text-[50px] font-bold text-purple-600 '>Our Commitment</h1>
              <p className='text-center lg:text-[20px]'>We are committed to excellence in every aspect of our service. Our dedicated support team is available to assist you with any questions or concerns, ensuring that your experience with Skilled is nothing short of exceptional.</p>
              <h2 className='bg-green-600 lg:text-[20px] w-[200px] lg:w-[400px] h-10 lg:h-16 rounded-lg flex justify-center items-center text-white font-bold cursor-pointer hover:bg-purple-600 '><NavLink to='/findjob'>A Job For You...</NavLink></h2>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutUs