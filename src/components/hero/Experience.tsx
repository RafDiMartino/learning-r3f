import { OrbitControls, TransformControls, PivotControls, Html } from '@react-three/drei'
import { useRef } from 'react'
import classes from "./Experience.module.css"

export default function Experience(){


    const cube: any = useRef()
    const sphere: any = useRef()

    return (
    <>
        <OrbitControls makeDefault/>
        <directionalLight position={ [ 1, 2, 3 ] } intensity={ 1.5 } />
        <ambientLight intensity={ 0.5 } />

        <PivotControls 
            anchor={ [0, 0, 0] } 
            depthTest={false}
            lineWidth={ 4 }
            axisColors={ [ "#9381FF", "#ff4d6d", "#7ae582"] }
            // scale={ 100 }
            // fixed={ true }
        >
            <mesh ref={ sphere } position-x={ - 2 }>
                <sphereGeometry />
                <meshStandardMaterial color="orange" />
                <Html 
                    position={[ 1, 1, 0]}
                    wrapperClass={classes.label}
                    center
                    distanceFactor={6}
                    // occlude={ [ sphere, cube ] }
                >
                    Sphere 👍
                </Html>
            </mesh>
        </PivotControls>


        <mesh ref={ cube } position-x={ 2 } scale={ 1.5 }>
            <boxGeometry />
            <meshStandardMaterial color="mediumpurple" />
        </mesh>
        <TransformControls object={cube} mode='translate'/>

        <mesh position-y={ - 1 } rotation-x={ - Math.PI * 0.5 } scale={ 10 }>
            <planeGeometry />
            <meshStandardMaterial color="greenyellow" />
        </mesh>


    </>
    )
}
