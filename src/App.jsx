import About from "./Components/About/About";
import Certificates from "./Components/Certificates/Certificates";
import Education from "./Components/Education/Education";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/Skills/Skills";
import Contact from "./Components/Contact/Contact";


function App() {
  return(
    <div className="bg-[#171d32] h-auto w-full overflow-hidden">1
    <Navbar/>
    <Home/>
    <About/>
    <Skills/>
    <Projects/>
    <Education/>
    <Certificates/>
    <Contact/>

  </div>
  ) ;  
};

export default App;
