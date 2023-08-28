import './App.css';
import React, { useEffect, useState } from 'react';
import Home from './pages/home/Home';
import Skills from './pages/skills/Skills';
import Contact from './pages/contact/Contact';
import About from './pages/about/About';
import Nav from './pages/nav/Nav';

const App: React.FC = () => {
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const sections = ['home', 'about', 'skills', 'contact'];
    
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { rootMargin: '-50% 0px -50% 0px' } // Adjust rootMargin as needed
        );
    
        sections.forEach((section) => {
            const target = document.getElementById(section);
            if (target) {
                observer.observe(target);
            }
        });
    
        return () => {
            sections.forEach((section) => {
                const target = document.getElementById(section);
                if (target) {
                    observer.unobserve(target);
                }
            });
        };
    }, []);
    
    return (
        <main className='app'>
            <Nav activeSection={activeSection} />
            <Home />
            <About />
            <Skills />
            <Contact />
        </main>
    );
};

export default App;