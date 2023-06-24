import "./App.css";
import React, { useEffect } from "react";
import Home from "./pages/home/Home";
import Skills from "./pages/skills/Skills";
import Contact from "./pages/contact/Contact";
import About from "./pages/about/About";

const App: React.FC = () => {
  useEffect(() => {
    function scrollHandler(e: Event) {
      const target = e.target as HTMLElement;
      const atSnappingPoint = target.scrollTop % target.offsetHeight === 0;
      const timeOut = atSnappingPoint ? 0 : 150;

      const topCircle = document.querySelector('.top-circle') as HTMLElement;
      const topOutline = document.querySelector('.top-outline') as HTMLElement;
      const bottomCircle = document.querySelector('.bottom-circle') as HTMLElement;
      const bottomOutline = document.querySelector('.bottom-outline') as HTMLElement;

      if (target.hasOwnProperty('scrollTimeout')) {
        clearTimeout((target as any).scrollTimeout);
      }

      (target as any).scrollTimeout = setTimeout(() => {
        //using the timeOut to evaluate scrolling state
        if (!timeOut) {
          console.log('Scroller snapped!');
          if (bottomCircle.classList.contains('home-bottom-circle')) {
            topCircle.classList.remove('home-top-circle');
            topCircle.classList.add('about-top-circle');
            topOutline.classList.remove('home-top-outline');
            topOutline.classList.add('about-top-outline');

            bottomCircle.classList.remove('home-bottom-circle');
            bottomCircle.classList.add('about-bottom-circle');
            bottomOutline.classList.remove('home-bottom-outline');
            bottomOutline.classList.add('about-bottom-outline');
          } else {
            topCircle.classList.remove('about-top-circle');
            topCircle.classList.add('home-top-circle');
            topOutline.classList.remove('about-top-outline');
            topOutline.classList.add('home-top-outline');

            bottomCircle.classList.remove('about-bottom-circle');
            bottomCircle.classList.add('home-bottom-circle');
            bottomOutline.classList.remove('about-bottom-outline');
            bottomOutline.classList.add('home-bottom-outline');
          }

        } else {
          console.log('User stopped scrolling.');
        }
      }, timeOut);
    }

    const app = document.querySelector('.app') as HTMLElement;
    app.addEventListener('scroll', scrollHandler);
  });

  return (
    <div className="app">
      <div className='top-circle home-top-circle'></div>
      <div className='top-outline home-top-outline'></div>
      <div className='bottom-circle home-bottom-circle'></div>
      <div className='bottom-outline home-bottom-outline'></div>
      <Home />
      <About />
      <Skills />
      <Contact />
    </div>
  );
};

export default App;