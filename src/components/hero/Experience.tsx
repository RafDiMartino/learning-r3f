import { useFrame } from '@react-three/fiber'
import React, { useRef } from 'react'

export const Experience = () => {

    const cubeRef: any = useRef()
    const groupRef: any = useRef()

    useFrame((state, delta) => {
        cubeRef.current.rotation.y += delta;
        // groupRef.current.rotation.y += delta;
    })
    
    return (
        <>
            <group ref={groupRef}>
                <mesh position-x={-2}>
                    {/* <sphereGeometry args={ [ 1.5, 32, 32 ] }/> //radius, widthSegments, heightSegment */}
                    <sphereGeometry />
                    <meshBasicMaterial color="orange" wireframe={false} />
                </mesh>

                <mesh ref={ cubeRef } rotation-y={Math.PI * 0.25} position-x={2} scale={1.5}>
                    <boxGeometry scale={1.5} />
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
