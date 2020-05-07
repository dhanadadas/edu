"use strict";
 let a = 7;
//
// setTimeout(() => {
//   a = 10;
//   console.log(a);
// },2000);

console.log(a);


let b = new Promise(function (resolve,reject) {
  setTimeout(() => {
    resolve(a = 10);
  },2000);
});

b.then(()=> {console.log(a);}).catch(()=>{console.log(a);});