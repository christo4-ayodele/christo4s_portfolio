import About from './sections/About.jsx';
import Hero from './sections/Hero.jsx';
import Navbar from './sections/Navbar.jsx';
import Projects from './sections/Projects.jsx';
import Clients from './sections/Clients.jsx';
import Contact from './sections/Contact.jsx';
import Footer from './sections/Footer.jsx';
import Experience from './sections/Experience.jsx';
const App = () => {
  return (
    <main className="max-w-7xl mx-auto" id="home">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Clients />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
