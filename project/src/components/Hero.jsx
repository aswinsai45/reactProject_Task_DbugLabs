import React from 'react';
import Typed from 'react-typed';

const Hero = () => {
  return (
    <div className='text-white'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#c5bb7a] font-bold p-2'>DATA ANALYTICS</p>

        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Data grows with YOU.</h1>

        <div className='flex justify-center items-center'>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>Fast & flexible financing for</p>

          <Typed
            className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
            strings={['BTB', 'BTC', 'SASS']}
            typeSpeed={100}
            backSpeed={135}
            loop
         />

        </div>
        <p className='md:text-2xl text-xl font-bold text-gray-500'>Monitor your data analytics to increase revenue for BTB, BTC, & SASS platforms</p>
        <button className='bg-[#c5bb7a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Analyze Your Data Now</button>
      </div>
    </div>
  )
}

export default Hero;
