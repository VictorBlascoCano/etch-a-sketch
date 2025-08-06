const boxContainer = document.querySelector(".box-container");
const NUMBER_SIZE_CELLS = 16;
let sign = prompt("What's your sign?");
createBoard(NUMBER_SIZE_CELLS);

const form = document.querySelector("form");
form.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
	e.preventDefault();

	const input = document.querySelector(".input-field");
	const newSize = input.value;
	if (newSize < 1) return;
	input.value = newSize;
	createBoard(newSize);
}

function createBoard(numCells) {
	while (boxContainer.firstChild) {
		boxContainer.removeChild(boxContainer.firstChild);
	}

	for (let i = 0; i < numCells * numCells; i++) {
		const box = document.createElement("div");
		box.classList.add("box");
		box.addEventListener("mouseover", (e) =>
			e.target.classList.add("hovered")
		);
		box.style.flex = `1 0 ${100 / numCells}%`;
		boxContainer.appendChild(box);
	}
}
