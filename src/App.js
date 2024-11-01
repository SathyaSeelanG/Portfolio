// import "./App.css";
// import Home from "./pages/Home";
// import ReactGA from 'react-ga';
// import React, { useEffect } from 'react'

// function App() {
//   useEffect(() => {
//     ReactGA.initialize('G-SW2KGM0L12');
//     ReactGA.pageview(window.location.pathname + window.location.search)
//   }, []);
//   return (
//     <Home />
//   );
// }

// export default App;
// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home'; // Adjust path based on your structure
// import Projects from './pages/Projects';
import ProjectCard from './pages/projects';

const App = () => {
  return (
    <Router>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectCard />} />
      </Routes>
    </Router>

  );
};

export default App;
