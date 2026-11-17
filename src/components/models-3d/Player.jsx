import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { useKeyboardControls } from "@react-three/drei"
import { CapsuleCollider, RigidBody } from "@react-three/rapier"
import * as THREE from "three"

// Cápsula controlable con WASD / flechas y salto con Space.
export default function Player() {
    const body = useRef()
    const jumpWasPressed = useRef(false)
    const [, get] = useKeyboardControls()
    const cameraForward = useRef(new THREE.Vector3())
    const cameraRight = useRef(new THREE.Vector3())
    const movement = useRef(new THREE.Vector3())
    const SPEED = 4
    const JUMP_SPEED = 5.5

    useFrame((state) => {
        if (!body.current) return
        const { forward, back, left, right, jump } = get()
        const horizontal = (right ? 1 : 0) - (left ? 1 : 0)
        const vertical = (forward ? 1 : 0) - (back ? 1 : 0)
        state.camera.getWorldDirection(cameraForward.current)
        cameraForward.current.y = 0
        cameraForward.current.normalize()
        cameraRight.current.crossVectors(cameraForward.current, state.camera.up).normalize()
        movement.current
            .set(0, 0, 0)
            .addScaledVector(cameraRight.current, horizontal)
            .addScaledVector(cameraForward.current, vertical)
        if (movement.current.lengthSq() > 1) movement.current.normalize()
        const v = body.current.linvel()
        const position = body.current.translation()
        const isGrounded = Math.abs(v.y) < 0.1 && position.y < 1.1
        const canJump = jump && !jumpWasPressed.current && isGrounded
        body.current.setLinvel({
            x: movement.current.x * SPEED,
            y: canJump ? JUMP_SPEED : v.y,
            z: movement.current.z * SPEED,
        }, true)
        jumpWasPressed.current = jump

        const p = position
        const c = state.controls
        if (c) {
            const dx = p.x - c.target.x, dy = p.y + 0.6 - c.target.y, dz = p.z - c.target.z
            c.target.set(p.x, p.y + 0.6, p.z)
            state.camera.position.set(state.camera.position.x + dx, state.camera.position.y + dy, state.camera.position.z + dz)
        }
    })

    return (
        <RigidBody ref={body} position={[0, 1, 4]} colliders={false} enabledRotations={[false, false, false]}>
            <CapsuleCollider args={[0.36, 0.36]} position={[0, 0.72, 0]} />
            <mesh position={[0, 0.72, 0]} castShadow receiveShadow>
                <capsuleGeometry args={[0.36, 0.72, 8, 16]} />
                <meshStandardMaterial color="#38bdf8" roughness={0.45} metalness={0.15} />
            </mesh>
        </RigidBody>
    )
}
