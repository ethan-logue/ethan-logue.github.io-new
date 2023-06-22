import "./App.css";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Island } from "./models/low-poly-island/Island";
import { Suspense } from "react";
import * as THREE from "three";
import Home from "./pages/home/Home";
import Skills from "./pages/skills/Skills";
import Contact from "./pages/contact/Contact";

function App() {
  return (
    <div className="app">
      {/* <Canvas camera={{fov: 18, position: 100}}>
        <ambientLight intensity={1.25} />
        <Suspense fallback={null}>
          <Island />
        </Suspense>
        <Environment preset="sunset" />
        <OrbitControls enableZoom={false} autoRotate={true} autoRotateSpeed={-1} />
      </Canvas> */}
      <Home />
      <Skills />
      <Contact />
    </div>
  );
}
 
export default App;