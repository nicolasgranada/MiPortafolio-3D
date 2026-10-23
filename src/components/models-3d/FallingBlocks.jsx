import { RigidBody } from "@react-three/rapier"

// Objetos dinámicos: caen por gravedad y se detienen al colisionar con el suelo
export default function FallingBlocks() {
    return (
        <>
            <RigidBody position={[3.6, 5, 1.5]} restitution={0.3}>
                <mesh castShadow><boxGeometry args={[0.6, 0.6, 0.6]} /><meshStandardMaterial color="#f87171" roughness={0.4} metalness={0.3} /></mesh>
            </RigidBody>
            <RigidBody position={[4.1, 7, 1.2]} colliders="ball" restitution={0.6}>
                <mesh castShadow><sphereGeometry args={[0.35, 24, 24]} /><meshStandardMaterial color="#34d399" roughness={0.3} metalness={0.5} /></mesh>
            </RigidBody>
        </>
    )
}
