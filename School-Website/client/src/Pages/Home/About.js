import React from 'react';

const About = () => {
  return (
    <section className='flex flex-col items-center justify-center text-center py-10'>
        <h1 className='text-3xl sm:text-4xl text-secondary font-semibold mb-4 sm:flex-col'>About Us</h1>
        
        <h1 className='text-2xl sm:text-2xl text-tertiary mb-2'>History:</h1>
        <p className='text-white w-3/4 sm:w-2/4 mb-4'>
          Founded in 1985, Springdale Public School has been dedicated to providing quality education and holistic development to students.
        </p>
        
        <h1 className='text-2xl sm:text-2xl text-tertiary mb-2'>Vision:</h1>
        <p className='text-white w-3/4 sm:w-2/4 mb-4'>
          To create a learning environment that fosters academic excellence, critical thinking, and ethical values.
        </p>
        
        <h1 className='text-2xl sm:text-2xl text-tertiary mb-2'>Mission:</h1>
        <p className='text-white w-3/4 sm:w-2/4 mb-4'>
          To empower students with the knowledge, skills, and values needed to thrive in a dynamic world.
        </p>
        
        <h1 className='text-2xl sm:text-2xl text-tertiary mb-2'>Principal's Message:</h1>
        <p className='text-white w-3/4 sm:w-2/4 mb-4'>
          At Springdale, we believe in nurturing the potential of every student and guiding them towards a successful future.
        </p>
        
        <h1 className='text-2xl sm:text-2xl text-tertiary mb-2'>Infrastructure and Facilities:</h1>
        <p className='text-white w-3/4 sm:w-2/4 mb-2'>
          State-of-the-art science and computer labs
        </p>
        <p className='text-white w-3/4 sm:w-2/4 mb-2'>
          Spacious and well-equipped classrooms
        </p>
        <p className='text-white w-3/4 sm:w-2/4 mb-2'>
          Sports facilities including a playground, gymnasium, and swimming pool
        </p>
        <p className='text-white w-3/4 sm:w-2/4 mb-2'>
          Library with a vast collection of books and digital resources
        </p>
    </section>
  );
};

export default About;
