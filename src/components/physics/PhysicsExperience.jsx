import { OrbitControls } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import { BallCollider, CuboidCollider, Debug, RigidBody, Physics } from '@react-three/rapier'
import { useRef } from 'react'


export default function PhysicsExperience() {

    const cube = useRef()

    const cubeJump = () => {
        cube.current.applyImpulse({x: 0, y: 5, z: 0})
        cube.current.applyTorqueImpulse({x: Math.random() -0.5, y: Math.random() -0.5, z: Math.random() -0.5})
    }

    return <>

        <Perf position="top-left" />

        <OrbitControls makeDefault />

        <directionalLight castShadow position={[1, 2, 3]} intensity={1.5} />
        <ambientLight intensity={0.5} />

        <Physics>
            <Debug />

            <RigidBody colliders="ball">
                <mesh castShadow position={[-1.5, 2, 0]}>
                    <sphereGeometry />
                    <meshStandardMaterial color="orange" />
                </mesh>
            </RigidBody>

            <RigidBody ref={cube} position={[1.5, 2, 0]}>
                <mesh castShadow onClick={cubeJump}>
                    <boxGeometry />
                    <meshStandardMaterial color="mediumpurple" />
                </mesh>
            </RigidBody>

            {/* <RigidBody colliders={false} position={[0, 1, 0]} rotation={[Math.PI * 0.5, 0, 0]}>
                <CuboidCollider args={[1.5,1.5,0.5]}/>
                <CuboidCollider args={[0.25,1,0.25]} position={[0,0,1]} rotation={[-Math.PI * 0.35, 0, 0]}/>
                <BallCollider args={[1.5]}/>
                <mesh castShadow >
                    <torusGeometry args={[1, 0.5, 16, 32]}/>
                    <meshStandardMaterial color='mediumpurple' />
                </mesh>
            </RigidBody> */}

            <RigidBody type='fixed'>
                <mesh receiveShadow position-y={- 1.25}>
                    <boxGeometry args={[10, 0.5, 10]} />
                    <meshStandardMaterial color="greenyellow" />
                </mesh>
            </RigidBody>

        </Physics>
    </>
}