import React from "react"
import photoJpg from "../../assets/photo.jpg";
import TextChange from "../TextChange";
const Home = () => {
  return (
    <div id="Home" className="text-white flex w-full justify-between items-start p-10 md:p-20">
      <div className="md:w-2/4 md:pt-10">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold ">
          <TextChange/>
          </h1>

          <p class="text-light/80 text-xl md:text-2xl font-medium pt-5 pb-5">
            Full-Stack Web Developer 
          </p>
          
          <p className="text-white text-lg leading-relaxed">
          Passionate Full-Stack Developer skilled in building modern web applications using React.js and Node.js . I love turning ideas into real-world solutions and continuously expanding my skill set in web development.
          </p>

         <div class="py-5 px-3 flex flex-wrap gap-6 justify-center items-center aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
           <a href="#Projects" class="min-w-40 border-2 border-light/40 px-12 py-3 text-light font-semibold rounded-full hover:border-primary transition-all duration-300 transform hover:scale-105 bg-[#465697]">
           Projects
           </a>
           <a href="#Contact" class="min-w-40 border-2 border-light/40 px-10 py-3 text-light font-semibold rounded-full hover:border-primary transition-all duration-300 transform hover:scale-105 bg-[#465697]">
           Contact Me
           </a>
        </div>


        <div class="flex flex-wrap justify-center gap-3 !mt-12 text-light/60 aos-init aos-animate " data-aos="fade-up" data-aos-delay="500" data-aos-offset="10">
        <span class="rounded-full bg-light/10 px-4 py-2 border">Node</span>
        <span class="rounded-full bg-light/10 px-4 py-2 border">Express</span>
        <span class="rounded-full bg-light/10 px-4 py-2 border">React</span>
        <span class="rounded-full bg-light/10 px-4 py-2 border">Next</span>
        <span class="rounded-full bg-light/10 px-4 py-2 border">MongoDB</span>
        </div>

      </div>
      <div>
        <img className="w-3/5" src={photoJpg} alt="" />
      </div>
    </div>
  );
};

export default Home;
