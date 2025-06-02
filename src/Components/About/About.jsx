import React from 'react'

const About = () => {
  return (
    <section id="About" className="bg-#171d32 py-16 px-6 md:px-12">
      <div id="about" className=" max-w-4xl mx-auto text-center">
        <h2 className="text-white text-3xl md:text-4xl font-bold lg:text-5xl">
        About Me
        </h2>

        <p className="text-white text-lg leading-relaxed">
          I'm <span className="font-semibold text-[#465697]">Shadman Sarfaraz</span>, a passionate and dedicated <strong>Full-Stack Web Developer</strong> with a strong foundation in HTML, CSS, JavaScript, React.js, Node.js, MongoDB, and Express.js.
          
          <br /><br />
         As a fresher, I’m driven by curiosity and a desire to build meaningful, user-friendly web applications. I enjoy learning new technologies, solving real-world problems through code, and continuously improving my skills.
         <br /><br />
         I’ve worked on several personal and academic projects that reflect my ability to handle both frontend and backend tasks. Whether it's designing intuitive user interfaces or building robust server-side logic, I’m committed to writing clean, efficient, and scalable code.
         <br /><br />
          I'm currently seeking opportunities to join a dynamic team where I can contribute, grow, and kickstart my journey as a professional developer.
        </p>
      </div>
    </section>
  );
};

export default About;
