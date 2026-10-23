import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { useKeyboardControls, useTexture } from "@react-three/drei"
import { CapsuleCollider, RigidBody } from "@react-three/rapier"

// Avatar con WASD / flechas. Cuerpo físico: los sólidos bloquean el movimiento.
export default function Player() {
    const body = useRef()
    const matcap = useTexture("/matcaps/045C5C_0DBDBD_049393_04A4A4-512px.png")
    const [, get] = useKeyboardControls()
    const SPEED = 4

    useFrame((state) => {
        const { forward, back, left, right } = get()
        const x = (right ? 1 : 0) - (left ? 1 : 0)
        const z = (back ? 1 : 0) - (forward ? 1 : 0)
        const len = Math.hypot(x, z) || 1
        const v = body.current.linvel()
        body.current.setLinvel({ x: (x / len) * SPEED, y: v.y, z: (z / len) * SPEED }, true)

        const p = body.current.translation()
        const c = state.controls
        if (c) {
            const dx = p.x - c.target.x, dy = p.y + 0.6 - c.target.y, dz = p.z - c.target.z
            c.target.set(p.x, p.y + 0.6, p.z)
            state.camera.position.set(state.camera.position.x + dx, state.camera.position.y + dy, state.camera.position.z + dz)
        }
    })

    return (
        <RigidBody ref={body} position={[0, 1, 4]} colliders={false} enabledRotations={[false, false, false]}>
            <CapsuleCollider args={[0.3, 0.3]} position={[0, 0.6, 0]} />
            <group position={[0, 0.6, 0]}>
                <mesh castShadow><capsuleGeometry args={[0.3, 0.6, 8, 16]} /><meshMatcapMaterial matcap={matcap} /></mesh>
                <mesh position={[0, 0.7, 0]} castShadow><sphereGeometry args={[0.22, 16, 16]} /><meshMatcapMaterial matcap={matcap} /></mesh>
            </group>
        </RigidBody>
    )
}
