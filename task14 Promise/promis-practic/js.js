"use strict";
// без промисов
console.log('Request data...');

setTimeout(() => {
  console.log('Preparing data...');

  const backendData = {
    server: 'avs',
    port: 2000,
    status: 'working'
  };

  setTimeout(() => {
    backendData.modified = true;
    console.log('Data received', backendData)
  }, 2000)
}, 2000);


// с promise
const p = new Promise(function (resolve,reject) {
  setTimeout(() => {
    console.log('Preparing dataPromise...');
    const backendData = {
      server: 'avs',
      port: 2000,
      status: 'working'
    };
    resolve(backendData);
  }, 2000);
});


p.then( data => {
  //console.log('Promise resolved', data);
  const p2 = new Promise( (resolve, reject)=>{
    setTimeout(() => {
      data.modified = true;
      resolve(data);
      //console.log('Data received', backendData)
    }, 2000)
  } )
});