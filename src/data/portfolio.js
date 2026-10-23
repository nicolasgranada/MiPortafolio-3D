// Contenido editable del portafolio (cambia aquí tus datos reales)
export const profile = {
  name: 'Nicolás Granada',
  title: 'Desarrollador Web & 3D · Ingeniería de Sistemas',
  university: 'Universidad del Valle',
  greeting: 'Hola, soy Nicolás Granada',
  tagline: 'Explora mi oficina de desarrollador en 3D: habilidades, proyectos y contacto.',
  bio: 'Estudiante de Ingeniería de Sistemas de la Universidad del Valle (Cali, Colombia). Me apasiona el diseño de software y el desarrollo de aplicaciones web, y exploro experiencias interactivas en 3D con React Three Fiber y Blender.',
  email: 'tu-correo@correounivalle.edu.co',
  linkedin: 'https://www.linkedin.com/in/tu-usuario',
  github: 'https://github.com/tu-usuario',
}

export const skillGroups = [
  { group: 'Programación', items: ['JavaScript', 'Python', 'Java', 'SQL', 'C++'] },
  { group: 'Web & 3D', items: ['React', 'Three.js', 'React Three Fiber', 'HTML/CSS', 'Vite', 'Blender'] },
  { group: 'Diseño de software', items: ['UML', 'Patrones de diseño', 'Arquitectura por capas', 'Bases de datos', 'APIs REST'] },
  { group: 'Herramientas', items: ['Git/GitHub', 'Docker', 'Linux', 'Figma'] },
]

export const aptitudes = [
  { name: 'Programación', level: 85 },
  { name: 'Diseño de software', level: 80 },
  { name: 'Desarrollo web', level: 85 },
  { name: 'Modelado y experiencias 3D', level: 70 },
]

// Proyectos: cada uno es un objeto 3D clicable. kind: 'image' | 'video' (url embebible)
export const projects = [
  { id: 'p1', title: 'Portafolio 3D', shape: 'octa', color: '#38bdf8', position: [-2.4, 1.3, 0.6],
    desc: 'Oficina interactiva con React Three Fiber, física, materiales PBR y renderizado WebGPU con respaldo a WebGL.',
    tech: ['React', 'R3F', 'Rapier', 'WebGPU'], kind: 'image', media: '/projects/p1.svg', link: profile.github },
  { id: 'p2', title: 'Gestor Académico', shape: 'box', color: '#c084fc', position: [0, 1.5, 1.2],
    desc: 'Aplicación web para gestionar materias, horarios y notas, con diseño por capas y base de datos relacional.',
    tech: ['React', 'Node', 'SQL', 'UML'], kind: 'image', media: '/projects/p2.svg', link: profile.github },
  { id: 'p3', title: 'API de Inventario', shape: 'torus', color: '#fbbf24', position: [2.4, 1.3, 0.6],
    desc: 'API REST documentada para inventario, con pruebas y contenedor Docker.',
    tech: ['Python', 'REST', 'Docker', 'SQL'], kind: 'image', media: '/projects/p3.svg', link: profile.github },
]

// Modelos propios exportados desde Blender (.glb en /public/models). Ej: { url:'/models/escritorio.glb', position:[0,0,0], scale:1 }
export const blenderModels = []
