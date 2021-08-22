import './style.css';
import {
  Scene,
  BoxGeometry,
  MeshBasicMaterial,
  Mesh,
  PerspectiveCamera,
  WebGLRenderer,
  AxesHelper,
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

mesh.position.x = 0.7;
mesh.position.y = -0.6;
mesh.position.z = 0;

mesh.scale.set(2, 0.5, 0.5);

// Aading to the scene
scene.add(mesh);

// Axes helper
const axesHelper = new AxesHelper(2);
scene.add(axesHelper);

// mesh position is of type Vector3
// Distance between center of a mesh and the center of the scene
console.log(mesh.position.length());

// 3. Camera
const viewport = {
  width: 800,
  height: 600,
};
const camera = new PerspectiveCamera(75, viewport.width / viewport.height); // fov = vertical vision angle, aspect ratio = width / height
camera.position.z = 4;
camera.position.y = 1;
camera.position.x = 1;
scene.add(camera);

// 4. Renderer, render the scene to the HTML canvas element
const canvas = document.querySelector('.webgl');
const renderer = new WebGLRenderer({
  canvas,
});
renderer.setSize(viewport.width, viewport.height);

renderer.render(scene, camera);
