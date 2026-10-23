import { Suspense, useCallback, useMemo, useState } from "react"
import { Canvas } from "@react-three/fiber"
import { KeyboardControls } from "@react-three/drei"
import { Physics } from "@react-three/rapier"
import * as THREE from "three"
import Ambience from "../../components/Ambience"
import Controls from "../../components/Controls"
import Floor from "../../components/models-3d/Floor"
import Desk from "../../components/models-3d/Desk"
import Library from "../../components/models-3d/Library"
import Window from "../../components/models-3d/Window"
import Player from "../../components/models-3d/Player"
import ProjectObject from "../../components/models-3d/ProjectObject"
import FallingBlocks from "../../components/models-3d/FallingBlocks"
import Title3D from "../../components/models-3d/Title3D"
import BlenderModel from "../../components/models-3d/BlenderModel"
import { Hud, Loader, Panels } from "../../components/ui/Overlay"
import { blenderModels, projects } from "../../data/portfolio"

const WorldPage = () => {
    const [engine, setEngine] = useState("detectando…")
    const [panel, setPanel] = useState(null)
    const [project, setProject] = useState(null)

    const map = useMemo(() => [
        { name: "forward", keys: ["ArrowUp", "KeyW"] },
        { name: "back", keys: ["ArrowDown", "KeyS"] },
        { name: "left", keys: ["ArrowLeft", "KeyA"] },
        { name: "right", keys: ["ArrowRight", "KeyD"] },
    ], [])

    // WebGPU si está disponible; si no (o si falla) se usa WebGL
    const createRenderer = useCallback(async (props) => {
        try {
            if (navigator.gpu && (await navigator.gpu.requestAdapter())) {
                const { WebGPURenderer } = await import("three/webgpu")
                const renderer = new WebGPURenderer(props)
                await renderer.init()
                setEngine("WebGPU")
                return renderer
            }
        } catch (e) {
            console.warn("WebGPU no disponible, usando WebGL", e)
        }
        setEngine("WebGL (respaldo)")
        return new THREE.WebGLRenderer(props)
    }, [])

    return (
        <>
            <KeyboardControls map={map}>
                <Canvas shadows camera={{ position: [0, 2.8, 8], fov: 55 }} gl={createRenderer} dpr={[1, 1.75]}>
                    <Ambience />
                    <Controls />
                    <Suspense fallback={null}>
                        <Physics gravity={[0, -9.81, 0]}>
                            <Floor />
                            <Desk position={[0, 0, -1.8]} />
                            <Library position={[-5.4, 0, -2.75]} />
                            <Window position={[3.8, 3.1, -3.08]} />
                            <Player />
                            <FallingBlocks />
                        </Physics>
                        <Title3D />
                        {projects.map((p) => <ProjectObject key={p.id} project={p} onSelect={(x) => { setPanel(null); setProject(x) }} />)}
                        {blenderModels.map((m) => <BlenderModel key={m.url} {...m} />)}
                    </Suspense>
                </Canvas>
            </KeyboardControls>
            <Hud panel={panel} setPanel={(p) => { setProject(null); setPanel(p) }} engine={engine} />
            <Panels panel={panel} setPanel={setPanel} project={project} setProject={setProject} />
            <Loader />
        </>
    )
}

export default WorldPage
