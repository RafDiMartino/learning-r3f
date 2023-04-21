// import { OrbitControls } from '@react-three/drei'
import Lights from './Lights.jsx'
import { Level } from './Level.jsx'
import Player from './Player.jsx'
import { Physics, Debug } from '@react-three/rapier'
import useGame from './stores/useGame.jsx'
import Effects from './Effects.jsx'

export default function GameExperience()
{

    const blocksCount = useGame((state) => state.blocksCount)
    const blocksSeed = useGame((state) => state.blocksSeed)

    return <>

        {/* <OrbitControls makeDefault /> */}
        <color args={['#252731']} attach='background'/>
        <Physics>
            {/* <Debug /> */}
            <Lights />
            <Level count={blocksCount} seed={blocksSeed}/>
            <Player />
        </Physics>
        <Effects />
    </>
}