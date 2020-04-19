let elmMenu = document.querySelectorAll('.menu .menu-item');

//document.body.replaceChild(elmMenu[1],elmMenu[2]);

elmMenu[2].innerHTML='Третий пункт';
elmMenu[1].innerHTML='Второй пункт';

menuItemLi = document.createElement("li");
menuItemLi.classList.add("menu-item");
menuItemLi.textContent = "Пятый элемент";

menu = document.getElementsByClassName("menu")[0];
menu.appendChild(menuItemLi);
let body =document.body;
console.log(body);
//style.background = 'img/apple_true.jpg';
body.style.background = 'url(../test/img/apple_true.jpg) center no-repeat';
let title = document.getElementById('title');
title.innerHTML='Мы продаем только подлинную технику Apple';
let adv = document.querySelector('.adv');
adv.remove();

let foo = prompt("Ваше отношение к технике apple?",'');
let promptElm = document.getElementById('prompt');
promptElm.textContent = foo;