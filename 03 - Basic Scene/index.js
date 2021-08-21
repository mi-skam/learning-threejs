// 4 elements are needed
// 1. Scene

const scene = new THREE.Scene();

// 2. Adding objects (=mesh)
// mesh = geometry + material

// Red cube
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);

// Aading to the scene
scene.add(mesh);

// 3. Camera
const viewport = {
  width: 800,
  height: 600,
};
const camera = new THREE.PerspectiveCamera(
  75,
  viewport.width / viewport.height
); // fov = vertical vision angle, aspect ratio = width / height
camera.position.z = 3;
scene.add(camera);

// 4. Renderer, render the scene to the HTML canvas element
const canvas = document.querySelector('.webgl');
const renderer = new THREE.WebGLRenderer({
  canvas,
});
renderer.setSize(viewport.width, viewport.height);

renderer.render(scene, camera);
