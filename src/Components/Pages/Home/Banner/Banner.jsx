import React from 'react';


const Banner = () => {
    return (
      <div className='w-full relative'>
        <img style={{ filter: 'brightness(65%)' }} className='w-full h-height-sm md:h-height-md' src='https://media.istockphoto.com/id/1455050837/photo/super-bowl-or-football-theme-food-table-scene-overhead-view-on-dark-wood.jpg?s=1024x1024&w=is&k=20&c=kYyKQvqxTQRZkZAPv3QosTabVF9ApgffDzeYqTf03V4=' alt="" />
        <div className='absolute inset-0 flex items-center justify-center'>
          <div className='text-white'>
          <h1 className='text-2xl md:text-6xl font-bold m-7 md:m-10'>Choose From Thousands of <br />
           Recipes & Enjoy Cooking!!</h1>
          <p className=' md:text-2xl text-warning font-bold m-5 md:m-10 '><small>Browse through over 650,000 tasty recipes...</small></p>
          </div>
        </div>
      </div>


      

    );
  };
  

export default Banner;