let inputRub = document.getElementById('rub'),
  inputUsd = document.getElementById('usd');

//Вариант с XMLHttpRequest
const getCurrentRubToUsd = function () {
    return new Promise( function (resolve, reject) {
        let request = new XMLHttpRequest();

        request.open('GET', 'js/current.json');
        request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

        request.onload = function () {
            if (request.readyState !== 4) {
                reject(new Error("Ошибка"));
            } else {
                let data = JSON.parse(request.response);
                resolve(data);
            }
        };

        request.onerror = function () {
            reject(new Error('Что-то пошло не так!'));
        };

        request.send();
    });
};

inputRub.addEventListener('input', function ()
    {
    getCurrentRubToUsd()
      .then(data => inputUsd.value = (inputRub.value / data.usd).toFixed(2))
      .catch(error => inputUsd.value = error.message);
});
