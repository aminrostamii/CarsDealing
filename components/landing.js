import React from 'react';
import Link from 'next/link';
import Sedan from "./icons/Sedan";
import Suv from "./icons/Suv";
import Hatchback from "./icons/Hatchback";
import Sport from "./icons/Sport";
import FilterPrice from './FilterPrice';


const Landing = () => {

  return (
    <div className='relative min-h-[500px] w-full'>
  <div className='absolute inset-0 bg-cover bg-center' style={{backgroundImage: "url('car2.jpeg')"}}></div>
  <div className='absolute inset-0 bg-gray-900 bg-opacity-50 backdrop-blur-sm'></div>

  <div className='z-10 relative flex flex-col items-center justify-center pt-40 p-4'>
    <div className='flex flex-col items-start justify-start relative w-full pl-32'>
  <h1 className='text-white font-semibold text-5xl'>Buy. Sell. Trade.</h1>
   <span className='text-white font-medium text-4xl'>we make it easy.®</span>
   </div>
   <div className='flex md:flex-row flex-col gap-8 items-center pt-10'>
  <div className='flex flex-row m-auto items-center justify-center w-full '>
    <Link href='/Categories/Sedan' className="flex flex-col p-4 rounded-md bg-gray-200 m-2 w-24 cursor-pointer font-medium hover:bg-gray-300 items-center justify-center">
      <Sedan/>
      <span>Sedan</span>
    </Link>
    <Link href="/Categories/Suv" className="flex flex-col p-4 rounded-md bg-gray-200 m-2 w-24 cursor-pointer font-medium hover:bg-gray-300 items-center justify-center">
      <Suv/>
      <span>SUV</span>
    </Link>
    <Link href="/Categories/Hatchback" className="flex flex-col p-4 rounded-md bg-gray-200 m-2 w-24 cursor-pointer font-medium hover:bg-gray-300 items-center justify-center">
      <Hatchback/>
      <span>Hatchback</span>
    </Link>
    <Link href="/Categories/Sport" className="flex flex-col p-4 rounded-md bg-gray-200 m-2 w-24 cursor-pointer font-medium hover:bg-gray-300 items-center justify-center">
      <Sport/>
      <span>Sport</span>
    </Link>
  </div>
  <FilterPrice/>
  </div>
  </div>
</div>

  );
}

export default Landing;
