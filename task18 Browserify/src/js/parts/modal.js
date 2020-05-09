
/*
 * Модальное окно
 *
 */
function modal (){
let more = document.querySelector('.more'),
	overlay = document.querySelector('.overlay'),
	close = document.querySelector('.popup-close');

function show() {
	overlay.style.display = 'block';
	this.classList.add('more-splash');
	document.body.style.overflow = 'hidden'; // запретить прокрутку
}

function hidden() {
	overlay.style.display = 'none';
	more.classList.remove('more-splash');
	document.body.style.overflow = '';
}
more.addEventListener('click', show);
close.addEventListener('click', hidden);

let descriptionBtn = document.querySelectorAll('.description-btn');
descriptionBtn.forEach(function(btn) {
	btn.addEventListener('click', show);
});
}
module.exports = modal;