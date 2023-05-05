import React, { useState } from 'react';

const Banner = () => {
  

  return (
    <div className='w-full relative'>
      <img
        onLoad={() => setShowBlur(false)}
        className={`w-full h-height-sm md:h-height-md backdrop-blur-md `}
        src="https://c0.wallpaperflare.com/preview/184/811/591/blur-bread-rolls-counter-cup.jpg"
        alt=""
      />

      <div className='absolute inset-0 flex items-center justify-center'>
        <div className='text-white'>
        <h1 className='text-2xl md:text-5xl text-teal-200 font-bold m-7 md:m-10'>Choose From Thousands of <br />
        Recipes & Enjoy Cooking!!!</h1>
          <p className='md:text-2xl font-bold m-7 text-teal-100 md:m-10 '>Browse through over 650,000 tasty recipes...</p>
        </div>
      </div>
    </div>
    
  );
};

export default Banner;
  