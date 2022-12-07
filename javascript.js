const content = document.querySelector(".content");
const generate = document.querySelector(".generate-button");

const CONTENT_SIZE_IN_PX = 500;
content.style.height = `${CONTENT_SIZE_IN_PX}px`;
content.style.width = `${CONTENT_SIZE_IN_PX}px`;

generateNewGrid(16);

function generateNewGrid(size) {
  if (typeof size != "number" || size < 1 || size > 100)
    return "Please provide a number in range 1-100";

  let boxSize = CONTENT_SIZE_IN_PX / size;

  for (let rows = 0; rows < size; rows++) {
    for (let cols = 0; cols < size; cols++) {
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
}
