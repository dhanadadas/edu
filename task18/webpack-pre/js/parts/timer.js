
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