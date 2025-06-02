import React from "react";
import javaCert from "../../assets/TrainingCertificates.jpg";
import jarvisCert from "../../assets/JarvisCertificate.jpg";
import excellenceCert from "../../assets/AcademicExcellence.jpg";
const certificates = [
  {
    title: "Java Full Stack Development",
    description: "Certified in Java Full Stack Development, covering frontend, backend, and database integration.",
    image : javaCert,
  },
  {
    title: "1st Prize - J.A.R.V.I.S Project",
    description: "Won 1st prize at a national-level inter-college competition for creating a voice assistant desktop app.",
    image:jarvisCert,
  },
  {
    title: "Academic Excellence",
    description: "Awarded for academic excellence and contributions as a CSI Student Chapter member.",
    image: excellenceCert,
  },
];

const Certificates = () => {
  return (
    <section id="certificates" className="bg-[#171d32] py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">Certificates</h2>
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 ">
          {certificates.map((cert, index) => (
            <div key={index} className="bg-gray-800/50 rounded-lg overflow-hidden shadow-md border border-gray-300 shadow-md hover:shadow-xl hover:scale-105 transition-transform">
              <img src={cert.image} alt={cert.title} className="p-4 w-full h-48 object-contain" />
              <div className="p-4 text-left">
                <h3 className="text-lg font-semibold text-white mb-1">{cert.title}</h3>
                <p className="text-white text-sm">{cert.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
