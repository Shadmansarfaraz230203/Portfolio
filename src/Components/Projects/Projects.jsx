import React from "react";
import { Github } from "lucide-react";

const projects = [
  {
    name: "Blood Bank App",
    description:
      "Designed and developed a responsive blood bank app using React.js. Shows real-time info on blood group availability, hospitals, and inventory.",
    techStack: ["HTML", "CSS", "React.js"],
    link: "#", // Replace with GitHub or live link
  },
  {
    name: "J.A.R.V.I.S - Desktop Voice Assistant",
    description:
      "A desktop assistant using HTML, CSS, and JavaScript with offline speech recognition (Vosk). Features include email/WhatsApp, weather, apps, music, and more.",
    techStack: ["HTML", "CSS", "JavaScript"],
    link: "#",
  },
  {
    name: "E-Commerce Website",
    description:
      "Amazon-inspired React.js shopping site with product listings and cart. Includes performance boosts like lazy loading and code splitting.",
    techStack: ["HTML", "CSS", "JavaScript", "React.js"],
    link: "https://github.com/Shadmansarfaraz230203/AMAZON-WEBSITE",
  },
  {
    name: "Online Booking App",
    description:
      "Hotel booking app with search and reservation features. Enhanced UX through DOM optimization and faster load times.",
    techStack: ["HTML", "CSS", "JavaScript"],
    link: "#",
  },
];

const Projects = () => {
  return (
    <section id="Projects" className="bg-[#171d32] py-16 px-6 md:px-12">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">
          My Projects
        </h2>
        <div className="grid gap-10 md:grid-cols-2 ">
          {projects.map((project) => (
            <div
              key={project.name}
              className="bg-gray-800/50 border rounded-lg shadow-md p-6 text-left shadow-xl transition-transform "
            >
              <h3 className="text-xl font-semibold text-white mb-2">
                {project.name}
              </h3>
              <p className="text-white mb-3">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-sm bg-gray-200 text-gray-800 px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {project.link !== "#" && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:underline font-medium"
                >
                  <Github className="w-4 h-4 mr-1" />
                  View Project
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
