import { useMatcapTexture, Center, OrbitControls, Text3D } from '@react-three/drei'
import { Perf } from 'r3f-perf'

export default function Experience() {

    const [matcapTexture] = useMatcapTexture('36220C_C6C391_8C844A_8B7B4C', 256)
    // const tempArray = [...Array(100)]

    // console.log(tempArray)

    return <>

        <Perf position="top-left" />
        <OrbitControls makeDefault />

        <Center>
            <Text3D 
                font='./fonts/helvetiker_regular.typeface.json'
                size={0.5}
                height={0.2}
                curveSegments={12}
                bevelEnabled
                bevelThickness={0.02}
                bevelSize={0.02}
                bevelOffset={0}
                bevelSegments={5}
            >
                RAF DI MARTINO
                <meshMatcapMaterial matcap={ matcapTexture} />
            </Text3D>
        </Center>

        { [...Array(100)].map((value, i) =>
            <mesh 
                key={i}
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
            >
                <torusGeometry args={[1, 0.6, 16, 32]}/>
                <meshMatcapMaterial matcap={ matcapTexture} />
            </mesh>
        )}

        {/* <mesh>
            <torusGeometry args={[1, 0.6, 16, 32]}/>
            <meshMatcapMaterial matcap={ matcapTexture} />
        </mesh> */}
    </>
}