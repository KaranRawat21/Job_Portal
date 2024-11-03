import React from 'react'

function TopRecruiters() {
  return (
    <div className='px-5 py-10 flex flex-col items-center bg-[url("/images/purpleBg.png")] bg-cover bg-center'>
      <h2 className='text-[35px] lg:text-[50px] font-bold'>Top Recruiters</h2>
      <p className='text-center'>Discover your next career move, freelance gig, or internship</p>
      <img src='/images/Recruiters.png' className='mt-10 w-[400px] lg:w-[600px]' />
    </div>
  )
}

export default TopRecruiters