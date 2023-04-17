import React from 'react'
import { Canvas } from '@react-three/fiber'
import PortalExperience from './PortalExperience'
// import * as THREE from "three"
// import { Leva } from 'leva'

export const Portal = () => {

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
      // shadows
      flat // flatten toneMapping
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        // position: [ - 4, 3, 6]
        position: [ 1, 2, 6 ]
      }}
      // onCreated={created}
    >
      <color args={ [ '#030202' ] } attach='background' />
      <PortalExperience />
    </Canvas>
  </>

  )
}

