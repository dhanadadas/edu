// NO promise
let drink = 0;

"use strict";
function shoot(arrow, headshot, fail) {
	console.log('Вы сделали выстрел...');
	setTimeout(function () {
		Math.random() > .5 ? headshot({}) : fail("Вы промахнулись");
	}, 300)
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

shoot({},
	function (mark) {
		win(mark,bayBeer,giveMoney);
	},
	function (miss) {
		loose()
	}
);
