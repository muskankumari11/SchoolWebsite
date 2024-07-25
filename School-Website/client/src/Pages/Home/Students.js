import React from 'react';

const Students = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center min-h-screen p-4">
        <h1 className='text-3xl sm:text-3xl text-secondary font-semibold'>Students</h1>
        <h1 className='text-2xl sm:text-2xl text-tertiary'>Life at Springdale:</h1>
        <p className='text-white w-2/4'>
        Extracurricular Activities: "Music, Dance, Drama, Art, Sports, Robotics, Debate Club, Science Club
        </p>
        <p className='text-white w-2/4'>
        Clubs and Societies: "Literary Society, Environmental Club, Astronomy Club, Coding Club"
        </p>

        <h1 className='text-2xl sm:text-2xl text-tertiary'>Achievements:</h1>
        <p className='text-white w-2/4'>
        John Smith - National Level Math Olympiad Winner
        </p>
        <p className='text-white w-2/4'>
        Sarah Lee - Gold Medalist in State Swimming Championship
        </p>
        <p className='text-white w-2/4'>
        Tech Innovators Club - Winners of Inter-School Robotics Competition
        </p>

        <h1 className='text-2xl sm:text-2xl text-tertiary'>Student Council:</h1>
        <p className='text-white w-2/4'>
        President: Amy Parker, Grade 12
        </p>
        <p className='text-white w-2/4'>
        Vice President: Rajiv Mehta, Grade 11
        </p>
        <p className='text-white w-2/4'>
        Secretary: Lisa Wong, Grade 10
        </p>
    </section>
  );
};

export default Students;
