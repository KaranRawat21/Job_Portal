import React from 'react'

function Item({ item }) {
  return (
    <div className='w-[300px] h-[200px] bg-gray-500 bg-opacity-30   flex justify-center items-center gap-3 rounded-2xl backdrop-blur-md shadow-lg  border border-gray-500 cursor-pointer transition-transform duration-300 transform hover:scale-105 '>
      <div className='flex flex-col gap-2'>
        <h1 className='font-bold text-purple-700 text-[17px]'>{item.title}</h1>
        <p className='w-[150px] break-words truncate-multiline text-[13px] text-white font-medium leading-4 '>{item.description}</p>
        <div className='flex justify-end pr-2'><h2 className='bg-purple-600 min-w-14 px-2 py-1 text-white text-[14px] font-medium rounded-md flex justify-center items-center'>{item.salary}</h2></div>
      </div>
    </div>
  )
}

export default Item