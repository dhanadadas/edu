// // function learnJs(lang, callback) {
// //     console.log("Я учу" + lang);
// //     callback();
// // }
// //
// // function done() {
// //     console.log("Я прошел этот урок!");
// // }
// 'use strict';
//
// let  options = {
//     width: 1024,
//     height: 1024,
//     name: "Hari"
// };
// console.log(options.name);
// options.bool = false;
// options.colors = {
//     border: "black",
//     bg: "red"
// };
// delete options.bool;
// console.log(options);
//
// for (let key in options){
//     console.log('Свойство ' + key + " имеет значение: " + options[key])
// }
// console.log(Object.keys(options).length);
// //массивы
// let arr =["first",1,2,4,5,6,7];
// arr.pop();
// arr.push("8");
// arr.shift();
// arr.unshift("1");
//
// for (let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }
//
// arr.forEach(function (item,i,mass) {
//     console.log(i + ': ' + item + "(массив: "+mass+")")
// });
//
// console.log(arr);
//
// let mass = [1,3,4,5,6];
//
// for (let key in mass){
//     console.log(key);
// }


// let ans = prompt("",'234325,325,325,234234125,2315235,236dg,rw,gre,gerh,erfew,fwegerh,errre'),
//     arr = [];
// arr = ans.split(',');
// console.log(arr);
// //arr = arr.join();
// //console.log(arr);
// arr = arr.join();
// console.log(arr);
let arr = [1,145,4],
    i   = arr.sort(compare);
function compare(a,b) {
    return a-b;
}

let agent = {
    health: 600,
    armor: 500,
    power: 80
};
let soldier = {
    health: 400,
    armor: 100,
    power: 40
};

let john = {
    healht:100,
    power: 30
}

soldier.__proto__ = agent;
john.__proto__ = soldier;
console.log(john);
console.log(john.armor);