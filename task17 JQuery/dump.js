// искуство отлатки кода
let json = '{"id":"2"}';
try {
	let user = JSON.parse(json);
	console.log('Начинаем скрипт');
	console.log(a);
	console.log('Результат');
	if (!user.name){
		throw new Error("Не правильный json, нет имени");
	}
} catch (error){
	console.log(error);
	console.log(error.name);
	console.log(error.message);
	console.log(error.stack);

	console.log(`Мы получили ошибку: ${error.name}`)
} finally {

}

console.log('Продолжаем');