import "./App.css";
import React from "react";
import Home from "./pages/home/Home";
import Skills from "./pages/skills/Skills";
import Contact from "./pages/contact/Contact";

const App: React.FC = () => {
  return (
    <div className="app">
      <Home />
      <Skills />
      <Contact />
    </div>
  );
}
 
export default App;