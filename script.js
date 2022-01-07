let cells = 1;
let selectedColor = "red";
let coloring = false;

function addRows() {
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

function addColumns(){
    cells++;
    let newRows = document.getElementsByClassName("row");
    tr = [...newRows];
    for (let i = 0; i < tr.length; i++) {
      let cell = document.createElement("td");
      helperFunction(cell);
      tr[i].appendChild(cell);
    }
  }