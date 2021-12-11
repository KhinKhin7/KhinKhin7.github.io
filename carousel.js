//https://www.youtube.com/watch?v=KcdBOoK3Pfw// link to tutorial on how to make img carousel 


const carousel = document.querySelector('.pics');
const images = document.querySelectorAll('.pics img'); //selects all images//


//buttons//
const backBut = document.querySelector("#backbutton");
const nextBut = document.querySelector("#nextbutton");

//which pic you're on//
let counter = 1;
const size = images[0].clientWidth; //width of img//

//translate the x, moves one pic forward bc of counter //
carousel.style.transform = 'translateX('+ (-size *counter) + 'px)';



//button //
nextBut.addEventListener("click",() => {
	carousel.style.transition = "transform 0.4s ease-in-out"
	//add one//
	counter++;
	carousel.style.transform = 'translateX('+ (-size *counter) + 'px)';
});