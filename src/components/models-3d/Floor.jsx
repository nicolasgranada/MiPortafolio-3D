import { useTexture } from "@react-three/drei"
import { CuboidCollider, RigidBody } from "@react-three/rapier"
import * as THREE from "three"

// Suelo con textura de pino + colisión + paredes
export default function Floor(props) {
    const texture = useTexture("ground-textures/coated_pine_diff_2k.jpg", (loadedTexture) => {
        loadedTexture.repeat.set(5, 5)
        loadedTexture.wrapS = THREE.RepeatWrapping
        loadedTexture.wrapT = THREE.RepeatWrapping
    })

    return (
        <group {...props} dispose={null}>
            <RigidBody type="fixed" colliders={false}>
                <CuboidCollider args={[10, 0.1, 6.6]} position={[0, -0.1, 3.4]} />
                <CuboidCollider args={[10, 3, 0.2]} position={[0, 3, -3.2]} />
                <CuboidCollider args={[0.2, 3, 10]} position={[-10, 3, 0]} />
                <CuboidCollider args={[0.2, 3, 10]} position={[10, 3, 0]} />
                <CuboidCollider args={[10, 3, 0.2]} position={[0, 3, 10]} />
            </RigidBody>
            <mesh position={[0, 0, 3.4]} receiveShadow rotation-x={-Math.PI * 0.5}>
                <planeGeometry args={[20, 13.2]} />
                <meshStandardMaterial map={texture} />
            </mesh>
            <mesh position={[0, 2.5, -3.2]} receiveShadow>
                <boxGeometry args={[20, 5, 0.3]} />
                <meshStandardMaterial color="#1e2a4a" roughness={0.8} metalness={0.1} />
            </mesh>
            <mesh position={[-10, 2.5, 3.4]} receiveShadow>
                <boxGeometry args={[0.3, 5, 13.2]} />
                <meshStandardMaterial color="#1e2a4a" roughness={0.8} metalness={0.1} />
            </mesh>
        </group>
    )
}
