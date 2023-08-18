import "./App.css";
import React from "react";
import Home from "./pages/home/Home";
import Skills from "./pages/skills/Skills";
import Contact from "./pages/contact/Contact";
import About from "./pages/about/About";

const App: React.FC = () => {
    return (
        <div className="app">
            <Home />
            <About />
            <Skills />
            <Contact />
        </div>
    );
};

export default App;