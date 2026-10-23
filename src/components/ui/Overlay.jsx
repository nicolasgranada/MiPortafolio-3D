import { useProgress } from "@react-three/drei"
import { aptitudes, profile, skillGroups } from "../../data/portfolio"

export function Loader() {
    const { progress, active } = useProgress()
    if (!active && progress >= 100) return null
    return <div className="loader"><p>Cargando escena 3D… {Math.round(progress)}%</p><div className="bar"><i style={{ width: `${progress}%` }} /></div></div>
}

export function Hud({ panel, setPanel, engine }) {
    const items = [["about", "Sobre mí"], ["skills", "Habilidades"], ["contact", "Contacto"], ["docs", "Documentación"]]
    return (
        <header className="hud">
            <div className="brand"><b>{profile.name}</b><span>{profile.title}</span></div>
            <nav>{items.map(([k, l]) => <button key={k} className={panel === k ? "act" : ""} onClick={() => setPanel(panel === k ? null : k)}>{l}</button>)}</nav>
            <p className="hint">Arrastra para orbitar · Rueda para zoom · WASD/Flechas para moverte · Clic en los objetos flotantes</p>
            <span className="badge">Render: {engine}</span>
        </header>
    )
}

const Modal = ({ title, onClose, children }) => (
    <aside className="panel" role="dialog" aria-label={title}>
        <button className="close" onClick={onClose} aria-label="Cerrar">×</button>
        <h2>{title}</h2>{children}
    </aside>
)

export function Panels({ panel, setPanel, project, setProject }) {
    if (project) return (
        <Modal title={project.title} onClose={() => setProject(null)}>
            {project.kind === "video"
                ? <iframe className="media" src={project.media} title={project.title} allowFullScreen />
                : <img className="media" src={project.media} alt={project.title} />}
            <p>{project.desc}</p>
            <div className="chips">{project.tech.map((t) => <span key={t}>{t}</span>)}</div>
            <a className="btn" href={project.link} target="_blank" rel="noreferrer">Ver en GitHub</a>
        </Modal>
    )
    const close = () => setPanel(null)
    if (panel === "about") return (
        <Modal title={profile.greeting} onClose={close}>
            <p>{profile.tagline}</p><p>{profile.bio}</p>
            {aptitudes.map((a) => <div key={a.name} className="skill"><span>{a.name}</span><div className="bar"><i style={{ width: `${a.level}%` }} /></div></div>)}
        </Modal>
    )
    if (panel === "skills") return (
        <Modal title="Habilidades" onClose={close}>
            {skillGroups.map((g) => <section key={g.group}><h3>{g.group}</h3><div className="chips">{g.items.map((i) => <span key={i}>{i}</span>)}</div></section>)}
        </Modal>
    )
    if (panel === "contact") return (
        <Modal title="Contacto" onClose={close}>
            <p>¿Hablamos? Escríbeme o revisa mi trabajo:</p>
            <a className="btn" href={`mailto:${profile.email}`}>Correo</a>
            <a className="btn" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a className="btn" href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
        </Modal>
    )
    if (panel === "docs") return (
        <Modal title="Documentación" onClose={close}>
            <p><b>Arquitectura:</b> React + Vite, React Three Fiber (Three.js), drei, Rapier (física), estructura del curso: pages/world, components, models-3d.</p>
            <p><b>Funcionalidades:</b> escena 3D, órbita/zoom, PBR, matcaps, sombras, clic/hover, teclado, colisiones, texto 3D, paneles multimedia, etiquetas HTML, WebGPU con respaldo WebGL, modelos Blender (GLB).</p>
            <p><b>Tecnologías:</b> three, @react-three/fiber, @react-three/drei, @react-three/rapier, Docker, Blender. Detalle completo en README.md.</p>
        </Modal>
    )
    return null
}
