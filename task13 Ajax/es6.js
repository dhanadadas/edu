// console.log(JSON.stringify(arr));
// console.log(JSON.parse(JSON.stringify(arr)));

let inputRub = document.getElementById('rub'),
	inputUsd = document.getElementById('usd');

inputRub.addEventListener('input', () => {
	let request = new XMLHttpRequest();

	//	request.open(method, url, async, login, pass);
	request.open('GET', 'cur.json');
	request.setRequestHeader('Content-type',
		'application/json; charset=utf-8');
	request.send();


	/*
	 * Ответы сервера:
	 *
	 * status - код
	 * statusText - текстовый ответ
	 * responseText - реальный ответ /response
	 * readyState 0-4 .
	 */

		//request.addEventListener('load', function () { // менее гибкое
		request.addEventListener('readystatechange', function () {
			if (request.readyState === 4 && request.status == 200){
				let data = JSON.parse(request.response);
				console.log(data);

				inputUsd.value = inputRub.value / data.usd;
			} else {
				inputUsd.value = "Что-то пошло не так!";
			}
		})

});