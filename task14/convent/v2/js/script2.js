
let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd');



function convent() {
    return new Promise(function (resolve,reject) {
        inputRub.addEventListener('input', () => {
            let request = new XMLHttpRequest();

            request.open('GET', 'js/current.json');
            request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
            request.send();

            request.addEventListener('readystatechange', function() {

                //console.log(JSON.parse(request.response));
                //console.log(request.response);
                if (request.readyState === 4 && request.status == 200) {
                    //console.log(request.response);
                    //changeUsd(JSON.parse(request.response));
                    resolve(JSON.parse(request.response).usd);
                    //console.log(JSON.parse(request.response).usd);
                } else {
                    reject();
                }
            });

        });

    })
}

function changeUsd (arr){
    inputUsd.value = inputRub.value / arr.usd;
}



convent({})
  .then(function(response){
      //console.log(response);
  })
  .catch(function(response){
      console.log(response);
  });
