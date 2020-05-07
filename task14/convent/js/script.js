
let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd');

inputRub.addEventListener('input', () => {
    function func() {
        let request = new XMLHttpRequest();
        return new Promise(function (resolve,reject) {
        request.open('GET', 'js/current.json');
        request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        request.send();

        request.addEventListener('load', function () {
            if (request.readyState === 4 && request.status == 200) {
                let data = JSON.parse(request.response);
                resolve(data);
            } else {
                reject();
            }
        });
    });
    }
    func()
      .then((data)=>{inputUsd.value = inputRub.value / data.usd;})
      .catch(()=>{inputUsd.value = "Что-то пошло не так!";});
});

