import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';

function App() {
  return (
    <div className="App">
      <Header />
      <main id="main">
        <div className="layout-container">
          <Hero />
          <About />
          <Skills />
          <Resume />
          <Portfolio />
          <Services />
          <Contact />
        </div>
        <ScrollToTopButton />
        <Footer />
      </main>
    </div>
  );
}

export default App;
