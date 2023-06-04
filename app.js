let cells = [];

function createCells() {
  if (cells.length > 0) {
    cells.forEach((cell) => cell.remove());
    cells = [];
  }

  const grid = document.querySelector(".grid");
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;

  const cellWidth = 100;
  const cellHeight = 100;

  const numColumns = Math.floor(screenWidth / cellWidth);
  const numRows = Math.floor(screenHeight / cellHeight);

  const totalCells = numColumns * numRows;

  for (let i = 0; i < totalCells; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    grid.appendChild(cell);
    cells.push(cell);

    cell.addEventListener("mousemove", (e) => {
      let x = e.offsetX;
      let y = e.offsetY;
      let BoxWidth = cell.clientWidth;
      let BoxHeight = cell.clientHeight;
      let moveX = x - BoxWidth / 2;
      let moveY = y - BoxHeight / 2;
      cell.style.transform = `translateX(${moveX}px) translateY(${moveY}px)`;
    });

    cell.addEventListener("mouseout", (e) => {
      cell.style.transform = "";
    });
  }
}

createCells();
window.addEventListener("resize", createCells);
