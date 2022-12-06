const content = document.querySelector(".content");

for (let rows = 0; rows < 16; rows++) {
  for (let cols = 0; cols < 16; cols++) {
    const box = document.createElement("div");
    box.classList.add("box");

    content.appendChild(box);
  }
}
