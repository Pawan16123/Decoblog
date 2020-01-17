var banner = document.getElementsByClassName("banner");
var newsLetter = document.getElementsByClassName("newsletter");
// var body = document.getElementById("body");
console.log(newsLetter[0]);

newsLetter[0].style.marginTop = banner[0].offsetHeight-47+"px" ;
window.addEventListener("resize",triggerMe);
function triggerMe(){
    newsLetter[0].style.marginTop = banner[0].offsetHeight-47+"px" ;
    console.log(width)
}


