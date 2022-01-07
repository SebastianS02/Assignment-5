let cells = 1;
let selectedColor = "red";
let coloring = false;

// Function to add rows to table
function addNewRows() {
  let table = document.getElementById("table");
  let row = document.createElement("tr");
  row.classList.add("row");
  table.appendChild(row);
  for (let i = 0; i < cells; i++) {
    let cell = document.createElement("td");
    helperFunction(cell);
    row.appendChild(cell);
  }
}