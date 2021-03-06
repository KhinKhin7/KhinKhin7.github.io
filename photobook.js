//https://www.youtube.com/watch?v=cghSq_dlgYU// tutorial on how to make a 3d book using three js// 

const div= document.querySelector("div.photobook");

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
div.appendChild( renderer.domElement );

//lighting - color of overall ambient light//
const ambient = new THREE.AmbientLight(0x222020)
scene.add(ambient)
//direction of lighting//
const light = new THREE.DirectionalLight(0xcee8f0)
//position x,y,z = 2,5,4//S
light.position.set(2,5,4)
scene.add(light)

//loading texture - adding my own images for the faces of the object//
const loader = new THREE.TextureLoader()

//determining which page is going to be on which side// left to right, top to bottom//
const urls=["open.png", "Spine.png", "Up.png", "Down.png", "Front.png", "Back.png"]
//changing materials of each side, mapping each one from above ^//
const materials = urls.map(url => {return new THREE.MeshToonMaterial({map: loader.load(url)})})
//shape- x=5, y=3.6, z=0.3//
const geometry = new THREE.BoxGeometry(5,3.6,0.3);
//replace material with materials
const cube = new THREE.Mesh( geometry, materials );
scene.add( cube );
//camera moves back as number gets higher- farther from object//
camera.position.z = 4.5;

function animate() {
	requestAnimationFrame( animate );
/* getting rid of cube rotation so that its not a loop
	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01; */
/* how far down the page I scrolled = y offset */
/* currentimeline - where we are atm 0 at top, 1 at bottom of screen*/
	const currentTimeline = window.pageYOffset/2000

/*multiply by pi to loop it all the way around.  
const rotationx = currentTimeline * Math.PI * 2
*/
/*rotation in x direction basing it on currentimeline*/ 
	const rotationx = currentTimeline * 0.6 - 0.6
/*rotation in y direction basing it on currentimeline*/ 
	const rotationy = (currentTimeline * -0.95 - 0.05) * Math.PI * 2
	cube.rotation.set(rotationx, rotationy, 0) 
	renderer.render( scene, camera );
}
animate();