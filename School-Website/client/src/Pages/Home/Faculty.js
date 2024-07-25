import React from 'react';

const Faculty = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center min-h-screen p-4">
        <h1 className='text-3xl sm:text-3xl text-secondary font-semibold'>Faculty</h1>
        <h1 className='text-2xl sm:text-2xl text-tertiary'>Profiles:</h1>
      <p className='text-white w-2/4'>
      John Doe: Principal, M.Ed, 20 years of experience in educational administration.
      </p>
      <p className='text-white w-2/4'>
      Jane Smith: Vice Principal, M.Sc. in Physics, 15 years of teaching experience.
      </p>
      <p className='text-white w-2/4'>
      Emily Johnson: English Teacher, M.A. in English, 10 years of teaching experience.
      </p>
      <p className='text-white w-2/4'>
      Michael Brown: Mathematics Teacher, M.Sc. in Mathematics, 8 years of teaching experience.
      </p>
      <p className='text-white w-2/4'>
      Sophia Davis: Science Teacher, M.Sc. in Chemistry, 12 years of teaching experience.
      </p>
      <p className='text-white w-2/4'>
      David Wilson: Computer Science Teacher, B.Tech in Computer Science, 5 years of teaching experience.
      </p>
    </section>
  );
};

export default Faculty;

