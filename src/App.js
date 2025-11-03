import { useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';

import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import ContactForm from './components/ContactForm/ContactForm';
import HeroS from './components/Hero/HeroS';
import SideNavbar from './components/SideNavbar/SideNavbar';

function App() {
    useEffect(() => {
    document.body.style.zoom = "90%"; // مثلاً
  }, []);
  return (
    <div className="font-sans text-gray-900 ">
      
      <Navbar />
      <SideNavbar/>
      
      <HeroS id="home"/>
      
     
      <About id="about"/>
      <Skills id="skills"/>
      <Projects id="projects"/>
      <Contact id="contact"/> 
      <ContactForm />
      <Footer />
      
     
    </div>
  );
}

export default App;
