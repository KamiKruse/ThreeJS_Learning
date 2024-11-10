import './style.css'
import * as THREE from 'three';

//Scene
const scene = new THREE.Scene()

//Mesh
// const geometry = new THREE.BoxGeometry(1,1,1)
// const material = new THREE.MeshBasicMaterial({color: 0xff0000})
// const mesh = new THREE.Mesh(geometry, material)
// scene.add(mesh)
// mesh.position.set(0.7, -0.6, 1)
// mesh.scale.set(2,1,1)
const group = new THREE.Group()
scene.add(group)
group.position.y = 1
group.rotation.y = 2
group.scale.y = 3
const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({color: 0xffff00})
)
group.add(cube1)

const cube2 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({color: 0x00ff00})
)
group.add(cube2)
cube2.position.set(-2,0,0)

const cube3 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({color: 0x00ffff})
)
group.add(cube3)
cube3.position.set(2,0,0)


const sizes = {
    width: 800,
    height: 600
}
const axesHelper = new THREE.AxesHelper();
scene.add(axesHelper)
//Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width/sizes.height)
camera.position.z = 5
scene.add(camera)

//Renderer
const canvas = document.querySelector('.webgl')
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
})

renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera);
// const animate = () => {
//     mesh.rotation.x += 0.01;
//     mesh.rotation.y += 0.01
//     renderer.render(scene, camera);
// }
// renderer.setAnimationLoop(animate)
