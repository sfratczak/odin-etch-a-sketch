const CONTENT_SIZE_IN_PX = 500;

const content = document.querySelector(".content");
const generateButton = document.querySelector(".generate-button");
const unicornModeToggle = document.querySelector(".unicorn-mode-toggle");

let currentGridSize = 16;
let isUnicornModeOn = false;

content.style.height = `${CONTENT_SIZE_IN_PX}px`;
content.style.width = `${CONTENT_SIZE_IN_PX}px`;

generateNewGrid(currentGridSize);

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

  currentGridSize = Math.floor(+gridSize);

  cleanUpContent();
  generateNewGrid(currentGridSize);
});

unicornModeToggle.addEventListener("change", () => {
  if (unicornModeToggle.checked) {
    isUnicornModeOn = true;

    cleanUpContent();
    generateNewGrid(currentGridSize);
  } else {
    isUnicornModeOn = false;

    cleanUpContent();
    generateNewGrid(currentGridSize);
  }
});

function generateNewGrid(size) {
  let boxSize = CONTENT_SIZE_IN_PX / size;

  for (let i = 0; i < size ** 2; i++) {
    const box = document.createElement("div");
    box.classList.add("box");
    box.style.height = `${boxSize}px`;
    box.style.width = `${boxSize}px`;

    box.addEventListener("mouseover", () => {
      if (isUnicornModeOn) {
        box.style.backgroundColor = generateRandomRGB();
      } else {
        box.style.backgroundColor = "black";
      }
    });

    content.appendChild(box);
  }
}

function cleanUpContent() {
  while (content.lastChild) {
    content.removeChild(content.lastChild);
  }
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

function generateRandomRGB() {
  const r = getRandomInt(0, 255);
  const g = getRandomInt(0, 255);
  const b = getRandomInt(0, 255);

  return `rgb(${r}, ${g}, ${b})`;
}
