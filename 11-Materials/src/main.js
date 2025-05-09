import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import './main.css'

const canvas = document.querySelector('.canvas')
const scene = new THREE.Scene()

const textureLoader = new THREE.TextureLoader()

const doorColourTexture = textureLoader.load('./textures/door/color.jpg')
const doorAlphaTexture = textureLoader.load('./textures/door/alpha.jpg')
const doorAmbientOcclusionTexture = textureLoader.load('./textures/ambientOcclusion/color.jpg')
const doorHeightTexture = textureLoader.load('./textures/door/height.jpg')
const doorNormalTexture = textureLoader.load('./textures/door/normal.jpg')
const doorMetalnessTexture = textureLoader.load('./textures/door/metalness.jpg')
const doorRoughnessTexture = textureLoader.load('./textures/door/roughness.jpg')

const material = new THREE.MeshBasicMaterial()

const sphere = new THREE.Mesh(
  new THREE.SphereGeometry(0.5, 16, 16),
  material
)
sphere.position.x = -1.5

const plane = new THREE.Mesh(
  new THREE.PlaneGeometry(1, 1),
  material
)
plane.position.x = 0

const torus = new THREE.Mesh(
  new THREE.TorusGeometry(0.3, 0.2, 16, 32),
  material
)
torus.position.x = 1.5

scene.add(sphere, plane, torus)


const sizes = {
  width: window.innerWidth,
  height: window.innerHeight
}

window.addEventListener('resize', () => {
  sizes.width = window.innerWidth
  sizes.height = window.innerHeight
  camera.aspect = sizes.width / sizes.height
  camera.updateProjectionMatrix()
  renderer.setSize(sizes.width, sizes.height)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  0.1,
  100
)
camera.position.x = 1
camera.position.y = 1
camera.position.z = 2
scene.add(camera)

const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

const renderer = new THREE.WebGLRenderer({
  canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

const clock = new THREE.Clock()
const tick = () => {
  const elapsedTime = clock.getElapsedTime()

  sphere.rotation.y = 0.1 * elapsedTime
  plane.rotation.y = 0.1 * elapsedTime
  torus.rotation.y = 0.1 * elapsedTime
  sphere.rotation.x = -0.15 * elapsedTime
  plane.rotation.x = -0.15 * elapsedTime
  torus.rotation.x = -0.15 * elapsedTime

  controls.update()
  renderer.render(scene, camera)
  window.requestAnimationFrame(tick)
}

tick()