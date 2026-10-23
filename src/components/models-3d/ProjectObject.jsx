import { useEffect, useRef, useState } from "react"
import { useFrame } from "@react-three/fiber"
import { Float, Html } from "@react-three/drei"
import { MathUtils } from "three"

// Objeto clicable: hover (escala/rotación, reversible), clic (detalle) y etiqueta HTML anclada
export default function ProjectObject({ project, onSelect }) {
    const mesh = useRef()
    const [hovered, setHovered] = useState(false)

    useEffect(() => {
        document.body.style.cursor = hovered ? "pointer" : "auto"
        return () => { document.body.style.cursor = "auto" }
    }, [hovered])

    useFrame((_, dt) => {
        const s = MathUtils.damp(mesh.current.scale.x, hovered ? 1.35 : 1, 6, dt)
        mesh.current.scale.setScalar(s)
        mesh.current.rotation.y += dt * (hovered ? 2.4 : 0.5)
    })

    return (
        <group position={project.position}>
            <Float speed={2} floatIntensity={0.6}>
                <mesh
                    ref={mesh}
                    castShadow
                    onPointerOver={(e) => { e.stopPropagation(); setHovered(true) }}
                    onPointerOut={() => setHovered(false)}
                    onClick={(e) => { e.stopPropagation(); onSelect(project) }}
                >
                    {project.shape === "box" && <boxGeometry args={[0.7, 0.7, 0.7]} />}
                    {project.shape === "octa" && <octahedronGeometry args={[0.55]} />}
                    {project.shape === "torus" && <torusKnotGeometry args={[0.35, 0.12, 96, 16]} />}
                    <meshStandardMaterial color={project.color} metalness={0.6} roughness={0.25}
                        emissive={project.color} emissiveIntensity={hovered ? 0.5 : 0.1} />
                </mesh>
                <Html center position={[0, 0.95, 0]} distanceFactor={8} style={{ pointerEvents: "none" }}>
                    <div className={`label ${hovered ? "on" : ""}`}>{project.title}</div>
                </Html>
            </Float>
        </group>
    )
}
