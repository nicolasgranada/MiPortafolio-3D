import { useGLTF } from "@react-three/drei"

// Carga un .glb exportado desde Blender conservando geometría, materiales y texturas (UV, PBR, baking)
export default function BlenderModel({ url, ...props }) {
    const { scene } = useGLTF(url)
    scene.traverse((o) => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true } })
    return <primitive object={scene} {...props} />
}
