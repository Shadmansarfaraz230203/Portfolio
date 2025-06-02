import React from "react";
import photoJpg from "../../assets/photo.jpg"; // Replace with your actual image path

const About = () => {
  return (
    <section id="about" className="bg-#171d32 py-16 px-6 md:px-12">
    <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white">About Me</h2>
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
      
        
        {/* About Text */}
        <div className="w-full md:w-2/3 text-center md:text-left">
          
          <p className="text-white text-lg leading-relaxed">
            I'm <span className="font-semibold text-[#465697]">Shadman Sarfaraz</span>, a passionate and dedicated
            <strong> Full-Stack Web Developer</strong> with a strong foundation in HTML, CSS, JavaScript, React.js, Node.js, MongoDB, and Express.js.
            
            <br /><br />
             As a fresher, I’m driven by curiosity and a desire to build meaningful, user-friendly web applications. I enjoy learning new technologies, solving real-world problems through code, and continuously improving my skills.
            <br /><br />
             I’ve worked on several personal and academic projects that reflect my ability to handle both frontend and backend tasks. I’m committed to writing clean, efficient, and scalable code.
            <br /><br />
             I'm currently seeking opportunities to join a dynamic team where I can contribute, grow, and kickstart my journey as a professional developer.
          </p>
        </div>

        {/* Profile Image */}
        <div 
        className="w-full md:w-1/4 flex justify-center">
          <img
            src={photoJpg}
            alt="Profile"
            // className="rounded-xl  w-3/5 "
            className="w-full h-full rounded"
          />
        </div>



      </div>
    </section>
  );
};

export default About;
