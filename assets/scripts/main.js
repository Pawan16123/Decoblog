var banner = document.getElementsByClassName("banner");
var newsLetter = document.getElementsByClassName("newsletter");
var hamb = document.getElementsByClassName("hamburger");
var mmenu = document.getElementsByClassName("social-media-mobile");

// alert(marginleft);
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
if(document.documentElement.clientWidth >1600){
    var style = window.getComputedStyle(document.getElementById('targetme'));
    var marginleft = style.getPropertyValue('margin-left'); 
    var values = 100 + parseInt(marginleft);
    var value2 = 20 + parseInt(marginleft);
    document.getElementsByClassName("banner-txt")[0].style.left = values+"px";
    document.getElementsByClassName("banner-right")[0].style.right = value2+"px";
    console.log(marginleft);
    console.log(values);
}

window.addEventListener("resize", myFunction);
function myFunction() {
if(document.documentElement.clientWidth >1600){
    var style = window.getComputedStyle(document.getElementById('targetme'));
    var marginleft = style.getPropertyValue('margin-left'); 
    var values = 100 + parseInt(marginleft);
    var value2 = 20 + parseInt(marginleft);
    document.getElementsByClassName("banner-txt")[0].style.left = values+"px";
    document.getElementsByClassName("banner-right")[0].style.right = value2+"px";
    console.log(marginleft);
    console.log(values);
    }
}


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

