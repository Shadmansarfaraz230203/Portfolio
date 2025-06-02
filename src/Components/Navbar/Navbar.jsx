
import React, { useState } from "react"
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";


const Navbar = () => {
    const [menu,openMenu] = useState(false);
    const [ showMenu , setShowmenu] = useState(true);

  return (
    <nav className='flex justify-between items-center text-white px-4 border-b h-12 '>
      <span className="text-xl  font-bold tracking-wide">Shadman Sarfaraz</span>

      <ul className="flex space-x-8 text-grey-300">

      <li >
        <a href="#Home" className=" hover:text-primary transition-colors">
        Home
        </a>
      </li>
      <li > 
        <a href="#About" className=" hover:text-primary transition-colors">
        About
        </a>
      </li> 
      <li > 
        <a href="#Skills" className=" hover:text-primary transition-colors" >
        Skills
        </a>
      </li> 
      <li >
        <a href="#Projects" className=" hover:text-primary transition-colors">
        Projects
        </a>
      </li>  
      <li>
        <a href="#Education" className="hover:text-primary transition-colors">
        Education
        </a>
      </li>
      <li>  
        <a href="#Certificates" className="hover:text-primary transition-colors">
        Certificates
        </a>
      </li>
      <li>
        <a href="#Contact" className="hover:text-primary transition-colors">
        Contact
        </a>
      </li>    

      </ul>
      {showMenu ? (
        <RiMenu2Line 
        size={30} 
        className="md:hidden absolute right-10 top-6 transition-all duration-300 " 
        onClick={() => {
            openMenu(!menu);
            setShowmenu(!showMenu);
        }} 
        />
      ) : (
    <RiCloseLine 
      size={30} 
      className="md:hidden absolute right-10 top-6 transition-all duration-300"
      />
      )}
    </nav>
  );
};

export default Navbar;
