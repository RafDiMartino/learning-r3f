import React from 'react'
import { Canvas } from '@react-three/fiber'
import PortfolioExperience from './PortfolioExperience'

export const Portfolio = () => {

  return (
  
  <>

    <Canvas
      camera={{
        fov: 45,
        near: 0.1,
        far: 2000,
        position: [ -3, 1.5, 4 ]
      }}
      // onCreated={created}
    >
      <color args={ [ '#030202' ] } attach='background' />
      <PortfolioExperience />
    </Canvas>
  </>

  )
}