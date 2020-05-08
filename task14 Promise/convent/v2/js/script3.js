
let inputRub = document.getElementById('rub'),
  inputUsd = document.getElementById('usd');






    /*
		 * Вариант ajax с DATA
		 */
    inputRub.addEventListener('input', function (event) {
        function postData() {
            return new Promise(function (resolve,reject) {
                let request = new XMLHttpRequest();
                request.open('GET', 'js/current.json');
                request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

                request.onreadystatechange = function () {
                    if (request.readyState < 4){
                        //console.log(request.response);
                        let data = request.response;
                        resolve(JSON.parse(data));
                    } else if (request.readyState === 4 && request.status == 200){
                        let data = request.response;
                        resolve(JSON.parse(data));
                    } else {
                        let data = request.response;
                        reject(JSON.parse(data));
                    }
                };

                request.send();
            })
        }


        postData()
          .then((data)=>console.log(JSON.parse(data)))

    });

