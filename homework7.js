let layout = {
	topRow: ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
	middleRow: ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
	bottomRow: ['z', 'x', 'c', 'v', 'b', 'n', 'm', ' '],
	
	createLayout: function () {
		for (let i = 0; i < this.topRow.length; i++){
			let topLine = document.querySelector(".topLine");
			let letterButton = document.createElement("div");
			letterButton.classList.add("btn");
			letterButton.textContent = this.topRow[i].toUpperCase();
			topLine.appendChild(letterButton);
		}
		for (let i = 0; i < this.middleRow.length; i++){
			let midLine = document.querySelector(".midLine");
			let letterButton = document.createElement("div");
			letterButton.classList.add("btn");
			letterButton.textContent = this.middleRow[i].toUpperCase();
			midLine.appendChild(letterButton);
		}
		for (let i = 0; i < this.bottomRow.length; i++){
			let botLine = document.querySelector(".botLine");
			let spaceLine = document.querySelector(".spaceLine");
			let letterButton = document.createElement("div");
			letterButton.classList.add("btn");
			letterButton.textContent = this.bottomRow[i].toUpperCase();
			if(this.bottomRow[i] == ' '){
				letterButton.classList.add("btn_space");
				spaceLine.appendChild(letterButton);
			} else {
				botLine.appendChild(letterButton);
			}
		}
	}
};
layout.createLayout();
const printText = function () {
	//let txt = document.querySelector(".text");
	let btn = document.querySelector(".btn");
	btn.addEventListener("click", function(){
		console.log(btn.textContent);
	})
}();
//Все кул. Но можешь сделать чтобы по клику печаталось в консоль или в документ текст из кнопки на которую нажимаешь + добавить пробел, чтоб полноценная клавиатура получилась?