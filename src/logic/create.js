import generateUniqueId from './generateUniqueId';

function initialCreate() {

  let cell1, cell2;

  cell1 = {
    id: generateUniqueId(),
    x: randomInteger(0, 3),
    y: randomInteger(0, 3),
    value: 2
  }

  cell2 = {
    id: generateUniqueId(),
    x: randomInteger(0, 3),
    y: randomInteger(0, 3),
    value: 2
  }

  if(cell1.x === cell2.x && cell1.y === cell2.y){
    cell1.x = cell1.x >= 2 ? cell1.x - 1 : cell1.x + 1;
  }

  return [cell1,cell2];
}

// random number generation... 
function randomInteger(min, max) {
  let rand = min - 0.5 + Math.random() * (max - min + 1)
  rand = Math.round(rand);
  return rand;
}

function create(cells) {
  const filledCoords = new Set()

  cells.forEach(cell => {
    filledCoords.add(cell.x * 4 + cell.y)
  })

  if (filledCoords.size === 16){
    alert('GAME OVER!');
    window.location.reload();
    return;
  }

  let x
  let y
  let startSize = filledCoords.size
  do {
    x = Math.floor(Math.random() * 3.9)
    y = Math.floor(Math.random() * 3.9)

    const sum = x * 4 + y
    filledCoords.add(sum)
  } while (startSize === filledCoords.size)

  return [...cells, {
    id: generateUniqueId(),
    x,
    y,
    value: 2
  }]
}

export {initialCreate, create};