
let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd');



function convent() {
    return new Promise(function (resolve,reject) {
        inputRub.addEventListener('input', () => {
            get('js/current.json').then(function(response) {
                console.log("Success!", JSON.parse(response).usd);
                return JSON.parse(response).usd;
                //inputUsd.value = inputRub.value / JSON.parse(response).usd;
            }, function(error) {
                console.error("Failed!", error);
                return "error";
                //inputUsd.value = "Что-то пошло не так!";
            });
        });

    })
}

function get(url) {
    // Return a new promise.
    return new Promise(function(resolve, reject) {
        // Do the usual XHR stuff
        var req = new XMLHttpRequest();
        req.open('GET', url);

        req.onload = function() {
            // This is called even on 404 etc
            // so check the status
            if (req.status == 200) {
                // Resolve the promise with the response text
                resolve(req.response);
            }
            else {
                // Otherwise reject with the status text
                // which will hopefully be a meaningful error
                reject(Error(req.statusText));
            }
        };

        // Handle network errors
        req.onerror = function() {
            reject(Error("Network Error"));
        };

        // Make the request
        req.send();
    });
}


convent(d)
  .then(()=>statusMessage.innerHTML = message.success)
  .catch(()=> statusMessage.innerHTML = message.failure)
  .then(clearInput);