import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [show, setShow] = useState(false);


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

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
    <header className='flex justify-between'>
      <a href='/' onMouseEnter={handleMouseEnter} onMouseOut={handleMouseOut} className='headerLink hover-link headerLink-content text-7xl ml-6 mt-6 font-bold' style={{
        backgroundPositionX: hovered ? `${position.x}px` : '50%',
        backgroundPositionY: hovered ? `${position.y}px` : '50%',
      }}>Nacamino<span
      className={`circle ${show ? 'show' : ''}`} 
      style={{ top: position.top, left: position.left }}>
        </span></a>
      
      <nav className='flex justify-end'>
        <div className='flex w-24 h-24 mr-6 mt-6'>
          <button
            className={`bg-white w-24 h-24 rounded-full text-5xl aboutButtons text-white ${isOpen ? 'rotate w-9 h-9 mt-5 mr-5' : ''}`}
            onClick={toggleMenu}
          >
            <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
          </button>
        </div>
        <div className={`menu-bubble content-center ${isOpen ? 'show' : ''}`}>
          <ul className="menuItems flex flex-col items-center justify-center">
            <li>Proyectos seleccionados</li>
            <li>¡Contáctame!</li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
