let box = document.querySelector('.box'),
	btn = document.querySelector('button'),
	width = box.clientWidth,
	heigth = box.clientHeight;


let	offwidth = box.offsetWidth,
	offheigth = box.offsetHeight;

console.log(box);
console.log(width);
console.log(heigth);
console.log(offwidth);
console.log(offheigth);
console.log(box.getBoundingClientRect().left);
console.log(document.documentElement.clientWidth);
console.log(document.documentElement.scrollTop);

btn.addEventListener('click',function () {
	//box.style.height = box.scrollHeight + "px";
	//console.log(box.scrollTop); // промотанное расстояние
	//box.scrollTop=0;// вернуться к началу
});

scrollBy(0,200);