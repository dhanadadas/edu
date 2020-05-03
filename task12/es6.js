let name = 'Ivan',
	age = 30,
	mail = 'ex@ya.ru';

document.write(`Пользователю ${name} ${age} лет. Его почтовый адрес: ${mail}`);


// еще один момент про let и const
// создаются каждую итерацию
function makeArray() {
	var items = [];

	for (var i = 0; i < 10; i++){
		var item = function () {
			console.log(i);
		};
		items.push(item);
	}
	return items;
}
var arr = makeArray();
arr[1]();
arr[2]();
arr[7]();

function makeArray2() {
	let items = [];

	for (let i = 0; i < 10; i++){
		var item = function () {
			console.log(i);
		};
		items.push(item);
	}
	return items;
}
var arr2 = makeArray2();
arr2[1]();
arr2[2]();
arr2[7]();

// стрелочные функции
let fun = () => {
	console.log(this);
};
fun(); // стрелочные функции АНОНИМНЫ. Не контекста

let obj = {
	number: 5,
	sayNumber: function () {
		let say = () => { // теряет контекст
			console.log(this);
		};
		say();
	}
};
obj.sayNumber();// у стрелочной фун. нет своего контекста. Всегда берет у родителя.

let btn = document.querySelector('button');
btn.addEventListener("click", function () {
	let show = () => {
		console.log(this);
	};
	show()
});

// параметры по умолчанию
// раньше
function calcOrDouble(number, basis) {
	basis = basis || 2;
	console.log(number*basis);
}
calcOrDouble(55);
// ES6

function calcOrDoubleES6(number, basis=2) {
	console.log(number*basis);
}
calcOrDoubleES6(55);

//Class ES6
class Rectangle {// название класов с бол. буквы
	constructor(heigth = 20,width = 20) {// конструктор + параметры по умолчанию
		this.heigth = heigth;
		this.width = width;
	}
	calcArea() {
		return this.heigth * this.width;
	}
}
const square = new  Rectangle(10,10);
console.log(square.calcArea());


// оператор разворота (...)
let  video = ['youtube', 'vimeo','rutube'],
	blog = ['wordpress', 'livejornal','blogger'],
	internet = [...video,...blog,'vk','facebook'];
console.log(internet);

function log(a, b, c) {
	console.log(a);
	console.log(b);
	console.log(c);
	console.log(c+b+a)
}
let number = [2, 5, 7];
console.log(...number); // передать массив в функцию