import { Center, Float, Text3D } from "@react-three/drei"
import { profile } from "../../data/portfolio"

// Texto 3D con nombre y título profesional
export default function Title3D() {
    const font = "/fonts/Earring_Regular.json"
    return (
        <Float speed={1.5} floatIntensity={0.4}>
            <Center position={[0, 4, -2.2]}>
                <Text3D font={font} size={0.55} height={0.12} bevelEnabled bevelSize={0.015} bevelThickness={0.02} castShadow>
                    {profile.name}
                    <meshStandardMaterial color="#5eead4" metalness={0.6} roughness={0.25} />
                </Text3D>
            </Center>
            <Center position={[0, 3.3, -2.2]}>
                <Text3D font={font} size={0.22} height={0.05} bevelEnabled bevelSize={0.005}>
                    Ingeniería de Sistemas - Univalle
                    <meshStandardMaterial color="#e2e8f0" metalness={0.4} roughness={0.35} />
                </Text3D>
            </Center>
        </Float>
    )
}
