import React from 'react';
import './Components/Style.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from './Components/Header11';
import AboutMe from './Components/Aboutme';
import Skills from './Components/Skills'
import Education from './Components/Education';
import Projects from './Components/Projects';
import Footer from './Components/Footer';
import './App.css';
import './Education.css'
import ContactForm from './Components/ContactForm';
import './Components/Skills.css'


function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <AboutMe />
        <Skills/>
       <Projects />
       <Education/>
      <ContactForm />
      </main>
     <Footer />
    </div>
  );
}

export default App;
