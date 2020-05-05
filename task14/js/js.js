window.addEventListener("DOMContentLoaded", function () {
	'use strict';
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

	info.addEventListener('click', function (event) {
		let target = event.target;
		if (target && target.classList.contains('info-header-tab')) {
			for (let i = 0; i < tab.length; i++){
				if (target == tab[i]){
					hideTabContent(0);
					showTabContent(i);
					break;
				};
			};
		}
	});

	// timer
	let deadLine = '2020-04-30';
	function getTimeRemaining(endtime) {
		let t = Date.parse(deadLine)- Date.parse(new Date()),
			seconds   = Math.floor( (t/1000) % 60),
			minutes = Math.floor( (t/1000/60) % 60),
			hours   =  Math.floor( (t/1000/60/60) );
		//day     = Math.floor( (t/1000*60*60*24) );
		return {
			'total':t,
			'seconds':seconds,
			'minutes':minutes,
			'hours':hours
		};
	}


	function setClock(id,endtime) {
		let timer = document.getElementById(id),
			hours   = timer.querySelector('.hours'),
			minutes = timer.querySelector('.minutes'),
			seconds = timer.querySelector('.seconds'),
			timeInterval = setInterval(updateClock,1000);
		function updateClock() {
			let t = getTimeRemaining(endtime);
			if ( t.hours<=9) hours.textContent = "0" + t.hours; else hours.textContent = t.hours;
			if ( t.minutes<=9) minutes.textContent = "0" + t.minutes; else minutes.textContent = t.minutes;
			if ( t.seconds<=9) seconds.textContent = "0" + t.seconds; else seconds.textContent = t.seconds;

			if (t.total<0){
				clearInterval(timeInterval);
			}
		}
	}
	setClock('timer' , deadLine);

	/*
	 * Модальное окно
	 *
	 */
	let more  = document.querySelector('.more'),
		overlay = document.querySelector('.overlay'),
		close   = document.querySelector('.popup-close');

	function show () {
		overlay.style.display = 'block';
		this.classList.add('more-splash');
		document.body.style.overflow = 'hidden';// запретить прокрутку
	}
	function hidden () {
		overlay.style.display = 'none';
		more.classList.remove('more-splash');
		document.body.style.overflow = '';
	}
	more.addEventListener('click',show);
	close.addEventListener('click',hidden);

	let descriptionBtn = document.querySelectorAll('.description-btn');
	descriptionBtn.forEach(function (btn) {
		btn.addEventListener('click',show);
	})
});

class Options {
	constructor(heigth, width, bg, fontSize, textAlign) {
		this.heigth = heigth;
		this.width = width;
		this.bg = bg;
		this.fontSize = fontSize;
		this.textAlign = textAlign;
	}
	createDiv(){
		var div=document.createElement('div');
		div.style.cssText=`height:${this.heigth}px;width:${this.width}px;font-size:${this.fontSize}px;text-align:${this.textAlign};background:${this.bg}`;
		div.textContent = "Харибол!";
		document.body.appendChild(div);
	}
}
//const div = new  Options(100,200,'red',14,'center');
//div.createDiv();

let message = {
	loading: 'Загрузка...',
	success: 'Спасибо, с Вами свяжутся',
	failure: 'Что-то пошло не так...'
};

let form 				  = document.querySelector('.main-form'),
	contact         =document.querySelector('#form'),
	input 			    = document.querySelectorAll('input'),
	//input2 			    = contact.getElementsByTagName('input'),
	statusMessage   = document.createElement('div');
statusMessage.classList.add('status');


function sendAjaxData(formEvent) {
	/*
	 * Вариант ajax с DATA
	 */
	formEvent.addEventListener('submit', function (event) {
		event.preventDefault();
		formEvent.appendChild(statusMessage);
		//sendAjaxData(formEvent);
		let formData = new FormData(formEvent);

		function postData() {
			return new Promise(function (resolve,reject) {
				let request = new XMLHttpRequest();

				request.open('POST','server.php');

				request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

				request.onreadystatechange = function () {
					if (request.readyState < 4){
						resolve();
					} else if (request.readyState === 4 && request.status == 200){
						resolve();
					} else {
						reject();
					}
				};

				request.send(formData);
			})
		}
		function clearInput() {
			for (let i = 0; i < input.length; i++){
				input[i].value = "";
			}
		}

		postData(FormData)
			.then(()=>statusMessage.innerHTML = message.success)
			.then(()=>{

			})
			.catch(()=> statusMessage.innerHTML = message.failure)
			.then(clearInput);
	});
}

sendAjaxData(form);
sendAjaxData(contact);