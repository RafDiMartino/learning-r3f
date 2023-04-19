import { useFrame } from '@react-three/fiber'
import { meshBounds, useGLTF, OrbitControls } from '@react-three/drei'
import { useRef, forwardRef } from 'react'
import { Perf } from 'r3f-perf'
import { SSR, DepthOfField, Bloom, Noise, Glitch, Vignette, EffectComposer } from '@react-three/postprocessing'
import { GlitchMode, BlendFunction} from 'postprocessing'
import { useControls } from 'leva'
import Drunk from '../drunk-effect/Drunk'


export default function MouseExperience()
{
    const drunkRef = useRef()

    // const ssrProps = useControls('SSR Effect', {
    //     temporalResolve: true,
    //     STRETCH_MISSED_RAYS: true,
    //     USE_MRT: true,
    //     USE_NORMALMAP: true,
    //     USE_ROUGHNESSMAP: true,
    //     ENABLE_JITTERING: true,
    //     ENABLE_BLUR: true,
    //     temporalResolveMix: { value: 0.9, min: 0, max: 1 },
    //     temporalResolveCorrectionMix: { value: 0.25, min: 0, max: 1 },
    //     maxSamples: { value: 0, min: 0, max: 1 },
    //     resolutionScale: { value: 1, min: 0, max: 1 },
    //     blurMix: { value: 0.5, min: 0, max: 1 },
    //     blurKernelSize: { value: 8, min: 0, max: 8 },
    //     blurSharpness: { value: 0.5, min: 0, max: 1 },
    //     rayStep: { value: 0.3, min: 0, max: 1 },
    //     intensity: { value: 1, min: 0, max: 5 },
    //     maxRoughness: { value: 0.1, min: 0, max: 1 },
    //     jitter: { value: 0.7, min: 0, max: 5 },
    //     jitterSpread: { value: 0.45, min: 0, max: 1 },
    //     jitterRough: { value: 0.1, min: 0, max: 1 },
    //     roughnessFadeOut: { value: 1, min: 0, max: 1 },
    //     rayFadeOut: { value: 0, min: 0, max: 1 },
    //     MAX_STEPS: { value: 20, min: 0, max: 20 },
    //     NUM_BINARY_SEARCH_STEPS: { value: 5, min: 0, max: 10 },
    //     maxDepthDifference: { value: 3, min: 0, max: 10 },
    //     maxDepth: { value: 1, min: 0, max: 1 },
    //     thickness: { value: 10, min: 0, max: 10 },
    //     ior: { value: 1.45, min: 0, max: 2 }
    // })

    const cube = useRef()
    // const hamburger = useGLTF("./hamburger.glb")
    // useFrame((state, delta) =>
    // {
    //     cube.current.rotation.y += delta * 0.2
    // })

    const eventHandler = (event) => {
        // console.log('---')
        // console.log('distance', event.distance) // Distance between camera and hit point
        // console.log('point', event.point) // Hit point coordinates (in 3D)
        // console.log('uv', event.uv) // UV coordinates on the geometry (in 2D)
        // console.log('object', event.object) // The object that triggered the event
        // console.log('eventObject', event.eventObject) // The object that was listening to the event (useful where there is objects in objects)

        // console.log('---')
        // console.log('x', event.x) // 2D screen coordinates of the pointer
        // console.log('y', event.y) // 2D screen coordinates of the pointer

        // console.log('---')
        // console.log('shiftKey', event.shiftKey) // If the SHIFT key was pressed
        // console.log('ctrlKey', event.ctrlKey) // If the CTRL key was pressed
        // console.log('metaKey', event.metaKey) // If the COMMAND key was pressed

        cube.current.material.color.set(`hsl(${Math.random() * 360}, 100%, 75%)`)
    }

    const drunkProps = useControls( 'Drunk Effect', {
        frequency: {value: 2, min: 1, max: 20},
        amplitude: {value: 0.1, min: 0, max: 1},
    })


    return <>

        <EffectComposer multisampling={ 8 }>
            {/* <Vignette
                offset={0.3}
                darkness={0.9}
                blendFunction={ BlendFunction.NORMAL}
            /> */}

            {/* <Glitch
                delay={[ 0.5, 1]}
                duration={[ 0.1, 0.3 ]}
                strength={[ 0.2, 0.4 ]}
                mode={GlitchMode.CONSTANT_MILD}
            /> */}

            {/* <Noise 
                premultiply
                blendFunction={ BlendFunction.SOFT_LIGHT}
            /> */}

            {/* <Bloom 
                mipmapBlur
                intensity={ 0.5 }  
                // luminanceThreshold={0}  
            /> */}

            {/* <DepthOfField 
                focusDistance={0.025}
                focalLength={0.025}
                bokehScale={6}
            /> */}

            {/* <SSR {...ssrProps} /> */}
            <Drunk 
                ref={drunkRef}
                // frequency={ 20 }
                // amplitude={ 0.1 }
                {...drunkProps}
                blendFunction={ BlendFunction.MULTIPLY }
            />
        </EffectComposer>

        <Perf position="top-left"/>
        <OrbitControls makeDefault />

        <directionalLight position={ [ 1, 2, 3 ] } intensity={ 1.5 } />
        <ambientLight intensity={ 0.5 } />

        <mesh position-x={ - 2 } onClick={(event) => {event.stopPropagation()}}>
            <sphereGeometry />
            <meshStandardMaterial color="orange" />
        </mesh>

        <mesh 
            ref={ cube } 
            raycast={meshBounds}
            position-x={ 2 } 
            scale={ 1.5 } 
            // onClick={eventHandler}
            // onPointerEnter={() => {document.body.style.cursor = 'pointer'}}
            // onPointerLeave={() => {document.body.style.cursor = 'default'}}
        >
            <boxGeometry />
            {/* <meshBasicMaterial 
                // color={[ 1.5, 1, 4 ]}  
                color={[ 1.5, 1, 5 ]}
                // emissive='red'
                // emissiveIntensity={ 2 }
                toneMapped={false}
            /> */}
            <meshStandardMaterial color='mediumpurple' />
        </mesh>

        <mesh position-y={ - 1 } rotation-x={ - Math.PI * 0.5 } scale={ 10 } >
            <planeGeometry />
            <meshStandardMaterial color="greenyellow" metalness={0} roughness={0}/>
        </mesh>

        {/* <primitive 
            object={hamburger.scene}
            scale={ 0.25 }
            position-y={ 1 }
            onClick={(event) => {event.stopPropagation()}}
        /> */}
    </>
}