
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';
import ContactForm from './components/ContactForm/ContactForm';
import HeroS from './components/Hero/HeroS';
import SideNavbar from './components/SideNavbar/SideNavbar';
import ChatBot from './components/Chatbot/ChatBot';


function App() {
  return (
    <div className="font-sans text-gray-900 ">
      <Navbar />
      <SideNavbar/>
      <HeroS id="home"/>
      <div className="app-shell">
        <About id="about"/>
        <Skills id="skills"/>
        <Projects id="projects"/>
        <ContactForm id="contact"/>
        <ChatBot/>
        <Footer />
      </div>
    </div>
  
  );
}

export default App;
