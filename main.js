import * as THREE from 'three';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js'
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Loader for our scene
const loader = new GLTFLoader();
loader.load(
  "/ancient_ruin.gltf",
  function (gltf) {
    scene.add(gltf.scene);
    render()

  },
  undefined,
  function (error) {
    console.error(error);
  }
);

const controls = new OrbitControls( camera, renderer.domElement );
controls.listenToKeyEvents( window ); // optional

// scene.background = new THREE.Color(0xf0f0f0);

// const light = new THREE.AmbientLight( 0x15248f ); // soft white light
// light.intensity = 3;
const light = new THREE.PointLight( 0x15248f, 3, 100 );
light.position.set( -30, 30, -30 );
scene.add( light );

camera.position.y = 10
camera.position.z = 15;
camera.lookAt(new THREE.Vector3(0,0,0))

function render() {
  requestAnimationFrame( render );

  renderer.render(scene, camera);
}

render();
