// import { OrbitControls } from '@react-three/drei'
import Lights from './Lights.jsx'
import { Level } from './Level.jsx'
import Player from './Player.jsx'
import { Physics, Debug } from '@react-three/rapier'

export default function GameExperience()
{
    return <>

        {/* <OrbitControls makeDefault /> */}
        
        <Physics>
            {/* <Debug /> */}
            <Lights />
            <Level />
            <Player />
        </Physics>

    </>
}