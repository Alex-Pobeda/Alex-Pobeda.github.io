let layout = {
	topRow: ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
	middleRow: ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
	bottomRow: ['z', 'x', 'c', 'v', 'b', 'n', 'm'],
	
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
			let letterButton = document.createElement("div");
			letterButton.classList.add("btn");
			letterButton.textContent = this.bottomRow[i].toUpperCase();
			botLine.appendChild(letterButton);
		}
	}
};
layout.createLayout();