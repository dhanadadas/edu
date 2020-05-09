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