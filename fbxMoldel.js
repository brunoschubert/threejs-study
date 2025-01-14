var container, controls, stats;
var camera, scene, renderer, light;

var clock = new THREE.Clock();

var mixer;

init();
animate();

function init() {
  container = document.createElement("div");
  document.body.appendChild(container);

  camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    1,
    2000
  );
  camera.position.set(100, 200, 300);

  controls = new THREE.OrbitControls(camera);
  controls.target.set(0, 100, 0);
  controls.update();

  scene = new THREE.Scene();
  scene.background = new THREE.Color(0xa0a0a0);
  scene.fog = new THREE.Fog(0xa0a0a0, 200, 1000);

  light = new THREE.HemisphereLight(0xffffff, 0x444444);
  light.position.set(0, 200, 0);
  scene.add(light);

  light = new THREE.DirectionalLight(0xffffff);
  light.position.set(0, 200, 100);
  scene.add(light);

  // ground
  var mesh = new THREE.Mesh(
    new THREE.PlaneBufferGeometry(2000, 2000),
    new THREE.MeshPhongMaterial({ color: 0x999999, depthWrite: false })
  );
  mesh.rotation.x = -Math.PI / 2;
  scene.add(mesh);

  var grid = new THREE.GridHelper(2000, 20, 0x000000, 0x000000);
  grid.material.opacity = 0.2;
  grid.material.transparent = true;
  scene.add(grid);

  // model
  var loader = new THREE.FBXLoader();
  loader.load("models/fbx/suzane_2kk.fbx", function(object) {
    // mixer = new THREE.AnimationMixer(object);

    // var action = mixer.clipAction(object.animations[0]);
    // action.play();
    object.position.x = -200;
    scene.add(object);
  });
  // model
  var loader = new THREE.FBXLoader();
  loader.load("models/fbx/suzane_2kk.fbx", function(object) {
    // mixer = new THREE.AnimationMixer(object);

    // var action = mixer.clipAction(object.animations[0]);
    // action.play();
    object.position.x = -100;
    scene.add(object);
  });
  // model
  var loader = new THREE.FBXLoader();
  loader.load("models/fbx/suzane_2kk.fbx", function(object) {
    // mixer = new THREE.AnimationMixer(object);

    // var action = mixer.clipAction(object.animations[0]);
    // action.play();
    object.position.x = 0;
    scene.add(object);
  });
  // model
  var loader = new THREE.FBXLoader();
  loader.load("models/fbx/suzane_2kk.fbx", function(object) {
    // mixer = new THREE.AnimationMixer(object);

    // var action = mixer.clipAction(object.animations[0]);
    // action.play();
    object.position.x = 100;
    scene.add(object);
  });
  // model
  var loader = new THREE.FBXLoader();
  loader.load("models/fbx/suzane_2kk.fbx", function(object) {
    // mixer = new THREE.AnimationMixer(object);

    // var action = mixer.clipAction(object.animations[0]);
    // action.play();
    object.position.x = 200;
    scene.add(object);
  });
  // model
  var loader = new THREE.FBXLoader();
  loader.load("models/fbx/suzane_2kk.fbx", function(object) {
    // mixer = new THREE.AnimationMixer(object);

    // var action = mixer.clipAction(object.animations[0]);
    // action.play();
    object.rotateZ(THREE.Math.degToRad(180));
    object.position.x = -100;
    object.position.y = 150;
    scene.add(object);
  });
  // model
  var loader = new THREE.FBXLoader();
  loader.load("models/fbx/suzane_2kk.fbx", function(object) {
    // mixer = new THREE.AnimationMixer(object);

    // var action = mixer.clipAction(object.animations[0]);
    // action.play();
    object.rotateZ(THREE.Math.degToRad(180));
    object.position.x = 0;
    object.position.y = 150;
    scene.add(object);
  });
  // model
  var loader = new THREE.FBXLoader();
  loader.load("models/fbx/suzane_2kk.fbx", function(object) {
    // mixer = new THREE.AnimationMixer(object);

    // var action = mixer.clipAction(object.animations[0]);
    // action.play();
    object.rotateZ(THREE.Math.degToRad(180));
    object.position.x = 100;
    object.position.y = 150;
    scene.add(object);
  });
  // model
  var loader = new THREE.FBXLoader();
  loader.load("models/fbx/suzane_2kk.fbx", function(object) {
    // mixer = new THREE.AnimationMixer(object);

    // var action = mixer.clipAction(object.animations[0]);
    // action.play();
    object.rotateZ(THREE.Math.degToRad(180));
    object.position.x = 200;
    object.position.y = 150;
    scene.add(object);
  });
  // model
  var loader = new THREE.FBXLoader();
  loader.load("models/fbx/suzane_2kk.fbx", function(object) {
    // mixer = new THREE.AnimationMixer(object);

    // var action = mixer.clipAction(object.animations[0]);
    // action.play();
    object.rotateZ(THREE.Math.degToRad(180));
    object.position.x = -200;
    object.position.y = 150;
    scene.add(object);
  });
  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  container.appendChild(renderer.domElement);

  // stats
  stats = new Stats();
  container.appendChild(stats.dom);

  window.addEventListener("resize", onWindowResize, false);
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);
}

//
function animate() {
  requestAnimationFrame(animate);

  var delta = clock.getDelta();

  if (mixer) mixer.update(delta);

  renderer.render(scene, camera);

  stats.update();
}
