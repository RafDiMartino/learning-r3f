import { shaderMaterial, Sparkles, useGLTF, OrbitControls, useTexture, Center } from '@react-three/drei'
import portalVertexShaders from '../../shaders/portal/vertex.glsl'
import portalFragmentShaders from '../../shaders/portal/fragment.glsl'
import * as THREE from 'three'
import { extend, useFrame } from '@react-three/fiber'
import { useRef } from 'react'

const PortalMaterial = shaderMaterial(
    {
        uTime: 0,
        uColorStart: new THREE.Color('#000000'),
        uColorEnd: new THREE.Color('#ffffff')
    },
    portalVertexShaders,
    portalFragmentShaders
)

extend({ PortalMaterial })

export default function PortalExperience() {

    const { nodes } = useGLTF('./model/portalOptimised.glb')
    const bakedTextures = useTexture('./model/bake1.jpg')
    // bakedTextures.flipY = false

    const portalMaterial = useRef()

    useFrame((state, delta) => {

        portalMaterial.current.uTime += delta
    })

    return (
        <>
            <OrbitControls makeDefault />
            <Center>
                <mesh geometry={nodes.baked.geometry}>
                    <meshBasicMaterial map={bakedTextures} map-flipY={false} />
                </mesh>

                <mesh
                    position={nodes.poleLightA.position}
                    geometry={ nodes.poleLightA.geometry} 
                >
                    <meshBasicMaterial color='#ffffe5' /> 
                </mesh>

                <mesh
                    position={nodes.poleLightB.position}
                    geometry={ nodes.poleLightB.geometry} 
                >
                    <meshBasicMaterial color='#ffffe5' /> 
                </mesh>

                <mesh 
                    geometry={nodes.portalLight.geometry}
                    position={nodes.portalLight.position}
                    rotation={nodes.portalLight.rotation}
                >
                    {/* <shaderMaterial
                        vertexShader={ portalVertexShaders }
                        fragmentShader={ portalFragmentShaders }
                        uniforms={ {
                            uTime: { value: 0 },
                            uColorStart: { value: new THREE.Color('#000000') },
                            uColorEnd: { value: new THREE.Color('#ffffff') }
                        } }
                    /> */}

                    <portalMaterial ref={ portalMaterial }/>
                </mesh>

                <Sparkles 
                    size={ 6}
                    scale={[ 4, 2, 4]}
                    position-y={ 1 }
                    speed={ 0.3 }
                    count={50}
                />
            
            </Center>
        </>
    )
}
