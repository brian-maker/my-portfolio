import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = isOpen ? 'auto' : 'hidden';
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="container mx-auto px-4 flex justify-between items-center h-16">
        <Link to="/" className="text-xl font-bold">
          MyLogo
        </Link>
        <div className="hidden md:flex space-x-6">
          <NavLink to="/" exact activeClassName="text-blue-500" className="hover:text-blue-500">
            Home
          </NavLink>
          <NavLink to="/about" activeClassName="text-blue-500" className="hover:text-blue-500">
            About
          </NavLink>
          <NavLink to="/services" activeClassName="text-blue-500" className="hover:text-blue-500">
            Services
          </NavLink>
          <NavLink to="/contact" activeClassName="text-blue-500" className="hover:text-blue-500">
            Contact
          </NavLink>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={toggleMenu}
      />
      <div
        className={`fixed top-0 left-0 w-64 bg-white shadow-md h-full transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="flex flex-col p-4 space-y-6">
          <NavLink to="/" exact activeClassName="text-blue-500" className="hover:text-blue-500" onClick={toggleMenu}>
            Home
          </NavLink>
          <NavLink to="/about" activeClassName="text-blue-500" className="hover:text-blue-500" onClick={toggleMenu}>
            About
          </NavLink>
          <NavLink to="/services" activeClassName="text-blue-500" className="hover:text-blue-500" onClick={toggleMenu}>
            Services
          </NavLink>
          <NavLink to="/contact" activeClassName="text-blue-500" className="hover:text-blue-500" onClick={toggleMenu}>
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
