import React from 'react';

function Homepage() {
  return (
    <div className='min-h-screen bg-primary flex flex-col items-center justify-center gap-8 py-10 px-4 sm:px-10 text-center'>
      <h1 className='text-5xl sm:text-7xl lg:text-7xl text-secondary font-semibold'>Springdale Public School</h1>
      <img 
        src='https://springdalecbse.in/wp-content/uploads/2024/02/Logo-Springdale-01.png'
        alt="School Logo" 
        className='w-32 h-auto sm:w-40 lg:w-48'
      />
      <h1 className='text-white text-lg sm:text-xl lg:text-2xl'>Welcome to Springdale Public School, where we nurture young minds for a brighter future</h1>
      <p className='text-white w-full sm:w-3/4 lg:w-2/4'>
        "Annual Sports Day - Celebrating Excellence in Sports"
        <br />
        "Science Exhibition - Showcasing Student Innovations"
        <br />
        "Cultural Fest - Embracing Diversity and Creativity"
      </p>
    </div>
  );
}

export default Homepage;

