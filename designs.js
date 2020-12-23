// Select color input
const color = document.getElementById('colorPicker');
// Select size input
const gridWidth = document.getElementById('inputWidth');
const gridHeight= document.getElementById('inputHeight');
const canvas = document.getElementById('pixelCanvas');

// When size is submitted by the user, call makeGrid()
//prevent the default, prevent  to reload the page on form submit.
const submit = document.getElementById('sizePicker');
  submit.addEventListener('submit', function (e){
    e.preventDefault();
    makeGrid();
  }
)

function makeGrid() {

 //The old grid should be cleared
 // before creating the new one
  canvas.innerHTML = '';
  //    Draw rows
  for (x = 0; x < gridHeight.value; x++) {
    var row = document.createElement('tr');
    //   Draw columns
    for (y = 0; y < gridWidth.value; y++) {
      var column = document.createElement('td');
      row.appendChild(column);
      column.addEventListener('click',function(event){
        event.target.style.backgroundColor= color.value;
      })
    }
    canvas.append(row);
  }
}
