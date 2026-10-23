export default function Window(props) {
    return (
        <group {...props} dispose={null}>
            <mesh position={[0, 0, 0.08]} castShadow>
                <boxGeometry args={[3.8, 2.8, 0.18]} />
                <meshStandardMaterial color="#5b3928" roughness={0.6} />
            </mesh>
            <mesh position={[0, 0, 0.2]}>
                <planeGeometry args={[3.35, 2.35]} />
                <meshStandardMaterial color="#7dd3fc" emissive="#2563eb" emissiveIntensity={0.45} roughness={0.2} metalness={0.1} />
            </mesh>
            <mesh position={[0, 0, 0.28]} castShadow>
                <boxGeometry args={[0.12, 2.4, 0.12]} />
                <meshStandardMaterial color="#8a5a3a" roughness={0.55} />
            </mesh>
            <mesh position={[0, 0, 0.28]} castShadow>
                <boxGeometry args={[3.45, 0.12, 0.12]} />
                <meshStandardMaterial color="#8a5a3a" roughness={0.55} />
            </mesh>
            <mesh position={[0, -1.42, 0.22]} castShadow>
                <boxGeometry args={[4.1, 0.18, 0.55]} />
                <meshStandardMaterial color="#6b3f29" roughness={0.65} />
            </mesh>
            <pointLight
                color="#7dd3fc"
                intensity={2}
                distance={5}
                position={[0, 0, 0.5]}
            />
        </group>
    )
}
