import React from 'react'
import { Canvas } from '@react-three/fiber'
import PhysicsExperience from './PhysicsExperience'

export const Physic = () => {
  return (
  
  <>
    <Canvas
        shadows
        camera={ {
            fov: 45,
            near: 0.1,
            far: 200,
            position: [ 4, 2, 6 ]
        } }
    >
        <PhysicsExperience />
    </Canvas>
  </>

  )
}