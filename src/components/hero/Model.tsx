import { useGLTF, Clone } from '@react-three/drei'
import React from 'react'
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
// import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'
// import { useLoader } from '@react-three/fiber'

export default function Model() {

    // const model = useLoader(GLTFLoader, '/hamburger.glb')

    // const model = useLoader(
    //     GLTFLoader,
    //     '/hamburger.glb',
    //     (loader) => {

    //         const dracoLoader = new DRACOLoader()
    //         dracoLoader.setDecoderPath('/draco/')
    //         loader.setDRACOLoader(dracoLoader)
    //     }
    // )

    const model = useGLTF('/hamburger.glb')

    return (
        // <primitive object={ model.scene } scale={ 0.35 } />
        <>
            {/* <Clone object={model.scene} scale={0.35} position-x={-4}/>
            <Clone object={model.scene} scale={0.35} position-x={0}/> */}
            <Clone object={model.scene} scale={0.35} position-x={4}/>
        </>
    )
}

useGLTF.preload('/hamburger.glb')