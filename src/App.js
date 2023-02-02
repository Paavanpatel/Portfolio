import React from "react";
import Aboutme from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import ContactMe from "./components/ContactMe/ContactMe";
import "./App.css";

function App() {
  return (
    <div>
      <Navigation />
      <Aboutme />
      <Skills />
      <Projects />
      <ContactMe />
    </div>
  );
}

export default App;
