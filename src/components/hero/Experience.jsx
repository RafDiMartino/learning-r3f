import { useMatcapTexture, Center, OrbitControls, Text3D } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import { useEffect, useState, useRef } from 'react'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'

const torusGeometry = new THREE.TorusGeometry(1, 0.6, 16, 32)
const material = new THREE.MeshMatcapMaterial()

export default function Experience() {

    // const [ torusGeometry, setTorusGeometry ] = useState()
    // const [ material, setMaterial ] = useState()

    // const donutsGroup = useRef()

    const donuts = useRef([])

    const [matcapTexture] = useMatcapTexture('36220C_C6C391_8C844A_8B7B4C', 256)

    useEffect(() => {

        matcapTexture.encoding = THREE.sRGBEncoding
        material.needsUpdate = true

        material.matcap = matcapTexture
        material.needsUpdate = true
    }, [])


    useFrame((state, delta) => {
        // for (const donut of donutsGroup.current.children) {
        //     donut.rotation.y += delta * 0.1;
        // }

        for (const donut of donuts.current) {
            donut.rotation.y += delta * 0.1;
        }
    })

    return <>

        <Perf position="top-left" />
        <OrbitControls makeDefault />

        {/* <torusGeometry ref={setTorusGeometry} args={[1, 0.6, 16, 32]}/>
        <meshMatcapMaterial ref={setMaterial} matcap={ matcapTexture} /> */}

        <Center>
            <Text3D
                font='./fonts/Josefin Sans Thin_Regular.json'
                size={0.5}
                height={0.2}
                curveSegments={12}
                bevelEnabled
                bevelThickness={0.02}
                bevelSize={0.02}
                bevelOffset={0}
                bevelSegments={5}
                material={material}
            >
                RAF DI MARTINO
                {/* <meshMatcapMaterial matcap={ matcapTexture} /> */}
            </Text3D>
        </Center>
        {/* <group ref={donutsGroup}> */}
            {[...Array(100)].map((value, i) =>
                <mesh
                    ref={(element) => donuts.current[i] = element}
                    key={i}
                    geometry={torusGeometry}
                    material={material}
                    position={[
                        (Math.random() - 0.5) * 10,
                        (Math.random() - 0.5) * 10,
                        (Math.random() - 0.5) * 10,
                    ]}
                    scale={0.2 + Math.random() * 0.2}
                    rotation={[
                        Math.random() * Math.PI,
                        Math.random() * Math.PI,
                        0
                    ]}
                />
            )}
        {/* </group> */}


        {/* <mesh>
            <torusGeometry args={[1, 0.6, 16, 32]}/>
            <meshMatcapMaterial matcap={ matcapTexture} />
        </mesh> */}
    </>
}