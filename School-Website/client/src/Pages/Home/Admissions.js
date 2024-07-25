import React from 'react';

const Admissions = () => {
  return (
    <section className='flex flex-col items-center justify-center text-center py-10'>
      <h1 className='text-3xl sm:text-3xl text-secondary font-semibold mb-4'>Admissions</h1>
      
      <h1 className='text-2xl sm:text-2xl text-tertiary mb-2'>Process:</h1>
      <p className='text-white w-3/4 sm:w-2/4 mb-4'>
        Admission forms are available for download. Submit the completed form along with required documents at the school office.
      </p>
      
      <h1 className='text-2xl sm:text-2xl text-tertiary mb-2'>Criteria:</h1>
      <p className='text-white w-3/4 sm:w-2/4 mb-4'>
        Admission is based on merit and availability of seats. Entrance tests may be conducted for certain grades.
      </p>
      
      <h1 className='text-2xl sm:text-2xl text-tertiary mb-2'>Important Dates:</h1>
      <p className='text-white w-3/4 sm:w-2/4 mb-1'>
        * Admission Form Availability: March 1st
      </p>
      <p className='text-white w-3/4 sm:w-2/4 mb-1'>
        * Last Date for Submission: March 31st
      </p>
      <p className='text-white w-3/4 sm:w-2/4 mb-1'>
        * Entrance Test: April 15th
      </p>
      <p className='text-white w-3/4 sm:w-2/4 mb-1'>
        * Announcement of Results: April 30th
      </p>
    </section>
  );
};

export default Admissions;
