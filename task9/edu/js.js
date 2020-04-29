// let timetID=setTimeout(sayHello,3000);
// clearTimeout(timetID);
// function sayHello() {
//     alert('Hello World');
// }
// let timetID=setInterval(sayHello,3000);
// //clearTimeout(timetID);
// function sayHello() {
//     alert('Hello World');
// }

// рекурсивный вызов setTimeout вместо  setInterval
// let timetID=setTimeout(function log() {
//     console.log('Hello World');
//     setTimeout(log,3000);
//     // рекурс. вызов
// },);
//
let btn = document.querySelector('.btn');
let elem = document.querySelector('.box');

function myAnimation() {
    let pos = 0;

    let id = setInterval(frame,10);
    function frame() {
        if (pos == 300){
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + "px";
            elem.style.left = pos + "px";
        }
    }
}
btn.addEventListener("click",myAnimation);
let btnbock = document.querySelector(".btn-block"),
    btns = document.getElementsByTagName('button');

btnbock.addEventListener('click',function (event) {
    if (event.target && event.target.matches('button.first')){
    //if (event.target && event.target.classList.contains('first')){
    //if (event.target && event.target.tagName == "BUTTON"){
       console.log("Hello!");
   }
});