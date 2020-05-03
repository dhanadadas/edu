// 022 Конструкторы и классы

// ES5
function  User(name, id) {
	this.name = name;
	this.id = id;
	this.human = true;
	this.hello = function () {
		console.log('Hello! ' + this.name);
	}
}

User.prototype.exit = function (name){
	console.log('Пользователь '+this.name+' ушел');
};

let ivan = new User('Ivan', 25),
	alex = new User('Alex',20);

console.log(ivan);
console.log(alex);

ivan.exit();

// ES 6
class UserES6 {
	constructor(name, id) {
		this.name = name;
		this.id = id;
		this.human = true;
	}
	hello() {
			console.log(`Hello! ${this.name}`);
	}
	exit() {
		console.log(`Пользователь ${this.name} ушел`);
	}

}

let ivanES6 = new User('Ivan', 25),
	alexES6 = new User('Alex',20);
console.log(ivanES6);
console.log(alexES6);
ivanES6.hello();
alexES6.hello();
alexES6.exit();

// this

function showThis(a,b) {
	console.log(this);
	function sum() {
		console.log(this);
		return this.a + this.b;
	}

	console.log(sum());
}
showThis(4,5);
showThis(5,5);

// функция внутри функции всегда window

// та же задача с замыканием
function showThis2(a,b) {
	console.log(this);
	function sum() {
		console.log(this);
		return a + b; // замыкание
	}

	console.log(sum());
}
showThis2(4,5);
showThis2(5,5);


// "use strict" - работать не будет. Не могут найти контекст вызова. Разница с ES6
// №1 получаем this window или undefined в зависимасти от "use strict".

let obj ={
	a: 20,
	b: 15,
	sum: function () {
		console.log(this);
		function shout() {
			console.log(this); // функция в функции потеряла контекст
		}
	}
};
obj.sum();
// №2 получаем при вызове объекта сам объект

// ES6 вызов через new
// №3 получаем новый объект в качестве this.

// Определение контекста вручную (call, apply)
let user = {
	name: "John"
};
function sayName() {
	//console.log(this);
	console.log(this.name);
}
sayName.call(user);
sayName.apply(user);
// №4 насильное определение контекста
// разница call и apply
function sayName2(surname) {
	//console.log(this);
	console.log(this.name + " " + surname);
}
sayName2.call(user,'Smith');// можно передать параметр
sayName2.apply(user, ['Snow']);// можно передать массив
//

// последний тип вызова bind. Определение контекста
function count(number) {
		return this * number;
}
let double = count.bind(2);// все что попадает в bind становится this. жестая привязка
console.log(double(5));
console.log(double(1));
// bind

/*
 * Итак,
 * №1 получаем this window или undefined в зависимасти от "use strict".
 * №2 получаем при вызове объекта сам объект
 * №3 получаем новый объект в качестве this.
 *
 * №4 насильное определение контекста, caLL, apply, bind
 */

// расмотреть как контекст работает в DOM
let btn = document.querySelector('button');
btn.addEventListener('click',function () {
	console.log(this);// контекст вызова в данном случае сам элемент, на котором закрепленно событие
	this.style.backgroundColor = 'red';
	// похоже на
	//event.target , но не надо забывать,
	// что функция в функции будет window
	// как тут
	function showThisT() {
		console.log(this);
	}
	showThisT();
});


let age = document.getElementById('age');
function showUser(surname, name) {
	console.log(this);
	alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
}
showUser.apply(age, ['Иванов,Сергей']);