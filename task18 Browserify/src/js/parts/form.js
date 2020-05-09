
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