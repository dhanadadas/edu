require('es6-promise').polyfill();
window.addEventListener("DOMContentLoaded", function() {
	'use strict';
	let calc = require ('./parts/calc'),
	form = require ('./parts/form'),
	slider = require ('./parts/slider'),
	timer = require ('./parts/timer'),
	modal = require ('./parts/modal'),
	tabs = require ('./parts/tabs'),
	window = require ('./parts/window');

	calc();
	form();
	slider();
	timer();
	modal();
	tabs();
	window();

});

if ('NodeList' in window && !NodeList.prototype.forEach) {
	console.info('polyfill for IE11');
	NodeList.prototype.forEach = function (callback, thisArg) {
		thisArg = thisArg || window;
		for (var i = 0; i < this.length; i++) {
			callback.call(thisArg, this[i], i, this);
		}
	};
} // https://gist.github.com/bob-lee/e7520bfcdac266e5490f40c2759cc955
