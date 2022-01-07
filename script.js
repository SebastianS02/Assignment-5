let cells = 3;
let selectedColor = "red";
let coloring = false;

function addRows(){
  let table = document.getElementById("table");
  let row = document.createElement("tr");
  row.classList.add("row");
  table.appendChild(row);
  for (let i = 0; i < cells; i++){
    let cell = document.createElement("td");
    helperFunction(cell);
    row.appendChild(cell);
  }
}

function addColumns(){
    cells++;
    let newRows = document.getElementsByClassName("row");
    tr = [...newRows];
    for (let i = 0; i < tr.length; i++){
      let cell = document.createElement("td");
      helperFunction(cell);
      tr[i].appendChild(cell);
    }
}

function removeRow(){
    let rows2 = document.getElementsByClassName("row");
    tr = [...rows2];
    if (tr.length == 0){
      return;
    }
    tr[tr.length - 1].parentNode.removeChild(tr[tr.length - 1]);
    if (tr.length == 1){
      cells = 1;
    }
}

function removeColumns() {
    if (cells == 1) {
      return;
    }
    cells--;
    let rows3 = document.getElementsByClassName("row");
    tr = [...rows3];
    for (let i = 0; i < tr.length; i++) {
      tr[i].removeChild(tr[i].lastChild);
    }
  }