import React from 'react';
import Homepage from './Homepage';
import About from './About';
import Academics from './Academics';
import Admissions from './Admissions';
import Faculty from './Faculty';
import Students from './Students';
import Gallery from './Gallery';
import Contact from './Contact';

function Home() {
  return (
    <div>
      <div className="bg-primary px-4 sm:px-5">
        <section id="homepage">
          <Homepage />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="academics">
          <Academics />
        </section>
        <section id="admissions">
          <Admissions />
        </section>
        <section id="faculty">
          <Faculty />
        </section>
        <section id="students">
          <Students />
        </section>
        <section id="gallery">
          <Gallery />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>
    </div>
  );
}

export default Home;
