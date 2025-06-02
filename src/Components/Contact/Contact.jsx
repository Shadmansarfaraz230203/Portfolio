import React from "react";
import { Mail, Linkedin } from "lucide-react";

const Contact = () => {
  return (
     <section id="contact" className="bg-[#171d32] py-16 px-6 md:px-12">
      <div className="max-w-4xl mx-auto text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Contact Me</h2>

        <p className="mb-10 text-lg">
          Get in Touch
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6">
          {/* Email Button */}
          <a
            href="mailto:shadmansarfaraz230203@gmail.com"
            className="flex items-center justify-center gap-4 bg-[#465697] text-white px-6 py-3 hover:scale-105 rounded-lg shadow hover:bg-grey-700 transition"
          >
            <Mail className="w-5 h-5" />
            shadmansarfaraz230203@gmail.com
          </a>

          {/* LinkedIn Button */}
          <a
            href="https://www.linkedin.com/in/shadman-sarfaraz-35063a214/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-4 bg-[#465697] text-white px-6 py-3 hover:scale-105 rounded-lg shadow hover:bg-grey-600 transition"
          >
            <Linkedin className="w-5 h-5" />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;