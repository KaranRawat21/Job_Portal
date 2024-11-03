import React, { useState } from 'react'

function PostJobs() {

  const [jobPostData, setJobPostData] = useState({
    jobTitle: "",
    companyName: "",
    location: "",
    jobType: "",
    salary: "",
    description: "",
  })

  const handleChange = (e) => {
    setJobPostData({
      ...jobPostData,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', jobPostData);
    // Add form submission logic here
  }

  return (
    <div className='bg-[url("/images/purpleBg.jpg")] md:bg-[url("/images/postJobBg.png")] h-screen bg-cover bg-center p-5 md:flex md:justify-center  '>
      <div className='bg-gray-800 text-white p-5 rounded-lg md:w-[60%]'>
        <form onSubmit={handleSubmit}>
          <div>
            <h1 className='text-[25px] font-bold text-yellow-400 text-center mb-5 '>Post your job and find the perfect match</h1>
          </div>
          <div className='flex flex-col gap-2'>

            <div className='flex flex-col'>
              <label htmlFor='jobTitle' className='text-[14px] md:text-[16px] font-semibold'>Job Title</label>
              <input
                type='text'
                id='jobTitle'
                name='jobTitle'
                value={jobPostData.jobTitle}
                onChange={handleChange}
                placeholder='Enter job title...'
                required
                className='outline-none h-2 rounded-xl p-4 md:py-6 text-black w-full text-[14px]'
              />
            </div>
            <div>
              <label htmlFor='companyName' className='text-[14px] md:text-[16px] font-semibold'>Company Name</label>
              <input
                type='text'
                id='companyName'
                name='companyName'
                value={jobPostData.companyName}
                onChange={handleChange}
                placeholder='Enter company name...'
                required
                className='outline-none h-2 rounded-xl p-4 md:py-6 text-black w-full text-[14px]'
              />
            </div>
            <div className='flex flex-col'>
              <label htmlFor='location' className='text-[14px] md:text-[16px] font-semibold'>Location</label>
              <input
                type='text'
                id='location'
                name='location'
                value={jobPostData.location}
                onChange={handleChange}
                placeholder='Enter company location...'
                required
                className='outline-none h-2 rounded-xl p-4 md:py-6 text-black w-full mb-2 text-[14px]'
              />
            </div>

          </div>

          <div className='flex flex-col gap-2'>

            <div>
              <div className=' md:flex gap-8 my-2'>
                <label className='text-[14px] md:text-[16px] font-semibold'>Job Type</label>
                <div>
                  <input
                    type='radio'
                    id='full-time'
                    name='jobType'
                    value='Full-time'
                    onChange={handleChange}
                    required
                    className='outline-none'
                  />
                  <label htmlFor='full-time'>Full-time</label>
                </div>
                <div>
                  <input
                    type='radio'
                    id='part-time'
                    name='jobType'
                    value='Part-time'
                    onChange={handleChange}
                    required
                    className='outline-none'
                  />
                  <label htmlFor='part-time'>Part-time</label>
                </div>
                <div>
                  <input
                    type='radio'
                    id='remote'
                    name='jobType'
                    value='Remote'
                    onChange={handleChange}
                    required
                    className='outline-none'
                  />
                  <label htmlFor='remote'>Remote</label>
                </div>
              </div>
              <div>
                <div className='flex flex-col'>
                  <label htmlFor='salary' className='text-[14px] md:text-[16px] font-semibold'>Salary</label>
                  <input
                    type='text'
                    id='salary'
                    name='salary'
                    value={jobPostData.salary}
                    onChange={handleChange}
                    placeholder='Enter Salary...'
                    required
                    className='outline-none h-2 rounded-xl p-4 md:py-6 text-black w-full text-[14px]'
                  />
                </div>
              </div>
            </div>

            <div>
              <div className='flex flex-col'>
                <label htmlFor='description' className='text-[14px] md:text-[16px] font-semibold'>Description</label>
                <textarea
                  id='description'
                  name='description'
                  value={jobPostData.description}
                  onChange={handleChange}
                  placeholder='Enter job description(Skills required, education, deadline, etc)..'
                  required
                  className='outline-none rounded-xl p-3 text-black w-full resize-none overflow-auto scrollbar-hide mb-3 text-[14px] h-[100px] md:h-[150px]'
                />
              </div>
            </div>



          </div>
          <div className='flex justify-center'>
            <button type='submit' className='bg-green-600 rounded-lg p-2 w-[150px] text-[20px] font-bold'>Post</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default PostJobs