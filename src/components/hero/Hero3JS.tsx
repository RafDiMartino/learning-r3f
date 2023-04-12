import React from 'react'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience'
// import * as THREE from "three"
// import { Leva } from 'leva'

export const Hero3JS = () => {

  // const created = ({gl}: any) => {
  //   gl.setClearColor("#ff0000", .5)
  // }

  // const created = ({scene}: any) => {
  //   scene.background = new THREE.Color('#ff0000')
  // }


  return (
  
  <>
    {/* <Leva collapsed/> */}
    <Canvas
      shadows
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        // position: [ - 4, 3, 6]
        position: [ 4, - 2, 6 ]
      }}
      // onCreated={created}
    >
      <color args={ [ 'black' ] } attach='background' />
      <Experience />
    </Canvas>
  </>

  )
}
