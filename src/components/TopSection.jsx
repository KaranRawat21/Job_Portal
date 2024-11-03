import React from 'react'

function TopSection() {
  return (
    <div className="bg-[url('/images/firstPageImgPhone.jpg')] md:bg-[url('/images/firstPageImg.jpg')] bg-cover bg-center h-screen py-10 px-5 flex flex-col gap-4 lg:gap-10">
      <p className='text-[18px] font-semibold text-gray-500 lg:text-gray-400 lg:text-[25px] '>Easiest way to find a perfect Job...</p>
      <h1 className='text-[55px] lg:text-[100px] font-bold flex justify-center lg:justify-start text-white lg:w-[800px]'>Find Your Next Dream Job</h1>
      <div className='flex gap-4 flex-col my-4 lg:flex-row '>
        <button className='bg-purple-600 hover:bg-purple-700 text-white h-12 p-4 flex items-center font-semibold justify-center lg:w-[500px] lg:h-20 lg:rounded-lg'>LOOKING FOR A JOB?</button>
        <button className='bg-green-500 hover:bg-green-600 text-white h-12 p-4 flex items-center font-semibold justify-center lg:w-[500px] lg:h-20 lg:rounded-lg'>FIND TALENT</button>
      </div>
      <div className='flex justify-center'>
        <img src='/images/boyWithLaptop.png' className='w-[280px] lg:hidden' />
      </div>
    </div>
  )
}

export default TopSection