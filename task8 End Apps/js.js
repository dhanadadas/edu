let btn = document.getElementsByClassName('btn');
let wrap = document.querySelector('.wrapper');
let link = document.querySelector('a');
let btns = document.querySelectorAll(".btn");

btn[1].onclick = function () {
    //alert("Вы нажали кнопку 2");
};
btn[1].onclick = function () {
    //alert("Вы нажали кнопку 2 agen");
};// заменяет обработчик


btn[1].addEventListener('click', function () {
    alert("Вы нажали кнопку 2");
    alert("Вы опять нажали кнопку 2");
});
btn[1].addEventListener('click', function () {
    alert("Вы еще раз нажали кнопку 2");
});
btn[1].addEventListener('mouseenter', function () {
   // alert("Вы навели на кнопку 2");
});

btn[2].addEventListener('click', function (event) {
    let target = event.target;
    target.style.display="none";
    console.log("Произошло событие: "+event.type + " на элементе "+ event.target)
});
btn[3].addEventListener('click', function (event) {
    console.log("Произошло событие: "+event.type + " на элементе "+ event.target)
});
wrap.addEventListener("click",function (event) {
    console.log("Произошло событие wrap: "+event.type + " на элементе "+ event.target)
});
link.addEventListener('click', function (event) {
    event.preventDefault();
    console.log("Произошло событие: "+event.type + " на элементе "+ event.target)
});

btns.forEach(function (item) {
item.addEventListener("mouseenter",function () {
    console.log("Вышли");
})
});