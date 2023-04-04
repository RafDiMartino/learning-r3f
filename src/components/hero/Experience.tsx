import { extend, useFrame, useThree, ReactThreeFiber } from '@react-three/fiber'
import React, { useRef } from 'react'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { CustomObject } from './CustomObject'
import * as THREE from "three"


extend({ OrbitControls })

declare global {
    namespace JSX {
      interface IntrinsicElements {
        'orbitControls': ReactThreeFiber.Object3DNode<OrbitControls, typeof OrbitControls>;
      }
    }
}

export const Experience = () => {
    
    const { camera, gl} = useThree()

    const cubeRef: any = useRef()
    const groupRef: any = useRef()

    useFrame((state, delta) => {
        cubeRef.current.rotation.y += delta;
        // groupRef.current.rotation.y += delta;
    })
    
    return (
        <>
            <orbitControls args={ [ camera, gl.domElement ] }/>
            
            <directionalLight position={ [ 1, 2, 3 ] } intensity={ 1.5 }/>

            <ambientLight intensity={ 0.5 } />

            <group ref={groupRef}>
                <mesh position-x={-2} scale={ 1 }>
                    {/* <sphereGeometry args={ [ 1.5, 32, 32 ] }/> //radius, widthSegments, heightSegment */}
                    <sphereGeometry />
                    <meshStandardMaterial color="orange" wireframe={false} />
                </mesh>

                <mesh ref={ cubeRef } rotation-y={Math.PI * 0.25} position-x={2} scale={1.5}>
                    <boxGeometry  />
                    <meshStandardMaterial color="purple" wireframe={false} />
                </mesh>
            </group>

            <mesh position-y={-1} rotation-x={- Math.PI * 0.5} scale={10}>
                <planeGeometry />
                <meshStandardMaterial color="greenyellow" wireframe={false} side={THREE.DoubleSide} />
            </mesh>

            <CustomObject />
        </>
    )
}
