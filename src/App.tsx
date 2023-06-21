import "./App.css";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Island } from "./models/low-poly-island/Island";
import { Suspense } from "react";
import * as THREE from "three";

function App() {

  const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 50, 100 );

  return (
    <div className="app">
      <Canvas camera={{fov: 18, position: 100}}>
        <ambientLight intensity={1.25} />
        <Suspense fallback={null}>
          <Island />
        </Suspense>
        <Environment preset="sunset" />
        <OrbitControls enableZoom={false} autoRotate={true} autoRotateSpeed={-1} />
      </Canvas>
    </div>
  );
}
 
export default App;