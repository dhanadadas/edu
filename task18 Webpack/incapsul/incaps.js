function User(name, age) {
	this.name= name;
	this.age = age;
	this.say = function () {
		console.log(`Имя пользователя ${this.name}, а его возраст ${this.age} лет`);
	}
}

let user = new User('Ivan', 25);
console.log(user.name);
console.log(user.age);
user.say();

user.age = 30;
user.name = 'Alex';
user.say();