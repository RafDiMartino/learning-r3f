import { extend, useFrame, useThree, ReactThreeFiber } from '@react-three/fiber'
import React, { useRef } from 'react'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

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
            <group ref={groupRef}>
                <mesh position-x={-2} scale={ 1 }>
                    {/* <sphereGeometry args={ [ 1.5, 32, 32 ] }/> //radius, widthSegments, heightSegment */}
                    <sphereGeometry />
                    <meshBasicMaterial color="orange" wireframe={false} />
                </mesh>

                <mesh ref={ cubeRef } rotation-y={Math.PI * 0.25} position-x={2} scale={1.5}>
                    <boxGeometry  />
                    <meshBasicMaterial color="purple" wireframe={false} />
                </mesh>
            </group>

            <mesh position-y={-1} rotation-x={- Math.PI * 0.5} scale={10}>
                <planeGeometry />
                <meshBasicMaterial color="greenyellow" wireframe={false} />
            </mesh>
        </>
    )
}
