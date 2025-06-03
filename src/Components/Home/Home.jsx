import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import gitIcon from "../../assets/github-icon.jpg";

import TextChange from "../TextChange";
const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-#171d32 px-6 pt-20">
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          <TextChange/>
        </h1>
        <p className="text-xl md:text-2xl  text-white font-medium mb-6">
          A Full-Stack Web Developer 
        </p>
        <p className="text-white text-lg leading-relaxed">
         Passionate Full-Stack Developer skilled in building modern web applications using React.js and Node.js . I love turning ideas into real-world solutions and continuously expanding my skill set in web development.
        </p>
        <div class="py-5 px-3 flex flex-wrap gap-6 justify-center items-center aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
        <a
          href="#projects"
          className=" min-w-40 text-white border-2 border-light/40 px-6 py-3 rounded-full text-lg font-semibold rounded-full shadow hover:border-primary transition-all duration-300 transform hover:scale-105 bg-[#465697]"
        >
          Projects
        </a>
        <a
          href="#contact"
          className=" min-w-40 text-white border-2 border-light/40 px-6 py-3 rounded-full text-lg font-semibold rounded-full shadow hover:border-primary transition-all duration-300 transform hover:scale-105 bg-[#465697]"
        >
          Contact Me 
        </a>
        </div>
        {/* Social Icons */}

        <div className="flex justify-center items-center gap-6 mt-8 aos-init aos-animate" data-aos="fade-up" data-aos-delay="400">
          <a
            href="https://github.com/Shadmansarfaraz230203"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-black rounded-full shadow hover:scale-110 transition border"
          >
            <img
              src={gitIcon}
             //src="https://cdn.creazilla.com/icons/7915997/github-icon-size_256.png"
              alt="GitHub"
              className="h-12 w-12"
            />
          </a>

          <a
            href="https://www.linkedin.com/in/shadman-sarfaraz-35063a214/"
            target="_blank"
            className="p-3 bg-black rounded-full shadow hover:scale-110 transition border"
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdsSyqBoGEYyiC4f9Sz3JfWov-OsPUDwxsmw&s"
              alt="LinkedIn"
              className=" w-12 h-12 "
            />
          </a>
        </div>
        
       <div class=" text-white flex flex-wrap justify-center gap-3 !mt-12 text-light/60 aos-init aos-animate " data-aos="fade-up" data-aos-delay="500" data-aos-offset="10">
         <span class="rounded-full bg-light/10 px-4 py-2 border">Node</span>
         <span class="rounded-full bg-light/10 px-4 py-2 border">Express</span>
         <span class="rounded-full bg-light/10 px-4 py-2 border">React</span>
         <span class="rounded-full bg-light/10 px-4 py-2 border">Next</span>
         <span class="rounded-full bg-light/10 px-4 py-2 border">MongoDB</span>
         </div>
      
      </div>
    </section>
  );
};

export default Home;


