// Contenido editable del portafolio (cambia aquí tus datos reales)
export const profile = {
  name: 'Nicolás Granada',
  title: 'Mi Portafolio Web 3D',
  university: 'Universidad del Valle',
  greeting: 'Hola, me llamo Nicolás Granada',
  tagline: 'Te invito a explorar mi portafolio web 3D: aquí encontrarás mis habilidades, proyectos y contacto.',
  bio: 'Soy estudiante de la carrera de Ingeniería de Sistemas de la Universidad del Valle (Cali, Colombia). Me apasiona el diseño de software y el desarrollo de aplicaciones web, donde actualmente me encuentro explorando experiencias interactivas en 3D con React Three Fiber y Blender.',
  email: 'granada.nicolas@correounivalle.edu.co',
  linkedin: 'https://www.linkedin.com/in/nicofer10/',
  github: 'https://github.com/nicolasgranada',
}

export const skillGroups = [
  { group: 'Programación', items: ['JavaScript', 'Python', 'Java', 'SQL', 'C++'] },
  { group: 'Web & 3D', items: ['React', 'Three.js', 'React Three Fiber', 'HTML/CSS', 'Vite', 'Blender'] },
  { group: 'Diseño de software', items: ['UML', 'Patrones de diseño', 'Arquitectura por capas', 'Bases de datos', 'APIs REST'] },
  { group: 'Herramientas', items: ['Git/GitHub', 'Taiga', 'Figma'] },
]

export const aptitudes = [
  { name: 'Programación', level: 85 },
  { name: 'Diseño de software', level: 80 },
  { name: 'Desarrollo web', level: 85 },
  { name: 'Modelado y experiencias 3D', level: 70 },
]

// Proyectos: cada uno es un objeto 3D clicable. kind: 'image' | 'video' (url embebible)
export const projects = [
  { id: 'p1', title: 'Portafolio 3D', shape: 'octa', color: '#5b75f8', position: [-8.1, 1.3, 0.9],
    desc: 'Oficina interactiva con React Three Fiber, física, materiales PBR y renderizado WebGPU con respaldo a WebGL.',
    tech: ['React', 'R3F', 'Rapier', 'WebGPU'], kind: 'image', media: '/projects/github.png', link: profile.github },
  { id: 'p2', title: 'Desarrollo de una casa', shape: 'box', color: '#0b7e24', position: [-8.1, 1.3, 3.9],
    desc: 'En este proyecto desarrollé una casa en 3D con Blender y luego la integré en una aplicación web con React Three Fiber.',
    tech: ['React', 'Blender', 'Visual Studio'], kind: 'image', media: '/projects/casa.jpeg', link: profile.github },
  { id: 'p3', title: 'Desarrollo de un videojuego', shape: 'torus', color: '#920909', position: [-8.1, 1.3, 6.9],
    desc: 'Esta es un desarrollo de un videjuego realizado en el curso de Desarrollo de Videojuegos en Univalle.',
    tech: ['Blender', 'Cursor', 'Visual Studio', 'Python'], kind: 'image', media: '/projects/juego.jpg', link: profile.github },
]

// Modelos propios exportados desde Blender (.glb en /public/models). Ej: { url:'/models/escritorio.glb', position:[0,0,0], scale:1 }
export const blenderModels = [
  { url: '/models/split.glb', position: [-5.4, 3.55, -2.5], scale: 3.4 },
  { url: '/models/escritorio.glb', position: [0, 0, -1.0], scale: 2.4, solid: true, hideNodes: ['Cube', 'Cube.001', 'Plane'], materialColors: {
    Veneer: '#6b4226',
    'Material.001': '#4b5563',
    'Material.002': '#334155',
    'Material.003': '#1f2937',
    'Material.004': '#6b7280',
    'Material.007': '#8b5e3c',
    Fabric: '#475569',
  }, solidColliders: [
    { args: [2.0, 0.12, 0.6], position: [0.7, 1.8, -1.3] },
  ] },
]
