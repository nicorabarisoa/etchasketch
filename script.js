let size = 16;

function generateGrid(size){
  
  let container = document.querySelector('.container');
  container.style.gridTemplateRows="repeat("+size+",0fr";
  container.style.gridTemplateColumns="repeat("+size+",0fr";
  for (i = 0; i <(Math.pow(size, 2)); i++) {
  let makeDiv=document.createElement('div');
  let container = document.querySelector('.container');
  container.appendChild(makeDiv).classList.add("case");
}

 
  }
generateGrid(size);

