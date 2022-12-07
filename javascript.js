const content = document.querySelector(".content");
const generateButton = document.querySelector(".generate-button");

const CONTENT_SIZE_IN_PX = 500;
content.style.height = `${CONTENT_SIZE_IN_PX}px`;
content.style.width = `${CONTENT_SIZE_IN_PX}px`;

generateNewGrid(16);

generateButton.addEventListener("click", () => {
  const gridSize = prompt(
    "Please provide a number of squares per side of a new grid (in range 1-100):"
  );

  if (typeof +gridSize != "number" || +gridSize < 1 || +gridSize > 100) {
    alert(
      "Invalid input. Please try again and provide a number in range 1-100."
    );
    return;
  }

  cleanUpContent();
  generateNewGrid(Math.floor(+gridSize));
});

function generateNewGrid(size) {
  let boxSize = CONTENT_SIZE_IN_PX / size;

  for (let i = 0; i < size ** 2; i++) {
    const box = document.createElement("div");
    box.classList.add("box");
    box.style.height = `${boxSize}px`;
    box.style.width = `${boxSize}px`;

    box.addEventListener(
      "mouseover",
      () => (box.style.backgroundColor = "black")
    );

    content.appendChild(box);
  }
}

function cleanUpContent() {
  while (content.lastChild) {
    content.removeChild(content.lastChild);
  }
}
