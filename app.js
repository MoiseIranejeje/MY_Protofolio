// app.js
// Custom Cursor
const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", (e) => {
    gsap.to(cursor, {
        x: e.clientX - 10,
        y: e.clientY - 10,
        duration: 0.5
    });
});

// Smooth Scroll Animations
gsap.registerPlugin(ScrollTrigger);

// Animate Hero Text
gsap.from(".hero-title", { opacity: 0, y: 50, duration: 1 });
gsap.from(".hero-subtitle", { opacity: 0, y: 30, delay: 0.3, duration: 1 });

// 3D Portrait (Using Three.js)
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
renderer.setSize(300, 300);
document.getElementById("3d-portrait").appendChild(renderer.domElement);

// Add a 3D model or sphere
const geometry = new THREE.SphereGeometry(1, 32, 32);
const material = new THREE.MeshBasicMaterial({ color: 0x6e45e2 });
const sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);

camera.position.z = 2;

function animate() {
    requestAnimationFrame(animate);
    sphere.rotation.x += 0.01;
    sphere.rotation.y += 0.01;
    renderer.render(scene, camera);
}
animate();

// Particles.js Background
particlesJS.load("particles-js", "particles.json", function() {
    console.log("Particles loaded!");
});