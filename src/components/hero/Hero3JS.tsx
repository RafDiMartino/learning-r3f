import React, { useRef } from 'react'
import classes from "./Hero3JS.module.css"
import { Canvas } from '@react-three/fiber'
import { Experience } from './Experience'
import * as THREE from "three"

export const Hero3JS = () => {

  return (
    <Canvas
      // orthographic
      // flat ~ no tone mapping
      dpr={ [1, 2] } // clumping pixel ratio
      gl={{
        antialias: true,
        toneMapping: THREE.ACESFilmicToneMapping,
        // outputEncoding: THREE.LinearEncoding
      }}
      camera={{
        // zoom: 100,
        fov: 45,
        near: 0.1,
        far: 200,
        position: [3, 2, 6]
      }}
    >
      <Experience />
    </Canvas>
  )
}
