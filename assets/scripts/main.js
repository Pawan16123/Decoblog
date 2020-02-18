var banner = document.getElementsByClassName("banner");
var newsLetter = document.getElementsByClassName("newsletter");
var hamb = document.getElementsByClassName("hamburger");
var mmenu = document.getElementsByClassName("social-media-mobile");
// var body = document.getElementById("body");
console.log(newsLetter[0]);

newsLetter[0].style.marginTop = banner[0].offsetHeight-47+"px" ;
window.addEventListener("resize",triggerMe);
function triggerMe(){
    newsLetter[0].style.marginTop = banner[0].offsetHeight-47+"px" ;
    // console.log(width)
}

hamb[0].addEventListener("click",function(){
    mmenu[0].classList.toggle("displaytoggle");

});

// Just for flex-box
// var boxes = document.getElementsByClassName("boxes");


// function getHeight() {
//     height = Math.floor((Math.random() * 300) + 200);
//     return height;
// }

// for(i=0; i<boxes.length; i++){
//     console.log(boxes[i]);
//     boxes[i].style.height = getHeight()+"px";
//     console.log(height);

// }

