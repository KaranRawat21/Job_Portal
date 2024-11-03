import React, { useState } from 'react';
import foodData from '../restaurantChains.json';

function Search() {

  const [filteredData, setFilteredData] = useState(foodData);
  const [value, setValue] = useState('');

  const handleSearch = (event) => {
    const inputValue = event.target.value;
    setValue(inputValue)
    const newFoodAray = foodData.filter((item) => item.title.toLowerCase().includes(inputValue.toLowerCase()))
    setFilteredData(newFoodAray)
  }


  return (
    <div className=' bg-purple-500 flex justify-center p-5'>
      <div className='w-[250px] xl:w-[300px] h-9 '>
        <input type='text' placeholder='Search Job....' className='border-2 border-white rounded-md w-full h-full bg-transparent text-white outline-none p-3' value={value} onChange={handleSearch} />
      </div>
    </div>
  )
}

export default Search