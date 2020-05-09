
/*
 * Создать окно
 *
 */
function window() {

class Options {
	constructor(heigth, width, bg, fontSize, textAlign) {
		this.heigth = heigth;
		this.width = width;
		this.bg = bg;
		this.fontSize = fontSize;
		this.textAlign = textAlign;
	}
	createDiv() {
		var div = document.createElement('div');
		div.style.cssText = `height:${this.heigth}px;width:${this.width}px;font-size:${this.fontSize}px;text-align:${this.textAlign};background:${this.bg}`;
		div.textContent = "Харибол!";
		document.body.appendChild(div);
	}
}
//const div = new  Options(100,200,'red',14,'center');
//div.createDiv();

}
module.exports = window;