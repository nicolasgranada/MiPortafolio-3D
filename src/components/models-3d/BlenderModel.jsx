import { useGLTF } from "@react-three/drei"
import { CuboidCollider, RigidBody } from "@react-three/rapier"

// Carga un .glb exportado desde Blender conservando geometría, materiales y texturas (UV, PBR, baking)
export default function BlenderModel({ url, solid = false, solidColliders = [], materialColors = {}, hideNodes = [], ...props }) {
    const { scene } = useGLTF(url)
    scene.traverse((o) => {
        if (o.isMesh) {
            if (hideNodes.includes(o.name)) o.visible = false
            o.castShadow = true
            o.receiveShadow = true
            const materials = Array.isArray(o.material) ? o.material : [o.material]
            materials.forEach((material) => {
                const color = materialColors[material?.name]
                if (color && material.color) material.color.set(color)
            })
        }
    })
    const model = <primitive object={scene} {...props} />
    return solid ? (
        <RigidBody type="fixed" colliders={false}>
            {model}
            {solidColliders.map(({ args, position }, index) => (
                <CuboidCollider key={index} args={args} position={position} />
            ))}
        </RigidBody>
    ) : model
}
