import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export interface Viewer {
  load(glb: Uint8Array): void;
  dispose(): void;
}

export function createViewer(canvas: HTMLCanvasElement): Viewer {
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setClearColor(0x1a1a1a);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000);
  camera.position.set(40, 30, 40);

  scene.add(new THREE.AmbientLight(0xffffff, 0.5));
  const dir = new THREE.DirectionalLight(0xffffff, 1.0);
  dir.position.set(40, 60, 40);
  scene.add(dir);

  const controls = new OrbitControls(camera, canvas);
  controls.target.set(10, 10, 10);
  controls.enableDamping = true;
  controls.dampingFactor = 0.08;
  controls.rotateSpeed = 1.0;
  controls.zoomSpeed = 1.0;
  controls.panSpeed = 1.0;
  controls.update();

  const resize = () => {
    const w = canvas.clientWidth;
    const h = canvas.clientHeight;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  };
  const ro = new ResizeObserver(resize);
  ro.observe(canvas);
  resize();

  let animationId = 0;
  const tick = () => {
    controls.update();
    renderer.render(scene, camera);
    animationId = requestAnimationFrame(tick);
  };
  tick();

  let currentRoot: THREE.Object3D | null = null;

  return {
    load(glb: Uint8Array): void {
      const loader = new GLTFLoader();
      const buffer = glb.buffer.slice(glb.byteOffset, glb.byteOffset + glb.byteLength) as ArrayBuffer;
      loader.parse(buffer, '', (gltf) => {
        if (currentRoot) scene.remove(currentRoot);
        currentRoot = gltf.scene;
        scene.add(currentRoot);
      });
    },
    dispose(): void {
      cancelAnimationFrame(animationId);
      ro.disconnect();
      renderer.dispose();
    },
  };
}
