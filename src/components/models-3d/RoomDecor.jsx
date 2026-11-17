import { CuboidCollider, RigidBody } from "@react-three/rapier"

const Plant = () => (
    <group position={[5.8, 0, 8.6]}>
        <RigidBody type="fixed" colliders={false}>
            <CuboidCollider args={[0.45, 0.5, 0.45]} position={[0, 0.5, 0]} />
        </RigidBody>
        <mesh position={[0, 0.42, 0]} castShadow receiveShadow>
            <cylinderGeometry args={[0.48, 0.35, 0.75, 16]} />
            <meshStandardMaterial color="#c66b4b" roughness={0.7} />
        </mesh>
        <mesh position={[0, 0.82, 0]} castShadow>
            <cylinderGeometry args={[0.3, 0.3, 0.08, 16]} />
            <meshStandardMaterial color="#3f241c" roughness={0.9} />
        </mesh>
        {[[-0.28, 1.35, 0], [0.28, 1.5, 0.05], [0, 1.72, -0.08], [-0.12, 1.25, 0.25], [0.18, 1.3, 0.2]].map(([x, y, z], index) => (
            <mesh key={index} position={[x, y, z]} rotation-z={(index - 2) * 0.35} rotation-x={index % 2 ? 0.25 : -0.2} castShadow>
                <sphereGeometry args={[0.3, 10, 6]} />
                <meshStandardMaterial color={index % 2 ? "#22c55e" : "#16a34a"} roughness={0.8} />
            </mesh>
        ))}
    </group>
)

const SideTable = () => (
    <group position={[7.4, 0, 1.1]}>
        <RigidBody type="fixed" colliders={false}>
            <CuboidCollider args={[0.65, 0.45, 0.65]} position={[0, 0.75, 0]} />
        </RigidBody>
        <mesh position={[0, 1.45, 0]} castShadow receiveShadow>
            <cylinderGeometry args={[0.72, 0.72, 0.12, 24]} />
            <meshStandardMaterial color="#8a5a3a" roughness={0.55} />
        </mesh>
        <mesh position={[0, 0.72, 0]} castShadow>
            <cylinderGeometry args={[0.08, 0.12, 1.4, 12]} />
            <meshStandardMaterial color="#252936" metalness={0.7} roughness={0.3} />
        </mesh>
        <mesh position={[0, 0.05, 0]} castShadow>
            <cylinderGeometry args={[0.55, 0.7, 0.1, 16]} />
            <meshStandardMaterial color="#252936" metalness={0.7} roughness={0.3} />
        </mesh>
        <mesh position={[0, 1.62, 0]} castShadow>
            <cylinderGeometry args={[0.2, 0.15, 0.3, 16]} />
            <meshStandardMaterial color="#f59e0b" emissive="#7c2d12" emissiveIntensity={0.25} />
        </mesh>
    </group>
)

const WallArt = () => (
    <group position={[5.8, 2.25, -3.02]} rotation-y={Math.PI}>
        <mesh castShadow>
            <boxGeometry args={[2.2, 1.5, 0.12]} />
            <meshStandardMaterial color="#8a5a3a" roughness={0.6} />
        </mesh>
        <mesh position={[0, 0, 0.08]}>
            <planeGeometry args={[1.9, 1.2]} />
            <meshStandardMaterial color="#172554" emissive="#1d4ed8" emissiveIntensity={0.18} />
        </mesh>
        <mesh position={[-0.35, 0.08, 0.14]} rotation-z={-0.35}>
            <boxGeometry args={[0.14, 1.05, 0.03]} />
            <meshStandardMaterial color="#5eead4" emissive="#0f766e" emissiveIntensity={0.3} />
        </mesh>
        <mesh position={[0.2, -0.12, 0.14]} rotation-z={0.75}>
            <boxGeometry args={[0.14, 0.9, 0.03]} />
            <meshStandardMaterial color="#fbbf24" emissive="#b45309" emissiveIntensity={0.25} />
        </mesh>
    </group>
)

export default function RoomDecor() {
    return (
        <>
            <Plant />
            <SideTable />
            <WallArt />
        </>
    )
}
