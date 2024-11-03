import React from 'react'
import Item from './Item';
import filteredData from '../restaurantChains.json';
import Search from './Search';


function FindJob() {
  return (
    <>
      <Search />
      <div
        style={{ backgroundImage: `url(${'/images/jobsearchh.jpg'})` }}
        className="bg-cover bg-center h-screen flex flex-col gap-4 items-center p-4 overflow-scroll xl:overflow-auto ">
        {filteredData.length > 0 ? (
          <ul className='flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:justify-center'>
            {filteredData.map((item, index) => (
              <li key={index}>
                <Item item={item} />
              </li>
            ))}
          </ul>
        ) : (
          <p className='text-white text-xl'>No items found</p>
        )}


      </div>



    </>
  )
}

export default FindJob