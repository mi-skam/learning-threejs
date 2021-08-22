import './style.css';
import {
  Scene,
  BoxGeometry,
  MeshBasicMaterial,
  Mesh,
  PerspectiveCamera,
  WebGLRenderer,
} from 'three';

// 4 elements are needed
// 1. Scene

const scene = new Scene();

// 2. Adding objects (=mesh)
// mesh = geometry + material

// Red cube
const geometry = new BoxGeometry(1, 1, 1);
const material = new MeshBasicMaterial({ color: 0xff0000 });
const mesh = new Mesh(geometry, material);

// Aading to the scene
scene.add(mesh);

// 3. Camera
const viewport = {
  width: 800,
  height: 600,
};
const camera = new PerspectiveCamera(75, viewport.width / viewport.height); // fov = vertical vision angle, aspect ratio = width / height
camera.position.z = 3;
scene.add(camera);

// 4. Renderer, render the scene to the HTML canvas element
const canvas = document.querySelector('.webgl');
const renderer = new WebGLRenderer({
  canvas,
});
renderer.setSize(viewport.width, viewport.height);

renderer.render(scene, camera);
