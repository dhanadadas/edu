// promise
let drink = 0;

"use strict";
function shoot(arrow) {
	console.log('Вы сделали выстрел...');
	let promise = new Promise(function (resolve,reject) {
		setTimeout(function () {
			Math.random() > .5 ? resolve({}) : reject("Вы промахнулись");
		}, 300)
	});
	return promise;
}

function win(){
	console.log('Вы победили!');
	(drink === 1) ? bayBeer() : giveMoney();
}
function loose(){
	console.log('Вы проиграли!');
}
function giveMoney(){
	console.log("Вам дали денег");
}
function bayBeer(){
	console.log("Вам купили яд");
}

// как использовать промис
shoot({})
	.then(mark => console.log("Вы попали"))
	.then(win)
	.catch(loose);
