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