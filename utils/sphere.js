let scene, camera, renderer, globe;
let currentColor = 0x00aaff;

export function initSphere() {
  const container = document.getElementById('planet-container');

  scene = new THREE.Scene();
  
  camera = new THREE.PerspectiveCamera(
    60,
    container.clientWidth / container.clientHeight,
    0.1,
    1000
  );
  camera.position.set(0, 0, 3);

  renderer = new THREE.WebGLRenderer({ 
    antialias: true, 
    alpha: true,
    preserveDrawingBuffer: true 
  });
  
  updateRendererSize(container);
  container.appendChild(renderer.domElement);

  const geometry = new THREE.SphereGeometry(1, 32, 32);
  const wireframe = new THREE.WireframeGeometry(geometry);
  globe = new THREE.LineSegments(wireframe);
  globe.material.depthTest = false;
  globe.material.opacity = 0.5;
  globe.material.transparent = true;
  globe.material.color = new THREE.Color(currentColor);
  scene.add(globe);

  const light = new THREE.PointLight(0xffffff, 1);
  light.position.set(5, 5, 5);
  scene.add(light);

  window.addEventListener('resize', () => onWindowResize(container));
  
  animate();
}

function updateRendererSize(container) {
  const width = container.clientWidth;
  const height = container.clientHeight;
  
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  
  camera.position.z = 3 * (height / 500);
}

function onWindowResize(container) {
  updateRendererSize(container);
}

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

export function updateSphere(gesture) {
  if (!globe) return;

  if (gesture === 'zoom_in') {
    globe.scale.multiplyScalar(1.02);
    globe.material.color.set(0x00aaff); // bleu
  } else if (gesture === 'zoom_out') {
    globe.scale.multiplyScalar(0.98);
    globe.material.color.set(0x00ff00); // vert
  } else if (gesture === 'rotate_left') {
    globe.rotation.y -= 0.05;
    globe.material.color.set(0xff0000); // rouge
  } else if (gesture === 'rotate_right') {
    globe.rotation.y += 0.05;
    globe.material.color.set(0xff0000); // rouge
  }
}

// let scene, camera, renderer, globe;
// let currentColor = 0x00aaff;

// export function initSphere() {
//   const container = document.getElementById('planet-container');

//   scene = new THREE.Scene();
//   camera = new THREE.PerspectiveCamera(60, container.clientWidth / container.clientHeight, 0.1, 1000);
//   camera.position.set(0, 0, 3); // Centre bien la caméra en face du globe

//   renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
//   renderer.setSize(container.clientWidth, container.clientHeight);
//   container.appendChild(renderer.domElement);

//   const geometry = new THREE.SphereGeometry(1, 32, 32);
//   const wireframe = new THREE.WireframeGeometry(geometry);
//   globe = new THREE.LineSegments(wireframe);
//   globe.material.depthTest = false;
//   globe.material.opacity = 0.5;
//   globe.material.transparent = true;
//   globe.material.color = new THREE.Color(currentColor);
//   scene.add(globe);

//   const light = new THREE.PointLight(0xffffff, 1);
//   light.position.set(5, 5, 5);
//   scene.add(light);

//   animate();
// }

// function animate() {
//   requestAnimationFrame(animate);
//   renderer.render(scene, camera);
// }

// export function updateSphere(gesture) {
//   if (!globe) return;

//   if (gesture === 'zoom_in') {
//     globe.scale.multiplyScalar(1.02);
//     globe.material.color.set(0x00aaff); // bleu
//   } else if (gesture === 'zoom_out') {
//     globe.scale.multiplyScalar(0.98);
//     globe.material.color.set(0x00ff00); // vert
//   } else if (gesture === 'rotate_left') {
//     globe.rotation.y -= 0.05;
//     globe.material.color.set(0xff0000); // rouge
//   } else if (gesture === 'rotate_right') {
//     globe.rotation.y += 0.05;
//     globe.material.color.set(0xff0000); // rouge
//   }
// }
