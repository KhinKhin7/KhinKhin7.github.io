//https://www.youtube.com/watch?v=KcdBOoK3Pfw// link to tutorial on how to make img carousel 
//https://www.w3schools.com/howto/howto_js_slideshow.asp// 

/*
var picIndex = 0;
showPics();

function showPics() {
  var i;
  var pics = document.getElementsByClassName("slideshow");
  for (i = 0; i < pics.length; i++) {
    pics[i].style.display = "none";
  }
  picIndex++;
  if (picIndex > pics.length) {picIndex = 1}
  pics[picIndex-1].style.display = "block";
//3000 changes image every 3 secs//
  setTimeout(showPics, 3000); 
}
*/

var picCounter = 1;
showPics(picCounter);

// Next/previous controls
function plusPics(n) {
  showPics(picCounter += n);
}

// Thumbnail image controls
function currentPic(n) {
  showPics(picCounter = n);
}

function showPics(n) {
  var i;
  var pics = document.getElementsByClassName("slideshow");
  if (n > pics.length) {picCounter = 1}
  if (n < 1) {picCounter = pics.length}
  for (i = 0; i < pics.length; i++) {
      pics[i].style.display = "none";
  }
  
  pics[picCounter-1].style.display = "block";

}