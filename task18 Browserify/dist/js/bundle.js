/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/parts/calc.js":
/*!******************************!*\
  !*** ./src/js/parts/calc.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
 * Калькурятор
 *
 */
function tabs() {
	let persons = document.querySelectorAll('.counter-block-input')[0],
		restDay = document.querySelectorAll('.counter-block-input')[1],
		place = document.getElementById('select'),
		totalValue = document.getElementById('total'),
		personsSum = 0,
		daysSum = 0,
		total = 0;

	persons.addEventListener('input', function() {
		personsSum = +this.value;
		total = (daysSum + personsSum) * 4000;

		if (restDay.value === '' || persons.value === '') {
			totalValue.innerHTML = 0;
		} else {
			var costPlace = place.value;
			totalValue.innerHTML = total * costPlace;
		}
	});
	console.log(persons);
	restDay.addEventListener('input', function() {
		daysSum = +this.value;
		total = (daysSum + personsSum) * 4000;

		if (restDay.value === '' || persons.value === '') {
			totalValue.innerHTML = 0;
		} else {
			var costPlace = place.value;
			totalValue.innerHTML = total * costPlace;
		}
	});

	place.addEventListener('change', function() {
		if (restDay.value === '' || persons.value === '') {
			totalValue.innerHTML = 0;
		} else {
			let a = total;
			totalValue.innerHTML = a * this.options[this.selectedIndex].value;
		}
	});
}

module.exports = tabs;

/***/ }),

/***/ "./src/js/parts/form.js":
/*!******************************!*\
  !*** ./src/js/parts/form.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {


/*
 * Обработка форм
 *
 */
function form(){
let message = {
	loading: 'Загрузка...',
	success: 'Спасибо, с Вами свяжутся',
	failure: 'Что-то пошло не так...'
};

let form = document.querySelector('.main-form'),
	contact = document.querySelector('#form'),
	input = document.querySelectorAll('input'),
	//input2 			    = contact.getElementsByTagName('input'),
	statusMessage = document.createElement('div');
statusMessage.classList.add('status');


function sendAjaxData(formEvent) {
	/*
	 * Вариант ajax с DATA
	 */
	formEvent.addEventListener('submit', function(event) {
		event.preventDefault();
		formEvent.appendChild(statusMessage);
		//sendAjaxData(formEvent);
		let formData = new FormData(formEvent);

		function postData() {
			return new Promise(function(resolve, reject) {
				let request = new XMLHttpRequest();

				request.open('POST', 'server.php');

				request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

				request.onreadystatechange = function() {
					if (request.readyState < 4) {
						resolve();
					} else if (request.readyState === 4 && request.status == 200) {
						resolve();
					} else {
						reject();
					}
				};

				request.send(formData);
			})
		}

		function clearInput() {
			for (let i = 0; i < input.length; i++) {
				input[i].value = "";
			}
		}

		postData(FormData)
			.then(() => statusMessage.innerHTML = message.success)
			.then(() => {

			})
			.catch(() => statusMessage.innerHTML = message.failure)
			.then(clearInput);
	});
}

sendAjaxData(form);
sendAjaxData(contact);

}
module.exports = form;

/***/ }),

/***/ "./src/js/parts/modal.js":
/*!*******************************!*\
  !*** ./src/js/parts/modal.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {


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

/***/ }),

/***/ "./src/js/parts/slider.js":
/*!********************************!*\
  !*** ./src/js/parts/slider.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {


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

/***/ }),

/***/ "./src/js/parts/tabs.js":
/*!******************************!*\
  !*** ./src/js/parts/tabs.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
 * Табы
	*
 */
function tabs(){
let tab = document.querySelectorAll('.info-header-tab'),
	info = document.querySelector('.info-header'),
	tabContent = document.querySelectorAll('.info-tabcontent');

function hideTabContent(a) {
	for (let i = a; i < tabContent.length; i++) {
		tabContent[i].classList.remove('show');
		tabContent[i].classList.add('hide');
	}
}

hideTabContent(1);

function showTabContent(b) {
	if (tabContent[b].classList.contains('hide')) {
		tabContent[b].classList.remove('hide');
		tabContent[b].classList.add('show');
	}
}

info.addEventListener('click', function(event) {
	let target = event.target;
	if (target && target.classList.contains('info-header-tab')) {
		for (let i = 0; i < tab.length; i++) {
			if (target == tab[i]) {
				hideTabContent(0);
				showTabContent(i);
				break;
			};
		};
	}
});
}

module.exports = tabs;

/***/ }),

/***/ "./src/js/parts/timer.js":
/*!*******************************!*\
  !*** ./src/js/parts/timer.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {


/*
 * Таймер
 *
 */
function timer() {
function getTomorrow() {
	var D = new Date();
	D.setDate(D.getDate() + 1);
	return D;
}
let deadLine = getTomorrow();

function getTimeRemaining(endtime) {
	let t = Date.parse(deadLine) - Date.parse(new Date()),
		seconds = Math.floor((t / 1000) % 60),
		minutes = Math.floor((t / 1000 / 60) % 60),
		hours = Math.floor((t / 1000 / 60 / 60));
	//day     = Math.floor( (t/1000*60*60*24) );
	return {
		'total': t,
		'seconds': seconds,
		'minutes': minutes,
		'hours': hours
	};
}


function setClock(id, endtime) {
	let timer = document.getElementById(id),
		hours = timer.querySelector('.hours'),
		minutes = timer.querySelector('.minutes'),
		seconds = timer.querySelector('.seconds'),
		timeInterval = setInterval(updateClock, 1000);

	function updateClock() {
		let t = getTimeRemaining(endtime);
		if (t.hours <= 9) hours.textContent = "0" + t.hours;
		else hours.textContent = t.hours;
		if (t.minutes <= 9) minutes.textContent = "0" + t.minutes;
		else minutes.textContent = t.minutes;
		if (t.seconds <= 9) seconds.textContent = "0" + t.seconds;
		else seconds.textContent = t.seconds;

		if (t.total < 0) {
			clearInterval(timeInterval);
		}
	}
}
setClock('timer', deadLine);
}
module.exports = timer;

/***/ }),

/***/ "./src/js/parts/window.js":
/*!********************************!*\
  !*** ./src/js/parts/window.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {


/*
 * Создать окно
 *
 */
function window() {

class Options {
	constructor(heigth, width, bg, fontSize, textAlign) {
		this.heigth = heigth;
		this.width = width;
		this.bg = bg;
		this.fontSize = fontSize;
		this.textAlign = textAlign;
	}
	createDiv() {
		var div = document.createElement('div');
		div.style.cssText = `height:${this.heigth}px;width:${this.width}px;font-size:${this.fontSize}px;text-align:${this.textAlign};background:${this.bg}`;
		div.textContent = "Харибол!";
		document.body.appendChild(div);
	}
}
//const div = new  Options(100,200,'red',14,'center');
//div.createDiv();

}
module.exports = window;

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

window.addEventListener("DOMContentLoaded", function() {
	'use strict';
	let calc = __webpack_require__ (/*! ./parts/calc */ "./src/js/parts/calc.js"),
	form = __webpack_require__ (/*! ./parts/form */ "./src/js/parts/form.js"),
	slider = __webpack_require__ (/*! ./parts/slider */ "./src/js/parts/slider.js"),
	timer = __webpack_require__ (/*! ./parts/timer */ "./src/js/parts/timer.js"),
	modal = __webpack_require__ (/*! ./parts/modal */ "./src/js/parts/modal.js"),
	tabs = __webpack_require__ (/*! ./parts/tabs */ "./src/js/parts/tabs.js"),
	window = __webpack_require__ (/*! ./parts/window */ "./src/js/parts/window.js");

	calc();
	form();
	slider();
	timer();
	modal();
	tabs();
	window();
});

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map