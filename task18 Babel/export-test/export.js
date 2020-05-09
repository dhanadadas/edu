// пример экспорта
export let one = 1; // способ 1

let two = 2;

export {two}; // способ 2

// экспорт объектов 
export function sayHi() {
	console.log('Hello')
}