import React, { useState } from 'react';
import { useRouter } from 'next/router';

const FilterPrice = () => {

  const router=useRouter()

  const [min,setMin]=useState("")
  const [max,setMax]=useState("")

 const SearchHandler=()=>{
    if(min && max){
            router.push(`/Filter/${min}/${max}`)
    } else{
        alert('Please Enter Minimum And Maximum Price!')
    }
 }
    return (
        <div className='bg-white rounded-lg h-30 flex flex-row mt-6 lg:mt-0'>
            <div className='flex flex-col'>
            <input type="text" value={min} onChange={e=>setMin(e.target.value)}
             className='rounded-md border-2 border-black p-4 h-4 m-2' placeholder='Inter Min Price:'/>

            <input type="text" value={max} onChange={e=>setMax(e.target.value)} 
             className='rounded-md border-2 border-black p-4 h-4 m-2' placeholder='Inter Max Price:'/>
            </div>
            <button  onClick={SearchHandler}
             className='bg-gray-200 rounded-lg w-24 h-22 m-2 font-bold '>Search</button>
        </div>
    );
}

export default FilterPrice;
