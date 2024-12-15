import './style.css'
import * as THREE from 'three';
import gsap from 'gsap'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

console.log(OrbitControls);

//Cursor
// const cursor = {
//     x: 0,
//     y: 0
// }
// window.addEventListener("mousemove", (event) => {
//     cursor.x = event.clientX/sizes.width - 0.5 // Value normally goes from 0 to 1. This one ensures it goes from -0.5 to +0.5
//     cursor.y = -(event.clientY/sizes.height - 0.5)
// })
//Scene
const scene = new THREE.Scene()

//Mesh
const geometry = new THREE.BoxGeometry(1,1,1)
const material = new THREE.MeshBasicMaterial({color: 0xff0000})
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)
mesh.position.set(0, 0, 0)
// mesh.scale.set(2,1,1)
// const group = new THREE.Group()
// scene.add(group)
// group.position.y = 1
// group.rotation.y = 2
// group.scale.y = 3
// const cube1 = new THREE.Mesh(
//     new THREE.BoxGeometry(1,1,1),
//     new THREE.MeshBasicMaterial({color: 0xffff00})
// )
// group.add(cube1)

// const cube2 = new THREE.Mesh(
//     new THREE.BoxGeometry(1,1,1),
//     new THREE.MeshBasicMaterial({color: 0x00ff00})
// )
// group.add(cube2)
// cube2.position.set(-2,0,0)

// const cube3 = new THREE.Mesh(
//     new THREE.BoxGeometry(1,1,1),
//     new THREE.MeshBasicMaterial({color: 0x00ffff})
// )
// group.add(cube3)
// cube3.position.set(2,0,0)


const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>{
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    //Camera update
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    //Renderer Update
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

})

window.addEventListener('dblclick', ()=>{
    const fullscreenElement  = document.fullscreenElement || document.webkitFullscreenElement
    if (!fullscreenElement){
        if(canvas.requestFullscreen){
             canvas.requestFullscreen()
        } else if( canvas.webkitRequestFullscreen){
            canvas.webkitRequestFullscreen()
        }
    } else {
        if(document.exitFullscreen){
             document.exitFullscreen()
        } else if(document.webkitExitFullscreen){
            document.webkitExitFullscreen()
        }
       
    }
})

const axesHelper = new THREE.AxesHelper();
scene.add(axesHelper)

//Camera
const aspectRatio = sizes.width / sizes.height;
const camera = new THREE.PerspectiveCamera(75, aspectRatio, .01, 100)
camera.position.z = 3

// const camera = new THREE.OrthographicCamera(-1 * aspectRatio, 1 * aspectRatio,1,-1, .01, 100)
// scene.add(camera)


//Renderer
const canvas = document.querySelector('.webgl')
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
})

//Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

//Set Size
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

const clock = new THREE.Clock()

//Alternative way of animating things. Need to look up
// const animate = () => {
//     mesh.rotation.x += 0.01;
//     mesh.rotation.y += 0.01
//     renderer.render(scene, camera);
// }
// renderer.setAnimationLoop(animate)


//GreenSock Animation
// gsap.to(group.position, {duration: 1, delay: 1, x: 2})
// gsap.to(group.position, {duration: 1, delay: 2, x: -2})
// gsap.to(group.position, {duration: 1, delay: 3, x: 0})
const tick = ()=> {
    //Clock
    // const elapsedTime = clock.getElapsedTime()
    // mesh.rotation.y = elapsedTime

    //Camera Update - This is where the earlier cursor is used
    // camera.position.x = Math.sin(cursor.x * Math.PI * 2) * 3;
    // camera.position.z = Math.cos(cursor.x * Math.PI * 2) * 3;
    // camera.position.y = cursor.y * 5;
    // mesh.rotation.x = cursor.x
    // mesh.rotation.y = cursor.y
    // camera.lookAt(mesh.position)
    controls.update()
    renderer.render(scene, camera);
    window.requestAnimationFrame(tick)
}

tick()
