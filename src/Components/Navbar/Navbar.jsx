import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // or use any icons you prefer

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = ["Home", "About", "Skills", "Projects", "Education","Certificates" ,"Contact"];

  return (
    <nav className="bg-[#171d32] text-white fixed top-0 left-0 w-full z-50 shadow">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl font-bold">Shadman Sarfaraz</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-7">
          {navLinks.map((link) => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`} className="hover:text-blue-400 transition">
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <ul className="md:hidden bg-[#171d32] px-4 pb-4 space-y-4">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="block text-white hover:text-blue-400 transition"
                onClick={() => setIsOpen(false)} // close menu on click
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;

