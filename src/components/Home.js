import React, { useState } from 'react';
import '../Styles/global.css';
import Navbar from "./Navbar.js";


function Home() {
  const [show, setShow] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });

  const handleMouseEnter = (e) => {
    setShow(true);

    const parentOffset = e.target.getBoundingClientRect();
    const relX = e.pageX - parentOffset.left;
    const relY = e.pageY - parentOffset.top;
    setPosition({ top: relY, left: relX });
    setShow(true);
  };

  const handleMouseOut = (e) => {
    const parentOffset = e.target.getBoundingClientRect();
    const relX = e.pageX - parentOffset.left;
    const relY = e.pageY - parentOffset.top;
    setPosition({ top: relY, left: relX });
    setShow(false);
  };
  return (
    <div>
      <Navbar />
      <section id="about" className='flex justify-end '>
        <div className='flex justify-center w-6/12 h-96 pt-16'>
          <img src="/images/desk.png" alt="Description" className="w-3/4" />
        </div>
        <div className='flex flex-col justify-center w-6/12 h-96 aboutContent pr-52'>
          <h1 className='text-4xl py-5 font-bold'>¡Hola! Soy Natalia Moreno, programadora web full stack</h1>
          <p className='text-xl'>
            Apasionada y autodidacta, disfruto vivir de lo que amo y estoy en busca de nuevos retos para seguir creciendo en mi vida laboral.
            He participado y elaborado diversos proyectos tanto en front como en back, los cuales estaré documentando en el siguiente blog.
          </p>
        </div>
      </section>
      <div className='flex justify-center mt-10'>
        <button onMouseEnter={handleMouseEnter} onMouseOut={handleMouseOut} className=' cvButton-content w-44 text-xl p-3  text-white cvButton'> ¡Descarga mi curriculum!<span
        className={`circle ${show ? 'show' : ''}`} 
        style={{ top: position.top, left: position.left }}>
          </span></button></div>
    </div>
  );
}

export default Home;