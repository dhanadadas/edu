let app = {
	data: 50
};
console.log(app);

// module

let number = 1;
//() => {};
(function () {
	let number = 2;
	console.log(number);
	return console.log(number + 3);
}()); // самовызываюшая функция // по сути дела и есть модуль

console.log(number);

// второй способ создать модуль через объектый интерфейс

let user1 = (function () {
	let private = function (){
		console.log('I am private');
	};

	let sayHello = function () {
		console.log('Hello!');
	};

	return {
		sayHello: sayHello
	}
	//return {
		//sayHello: function () {
		//	console.log('Hello!');
	//	}
	//}
}());

console.log(user1);
console.log(user1.sayHello());