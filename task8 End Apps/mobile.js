window.addEventListener("DOMContentLoaded",function () {
    let box = document.querySelector('.box');

    // box.addEventListener("touchstart", function (e) {
    //     e.preventDefault();
    //     console.log("Red box: touchstart");
    //     console.log(e.target);
    //     console.log(e.touches[0].target);
    //     console.log(e.changedTouches);
    //     console.log(e.targetTouches);
    // });

    box.addEventListener("touchmove", function (e) {
        e.preventDefault();
        console.log("Red box: touchmove (" + e.touches[0].pageX + " X "+ e.touches[0].pageY+ ")");
    });

    box.addEventListener("touchend", function (e) {
        e.preventDefault();
        console.log("Red box: touchend");
    });
});


//new RegExp('pattern',"flags");
let ans = prompt("Введите Ваше имя",'');
let reg = /\d/ig;
//console.log(ans.search(reg));
console.log(ans.match(reg));
//console.log(reg.test(ans));



let str = "My name is R2D2";
console.log(str.match(/\w\d\w\d/i));
//
// let pass = prompt("Введите пароль");
// console.log(pass.replace(/./g, "*"));
// alert('12-56-32'.replace(/-/ig),':'); //12undefined56undefined32