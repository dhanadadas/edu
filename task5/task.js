function helloW(str) {
    console.log(str)
}
helloW('www');
helloW('www2');
let ddd=[ ] + false - null + true;
console.log(ddd);



//создание элементов
let div = document.create.Element('div'),
    text = document.create.TextNode("Тут я был"); // текстовый узел
console.log(div);

div.classList.add('black');// class name устарело

document.body.appendChild(div); // вставить на страницу
// в конец body
let wrapper = document.querySelector('.wrapper');
wrapper.appendChild(div); // вставить на страницу
// в начало родительского элемента
document.body.insertBefore(div, wrapper[0]); // вставить на страницу
document.body.insertBefore(div); // вставить на страницу, работает как appendChild
// вставить перед

// УДАЛИТЬ ЕЛЕМЕНТ
document.body.removeChild(wrapper[1]);
wrapper.removeChild(text);

// ЗАМЕНИТЬ ЭЛЕМЕНТ
document.body.replaceChild(text,wrapper[0]);

// ДОБАВИТЬ ТЕКСТ В ЭЛЕМЕНТ
div.innerHTML = "hello world";
// или верстку
div.innerHTML = "<h1>hello world</h1>";
div.textContent = "hello world"; // вставить ТОЛЬКО ТЕКСТ