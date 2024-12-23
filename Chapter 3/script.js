import './style.css'
import * as THREE from 'three';

//Scene
const scene = new THREE.Scene()

//Mesh
const geometry = new THREE.BoxGeometry(1,1,1)
const material = new THREE.MeshBasicMaterial({color: 0xff0000})
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

const sizes = {
    width: 800,
    height: 600
}

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
