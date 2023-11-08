
import './app.scss';
import Contact from './components/contact/Contact';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import Parallax from './components/parallax/Parallax';
import Portfolio from './components/portfolio/Portfolio';
import AboutMe from './components/aboutme/AboutMe';

const App = () => {
  return (
    <div>
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="AboutMe">
        <Parallax type="aboutMe" />
      </section>
      <section>
        <AboutMe />
      </section>

      <section id="Projects">
        <Parallax type="Projects" />
      </section>
      <Portfolio/>
      <section id="Contact">
        <Contact/>
      </section>
    </div>
  );
};
export default App