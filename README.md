# Portafolio 3D · Nicolás Granada

Oficina 3D interactiva (React + Vite + React Three Fiber). Mantiene la estructura del repositorio del curso
(`pages/world/WorldPage.jsx`, `components/Ambience|Controls`, `components/models-3d/`, `public/`, Docker, oxlint).

## Ejecutar
`npm install && npm run dev` (http://localhost:5173) · o `docker compose up --build`

## Arquitectura
- `src/pages/world/WorldPage.jsx`: Canvas, renderer (WebGPU → respaldo WebGL), física, teclado y overlays.
- `src/components/`: `Ambience` (luces + sombras), `Controls` (OrbitControls), `ui/Overlay` (HUD, paneles, loader).
- `src/components/models-3d/`: `Floor`, `Desk`, `ProjectObject`, `Player`, `FallingBlocks`, `Title3D`, `BlenderModel`.
- `src/data/portfolio.js`: **tus datos** (perfil, habilidades, proyectos, contacto, modelos Blender).
- Tecnologías: three, @react-three/fiber, drei, @react-three/rapier, Vite, Docker, Blender.

## Cumplimiento de historias de usuario
| HU | Implementación |
|---|---|
| 01 | Canvas + `Loader` con progreso; assets livianos (<5 s) |
| 02 | `OrbitControls` (arrastrar/zoom) |
| 03, 15 | Suelo con mapas color/AO/normal/rugosidad; metal/rugosidad en materiales |
| 04 | `meshMatcapMaterial` en libros, taza, esfera, avatar |
| 05 | `directionalLight castShadow` + `receiveShadow` en suelo |
| 06, 10, 11 | `ProjectObject`: clic abre panel con imagen/video; etiqueta `Html` anclada |
| 07 | Hover: escala/rotación con `damp`, revierte al salir |
| 08, 13 | `KeyboardControls` WASD/flechas; avatar con cuerpo Rapier bloqueado por escritorio/paredes |
| 09 | `Text3D` con nombre y título |
| 12 | `FallingBlocks` (RigidBody) cae y se detiene en el suelo |
| 14, 20, 21 | `BlenderModel` carga `.glb` desde `public/models` (ver flujo abajo) |
| 16 | Geometrías ligeras, `dpr` limitado, matcaps; verifica ≥30 FPS en tu equipo |
| 17 | `three/webgpu` si `navigator.gpu`; si no, WebGLRenderer. Insignia "Render" visible |
| 18 | Panel Contacto: correo, LinkedIn, GitHub |
| 19 | Este README + panel "Documentación" (graba además un video corto) |

## Flujo Blender (HU-14, 15, 20, 21)
1. Esculpe alta resolución → retopología baja → **UV Unwrap** con costuras ocultas (comprueba con textura de cuadrícula).
2. **Bake** de normales (alta→baja), AO y color; pinta mapas PBR (base color, normal, roughness).
3. Exporta **glTF Binary (.glb)** con materiales/texturas → `public/models/`.
4. Regístralo en `blenderModels` de `portfolio.js`: `{ url: '/models/mi.glb', position: [0,0,0], scale: 1 }`.

## Pendientes tuyos
Reemplaza correo/LinkedIn/GitHub, habilidades, proyectos y capturas (`public/projects/`), y añade tus modelos de Blender.
