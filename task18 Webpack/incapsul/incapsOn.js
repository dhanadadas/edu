function User(name, age) {
	let userName= name;
	let userAge = age;

	this.getAge = function () {
		return userAge;
	};

	this.setAge = function (age) {
		(typeof age === 'number' && age > 0 && age < 110) ? userAge = age : console.log('Недопустимое значение');
	};

	this.getName = function () {
		return userName;
	};

	this.setName = function (name) {
		userName = name;
	};

	this.say = function () {
		console.log(`Имя пользователя ${this.name}, а его возраст ${this.userAge} лет`);
	}
}

let user = new User('Ivan', 25);
console.log(user.name);
console.log(user.age);
user.say();
console.log(user.getAge());
console.log(user.setAge('30f'));
console.log(user.getAge());

// user.age = 30;
// user.name = 'Alex';
// user.say();

let user0 = new User();
user0.setAge(99);
user0.setName('Dhanada');
console.log(user0.getAge());
console.log(user0.getName());
