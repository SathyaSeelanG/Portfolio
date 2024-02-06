import "./App.css";
import Home from "./pages/Home";
import ReactGA from 'react-ga';
import React, {useEffect} from 'react'

function App() {
  useEffect(() => {
    ReactGA.initialize('G-SW2KGM0L12');
    ReactGA.pageview(window.location.pathname + window.location.search)
    },[]);
  return (
      <Home />
  );
}

export default App;
