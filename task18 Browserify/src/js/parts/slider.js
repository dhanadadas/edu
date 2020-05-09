
/*
* Слайдер
*
*/
function slider (){
let sliderIndex = 1,
	sliders = document.querySelectorAll('.slider-item'),
	prev = document.querySelector('.prev'),
	next = document.querySelector('.next'),
	dotsWrap = document.querySelector('.slider-dots'),
	dots = document.querySelectorAll('.dot');
showSliders(sliderIndex);

function showSliders(n) {

	if (n > sliders.length) {
		sliderIndex = 1;
	}
	if (n < 1) {
		sliderIndex = sliders.length;
	}

	sliders.forEach((item) => item.style.display = 'none');
	dots.forEach((item) => item.classList.remove('dot-active'));
	sliders[sliderIndex - 1].style.display = 'block';
	dots[sliderIndex - 1].classList.add('dot-active');

}

function plusSlides(n) {
	showSliders(sliderIndex += n);
}

function currentSlider(n) {
	showSliders(sliderIndex = n);
}

prev.addEventListener('click', function() {
	plusSlides(-1);
});

next.addEventListener('click', function() {
	plusSlides(1);
});
console.log(dotsWrap);
console.log(dots);
dotsWrap.addEventListener('click', function(event) {
	for (let i = 0; i < dots.length + 1; i++) {
		if (event.target.classList.contains('dot') && event.target == dots[i - 1]) {
			currentSlider(i);
		}
	}
});
}
module.exports = slider;