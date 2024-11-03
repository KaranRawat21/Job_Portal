import React from 'react'

function GoForJobPage() {
  return (
    <div className='px-5 flex flex-col gap-9 lg:gap-14 py-16'>
      <h2 className=' text-[35px] lg:text-[60px] font-semibold text-gray-500'>Millions Of Jobs.</h2>
      <h1 className='text-[55px] lg:text-[80px] font-bold leading-[70px] lg:w-[900px] lg:leading-[110px]'>Find The One That's <span className='text-purple-600'>right</span>  For You</h1>
      <p className='w-[300px] lg:w-[900px] lg:text-[20px]'>Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 600,00 companies worldwide. The right job is out there.</p>
      <button className='w-max lg:w-[400px] bg-purple-600 h-10
      lg:h-[80px] lg:text-[30px] lg:justify-center text-white p-5 flex items-center font-semibold rounded-md'>Search Jobs</button>
    </div>
  )
}

export default GoForJobPage