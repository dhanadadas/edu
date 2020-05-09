let myModuleOne = require('./webpack');

let MyModule = new myModuleOne();
console.log( MyModule.hello() );
console.log( MyModule.goodbye() );
