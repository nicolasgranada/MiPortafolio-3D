import { Environment, useTexture } from "@react-three/drei"
import * as THREE from "three"

const Ambience = () => {
    const skyTexture = useTexture("/skybox/DaySkyHDRI065A_2K_TONEMAPPED.jpg", (texture) => {
        texture.mapping = THREE.EquirectangularReflectionMapping
        texture.colorSpace = THREE.SRGBColorSpace
    })

    return (
        <>
            <Environment map={skyTexture} background backgroundIntensity={0.8} />
            <fog attach="fog" args={["#8db8d8", 14, 32]} />
            <hemisphereLight args={["#9fb4ff", "#1b1f33", 0.6]} />
            <ambientLight intensity={0.35} />
            <directionalLight
                position={[6, 10, 5]}
                intensity={2.2}
                castShadow
                shadow-mapSize={[2048, 2048]}
                shadow-camera-left={-10}
                shadow-camera-right={10}
                shadow-camera-top={10}
                shadow-camera-bottom={-10}
            />
            <pointLight position={[1.6, 2.2, -2]} intensity={6} color="#ffb454" distance={8} />
        </>
    )
}

export default Ambience
