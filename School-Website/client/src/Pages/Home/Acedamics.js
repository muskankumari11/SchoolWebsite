import React from 'react';

const Academics = () => {
  return (
    <section className='flex flex-col items-center justify-center text-center py-10'>
      <h1 className='text-3xl sm:text-3xl text-secondary font-semibold mb-4'>Academics</h1>
      
      <h1 className='text-2xl sm:text-2xl text-tertiary mb-2'>Curriculum:</h1>
      <p className='text-white w-3/4 sm:w-2/4 mb-4'>
        Primary (Grades 1-5): English, Mathematics, Science, Social Studies, Art, Physical Education
      </p>
      <p className='text-white w-3/4 sm:w-2/4 mb-4'>
        Secondary (Grades 6-10): English, Mathematics, Science (Physics, Chemistry, Biology), Social Studies, Computer Science, Physical Education, Art
      </p>
      <h1 className='text-xl sm:text-xl text-tertiary mb-2'>Senior Secondary (Grades 11-12):</h1>
      <p className='text-white w-3/4 sm:w-2/4 mb-4'>
        Science Stream: Physics, Chemistry, Biology, Mathematics, Computer Science, English
      </p>
      <p className='text-white w-3/4 sm:w-2/4 mb-4'>
        Commerce Stream: Accountancy, Business Studies, Economics, Mathematics, English
      </p>

      <h1 className='text-2xl sm:text-2xl text-tertiary mb-2'>Teaching Methodologies:</h1>
      <p className='text-white w-3/4 sm:w-2/4 mb-4'>
        We use a blend of traditional and modern teaching techniques to cater to different learning styles.
      </p>

      <h1 className='text-2xl sm:text-2xl text-tertiary mb-2'>Educational Resources:</h1>
      <p className='text-white w-3/4 sm:w-2/4 mb-4'>
        Digital classrooms, interactive learning modules, and access to online educational platforms.
      </p>
    </section>
  );
};

export default Academics;
