import React from 'react'

function Achievement() {
  return (
    <div className='py-10 px-5 lg:flex lg:flex-wrap lg:justify-center lg:gap-10'>
      <div className='flex flex-col items-center gap-1 lg:w-[600px]'>
        <h1 className='text-[60px] font-bold text-purple-600 lg:text-[80px] '>25K+</h1>
        <h2 className='text-[25px] font-semibold lg:text-[30px]'>Completed Cases</h2>
        <p className='text-center lg:w-[80%]'>Our team has successfully completed over 25,000 cases, ensuring high satisfaction and optimal results.</p>
      </div>
      <div className='flex flex-col items-center gap-1 lg:w-[600px]'>
        <h1 className='text-[60px] font-bold text-purple-600 lg:text-[80px]'>17+</h1>
        <h2 className='text-[25px] font-semibold lg:text-[30px]'>Our Offices</h2>
        <p className='text-center lg:w-[80%]'>With over 17  your business needs.</p>
      </div>
      <div className='flex flex-col items-center gap-1 lg:w-[600px]'>
        <h1 className='text-[60px] font-bold text-purple-600 lg:text-[80px]'>10K+</h1>
        <h2 className='text-[25px] font-semibold lg:text-[30px]'>Happy Clients</h2>
        <p className='text-center lg:w-[80%]'>We take pride in our large base of over 10,000 satisfied clients who trust us for their business solutions.</p>
      </div>
      <div className='flex flex-col items-center gap-1 lg:w-[600px]'>
        <h1 className='text-[60px] font-bold text-purple-600 lg:text-[80px]'>50+</h1>
        <h2 className='text-[25px] font-semibold lg:text-[30px]'>Awards Won</h2>
        <p className='text-center lg:w-[80%]'>Our dedication to excellence has been recognized with over 50 industry awards.</p>
      </div>
    </div>

  )
}

export default Achievement