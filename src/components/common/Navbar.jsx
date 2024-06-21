import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import { motion } from 'framer-motion'
import AOS from 'aos';
import 'aos/dist/aos.css';


const svgVariants = {
  initial:{rotate:-180},
  animate:{
    rotate: 0,
    transition:{duration:2}
  }
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = isOpen ? 'auto' : 'hidden';
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="container lg:max-w-7xl mx-auto px-4 flex justify-between items-center h-16 flex-row-reverse md:flex-row">
        <Link to="/" className="text-xl font-bold">
        <motion.svg
        variants={svgVariants}
        initial="initial"
        animate="animate"
        xmlns="http://www.w3.org/2000/svg" width="61" height="32"><path 
        fill="#33323D" fillRule="evenodd" d="M60.082 5.878L44.408 32 28.735 5.878h31.347zM15.673 0l15.674 26.122H0L15.673 0z"/></motion.svg>
        </Link>
        <div className="hidden md:flex space-x-6">
          <NavLink to="/" exact="true"  className="text-black font-bold hover:text-yellow text-xl font-mono tracking-wide transition-all duration-200">
            Home
          </NavLink>
          <NavLink to="/Portfolio" exact="true" className="text-black font-bold hover:text-yellow text-xl font-mono tracking-wide transition-all duration-200">
          Portfolio
          </NavLink>
          
          <NavLink to="/contact" exact="true"  className="text-black font-bold hover:text-yellow text-xl font-mono tracking-wide transition-all duration-200">
            contact
          </NavLink>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      <div
        className={`fixed inset-0 bg-black bg-opacity-70 transition-opacity md:opacity-0 duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={toggleMenu}
      />
      <div
        className={`fixed top-0 left-0 w-64 bg-white shadow-md h-full transform transition-transform duration-300 md:hidden ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="flex flex-col p-4 space-y-6">
          <NavLink to="/" exact="true" className="text-black font-semibold hover:text-yellow text-xl font-mono tracking-wide transition-all duration-200" onClick={toggleMenu}>
            Home
          </NavLink>
          <NavLink to="/Portfolio" exact="true" className="text-black font-semibold hover:text-yellow text-xl font-mono tracking-wide transition-all duration-200" onClick={toggleMenu}>
            Portfolio
          </NavLink>
         
          <NavLink  to="/contact" exact="true" className="text-black font-semibold hover:text-yellow text-xl font-mono tracking-wide transition-all duration-200"onClick={toggleMenu}>
            contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
