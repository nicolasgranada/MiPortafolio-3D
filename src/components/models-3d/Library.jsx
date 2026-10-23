import { CuboidCollider, RigidBody } from "@react-three/rapier"

const books = [
    ["#ef4444", 0.22, 0.48, -0.12],
    ["#f59e0b", 0.18, 0.58, 0.12],
    ["#22c55e", 0.24, 0.42, 0.36],
    ["#3b82f6", 0.2, 0.54, -0.34],
    ["#a855f7", 0.16, 0.46, -0.05],
    ["#14b8a6", 0.23, 0.6, 0.2],
]

const shelfHeights = [0.65, 1.35, 2.05]

export default function Library(props) {
    return (
        <group {...props} dispose={null}>
            <RigidBody type="fixed" colliders={false}>
                <CuboidCollider args={[1.45, 1.4, 0.4]} position={[0, 1.4, 0]} />
            </RigidBody>
            <mesh position={[0, 1.5, 0]} castShadow receiveShadow>
                <boxGeometry args={[3, 3, 0.8]} />
                <meshStandardMaterial color="#4b2e20" roughness={0.7} />
            </mesh>
            {shelfHeights.map((y) => (
                <mesh key={y} position={[0, y, 0.04]} castShadow receiveShadow>
                    <boxGeometry args={[2.8, 0.12, 0.9]} />
                    <meshStandardMaterial color="#8a5a3a" roughness={0.6} />
                </mesh>
            ))}
            {[-1.42, 1.42].map((x) => (
                <mesh key={x} position={[x, 1.5, 0]} castShadow receiveShadow>
                    <boxGeometry args={[0.14, 3.1, 0.86]} />
                    <meshStandardMaterial color="#6b3f29" roughness={0.65} />
                </mesh>
            ))}
            {shelfHeights.map((y, row) => (
                <group key={y} position={[0, y + 0.08, 0.02]}>
                    {books.map(([color, width, height, x], index) => (
                        <mesh
                            key={`${row}-${index}`}
                            position={[x * 2.5, height / 2, 0]}
                            rotation-z={(index % 2 ? 1 : -1) * 0.04}
                            castShadow
                        >
                            <boxGeometry args={[width, height, 0.58]} />
                            <meshStandardMaterial color={color} roughness={0.5} />
                        </mesh>
                    ))}
                </group>
            ))}
        </group>
    )
}
