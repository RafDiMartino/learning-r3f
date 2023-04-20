import React from 'react'
import { Canvas } from '@react-three/fiber'
import GameExperience from './GameExperience'

export const Game = () => {

  return (
  
  <>
    <Canvas
        shadows
        camera={ {
            fov: 45,
            near: 0.1,
            far: 200,
            position: [ 2.5, 4, 6 ]
        } }
    >
        <GameExperience />
    </Canvas>
  </>

  )
}