import { OrbitControls } from "@react-three/drei"

const Controls = () => {
    return (
        <OrbitControls
            makeDefault
            target={[0, 1.2, 0]}
            enableDamping
            minDistance={2}
            maxDistance={14}
            maxPolarAngle={Math.PI * 0.49}
        />
    )
}

export default Controls
