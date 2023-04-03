import React, { useRef } from 'react'
import classes from "./Hero3JS.module.css"
import { Canvas } from '@react-three/fiber'
import { Experience } from './Experience'

export const Hero3JS = () => {
  
  return (
    <Canvas>
      <Experience />
    </Canvas>
  )
}
