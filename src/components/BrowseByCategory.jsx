import React from 'react'

function BrowseByCategory() {

  const jobCategoriesList = [
    {
      catogery: 'Marketing & Sales',
      availableJobs: 1526,
    },
    {
      catogery: 'IT & Networking',
      availableJobs: 2000,
    },
    {
      catogery: 'Data Science & Analysis',
      availableJobs: 1000,
    },
    {
      catogery: 'Customer Services',
      availableJobs: 3001,
    },
    {
      catogery: 'Data Entry',
      availableJobs: 5001,
    },
    {
      catogery: 'Accounting and Consulting',
      availableJobs: 1001,
    },
    {
      catogery: 'Web Development',
      availableJobs: 401,
    },
  ]

  return (
    <div className='flex flex-col items-center py-10 px-5'>
      <h1 className='text-[30px] font-bold mb-4'>Browse by category</h1>
      <p className='text-[20px] text-gray-600 text-center'>Find the job that's  perfect for you, about 800+ new jobs everyday</p>

      <div className='my-10  w-full flex flex-col gap-3 lg:flex-row  lg:flex-wrap lg:justify-center'>
        {jobCategoriesList.map(category => (
          <div className=' border-gray-400 border h-full p-3 rounded-md flex flex-col items-center hover:bg-gray-100 lg:w-[500px] lg:h-[100px] lg:justify-center'>
            <h2 className='font-semibold text-[17px] '>{category.catogery}</h2>
            <h3 className='text-gray-600 text-[14px]'>{category.availableJobs} Jobs Available</h3>
          </div>
        ))}

      </div>
      <img src='/images/jobsimg.png' className='rounded-[10%] w-[350px]lg:object-fit lg:rounded-lg' />
    </div>
  )
}

export default BrowseByCategory