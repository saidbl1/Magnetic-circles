let cells = [];

function createCells() {
  // check if there are any cells in the cells array,
  // removes all of the cells from the array  If there are, resets the to empty.
  if (cells.length > 0) {
    cells.forEach((cell) => cell.remove());
    cells = [];
  }

  const grid = document.querySelector(".grid");
  // get the width and height of the browser window.
  // will be used to calculate the number of cells that can be created
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;

  // set the width and height of each cell
  const cellWidth = 100;
  const cellHeight = 100;

  // calculate the number of columns and rows that can be created
  const numColumns = Math.floor(screenWidth / cellWidth);
  const numRows = Math.floor(screenHeight / cellHeight);

  // calculates the total number of cells that can be created
  const totalCells = numColumns * numRows;

  // loop creates a new cell for each row and column.
  // add the cell to the grid element and the cells array.
  for (let i = 0; i < totalCells; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    grid.appendChild(cell);
    cells.push(cell);

    // adds an event listener to each cell. When the mouse moves over a cell,
    // the event listener will be triggered. The event listener will then calculate
    // the new position of the cell and the new background color for the cell.
    cell.addEventListener("mousemove", (e) => {
      let x = e.offsetX;
      let y = e.offsetY;
      let BoxWidth = cell.clientWidth;
      let BoxHeight = cell.clientHeight;
      let moveX = x - BoxWidth / 2;
      let moveY = y - BoxHeight / 2;
      cell.style.transform = `translateX(${moveX}px) translateY(${moveY}px)`;
      cell.style.background = "#333";
    });

    // reset the position and background color of the cell when the mouse moves out of a cell
    cell.addEventListener("mouseout", (e) => {
      cell.style.transform = "";
      cell.style.background = "";
    });
  }
}

createCells();
window.addEventListener("resize", createCells);
