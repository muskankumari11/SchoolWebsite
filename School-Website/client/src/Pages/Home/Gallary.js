import React from 'react';

const Gallery = () => {
  return (
    <section>
      <h1
        className='text-3xl sm:text-3xl text-secondary font-semibold'
        style={{ marginBottom: '20px' }} 
      >
        Photos
      </h1>
      <img
        src='https://plus.unsplash.com/premium_photo-1680807869780-e0876a6f3cd5?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        width="500"
        height="300"
        alt="Descriptive Alt Text"
        style={{ display: 'block', margin: '0 auto' }}
      />

<img
        src='https://plus.unsplash.com/premium_photo-1677567996070-68fa4181775a?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        width="500"
        height="300"
        alt="Descriptive Alt Text"
        style={{ display: 'block', margin: '0 auto' }}
      />

<img
        src='https://media.istockphoto.com/id/1169671750/photo/elementary-school-sports-day.jpg?s=2048x2048&w=is&k=20&c=B3hbUO6pBBHxth7Q7_ROAsj07H4CbC8dEFb08LHIn_8='
        width="500"
        height="300"
        alt="Descriptive Alt Text"
        style={{ display: 'block', margin: '0 auto' }}
      />

<img
        src='https://media.istockphoto.com/id/1325825729/photo/festive-ribbons-multi-colored-ribbons-hang-over-the-head.jpg?s=2048x2048&w=is&k=20&c=SY_zr8-jM3nXOmS0649AgDUUu23QWvZGSU5sJ6qWjC8='
        width="500"
        height="300"
        alt="Descriptive Alt Text"
        style={{ display: 'block', margin: '0 auto' }}
      />


    </section>
  );
};

export default Gallery;
