import { Html, useTexture } from "@react-three/drei"
import { CuboidCollider, RigidBody } from "@react-three/rapier"
import { profile } from "../../data/portfolio"

// Escritorio: elementos principales en PBR, secundarios con matcap (bajo costo)
export default function Desk(props) {
    const [matcapA, matcapB] = useTexture([
        "/matcaps/1C70C6_09294C_0F3F73_52B3F6.png",
        "/matcaps/045C5C_0DBDBD_049393_04A4A4-512px.png",
    ])
    return (
        <group {...props} dispose={null}>
            <RigidBody type="fixed" colliders={false}>
                <CuboidCollider args={[2.2, 0.5, 0.9]} position={[0, 0.5, 0]} />
            </RigidBody>
            <mesh position={[0, 0.95, 0]} castShadow receiveShadow>
                <boxGeometry args={[4.4, 0.1, 1.8]} />
                <meshStandardMaterial color="#8a5a3a" roughness={0.55} metalness={0.05} />
            </mesh>
            {[[-2, -0.75], [2, -0.75], [-2, 0.75], [2, 0.75]].map(([x, z]) => (
                <mesh key={`${x}${z}`} position={[x, 0.45, z]} castShadow>
                    <boxGeometry args={[0.12, 0.9, 0.12]} />
                    <meshStandardMaterial color="#2b2b33" metalness={0.9} roughness={0.35} />
                </mesh>
            ))}

            <group position={[0, 1, -0.5]}>
                <mesh position={[0, 0.1, 0]} castShadow><boxGeometry args={[0.6, 0.05, 0.35]} /><meshStandardMaterial color="#222" metalness={0.8} roughness={0.3} /></mesh>
                <mesh position={[0, 0.9, 0]} castShadow><boxGeometry args={[1.9, 1.05, 0.08]} /><meshStandardMaterial color="#111827" metalness={0.8} roughness={0.25} /></mesh>
                <mesh position={[0, 0.9, 0.045]}><planeGeometry args={[1.8, 0.95]} /><meshStandardMaterial color="#04121f" emissive="#0a3a5a" emissiveIntensity={0.8} /></mesh>
                <Html transform position={[0, 0.9, 0.06]} distanceFactor={1.1}>
                    <pre className="screen">{`> ${profile.name}\n> ${profile.university}\n> npm run portafolio\n✔ escena 3D lista_`}</pre>
                </Html>
            </group>
            <mesh position={[0, 1.02, 0.4]} castShadow><boxGeometry args={[1.1, 0.04, 0.35]} /><meshStandardMaterial color="#20232b" metalness={0.5} roughness={0.5} /></mesh>

            {/* Objetos secundarios con matcap */}
            <mesh position={[1.7, 1.12, 0.3]} castShadow><cylinderGeometry args={[0.13, 0.11, 0.24, 20]} /><meshMatcapMaterial matcap={matcapB} /></mesh>
            {[0, 1, 2].map((i) => (
                <mesh key={i} position={[-1.7, 1.06 + i * 0.1, 0.2]} rotation-y={i * 0.25} castShadow>
                    <boxGeometry args={[0.6, 0.09, 0.4]} /><meshMatcapMaterial matcap={i % 2 ? matcapA : matcapB} />
                </mesh>
            ))}
            <mesh position={[-1.7, 1.2, -0.45]} castShadow><cylinderGeometry args={[0.18, 0.13, 0.25, 16]} /><meshMatcapMaterial matcap={matcapA} /></mesh>
            <mesh position={[-1.7, 1.5, -0.45]} castShadow><icosahedronGeometry args={[0.3, 1]} /><meshMatcapMaterial matcap={matcapB} /></mesh>
        </group>
    )
}
