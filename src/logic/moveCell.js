function moveCell(matrix, x, y,direction) {
	let map = [],
		nextLine,
		cellChanged = null; // need to understand whether to add a new cell

	switch(direction){

		case 'left':
			nextLine = x - 1;

			while(nextLine >= 0){

				if(matrix[y][nextLine] === 0){
					matrix[y][nextLine] = matrix[y][nextLine+1];
					matrix[y][nextLine+1] = 0;

					cellChanged = true;
				}

				else if(matrix[y][nextLine] !== 0 &&
						matrix[y][nextLine].value === matrix[y][nextLine+1].value &&
						matrix[y][nextLine].increase !== true){

					// check march
					matrix[y][nextLine].value *= 2;
					matrix[y][nextLine].increase = true;

					matrix[y][nextLine+1] = 0;
					
					cellChanged = true;

					break;
				}

				else break;
				nextLine -= 1;
			}

			break;

		case 'top':
			nextLine = y - 1;

			while(nextLine >= 0){
				if(matrix[nextLine][x] === 0){
					matrix[nextLine][x] = matrix[nextLine+1][x];
					matrix[nextLine+1][x] = 0;

					cellChanged = true;
				}
	
				else if(matrix[nextLine][x] !== 0 &&
						matrix[nextLine][x].value === matrix[nextLine+1][x].value &&
						matrix[nextLine][x].increase !== true){

					// check march
					matrix[nextLine][x].value *= 2;
					matrix[nextLine][x].increase = true;
					
					matrix[nextLine+1][x] = 0;

					cellChanged = true;

					break;
				}

				else break;

				nextLine -= 1;
	
			}

			break;

		case 'bottom':

			nextLine = y + 1;

			while(nextLine <= 3){
				if(matrix[nextLine][x] === 0){
					matrix[nextLine][x] = matrix[nextLine-1][x];
					matrix[nextLine-1][x] = 0;

					cellChanged = true;
				}
	
				else if(matrix[nextLine][x] !== 0 &&
						matrix[nextLine][x].value === matrix[nextLine-1][x].value &&
						matrix[nextLine][x].increase !== true){

					// check march
					matrix[nextLine][x].value *= 2;
					matrix[nextLine][x].increase = true;
					
					matrix[nextLine-1][x] = 0;

					cellChanged = true;

					break;
				}

				else break;

				nextLine += 1;
	
			}

			break;

		case 'right':

			nextLine = x + 1;

			while(nextLine <= 3){
				if(matrix[y][nextLine] === 0){
					matrix[y][nextLine] = matrix[y][nextLine-1];
					matrix[y][nextLine-1] = 0;

					cellChanged = true;
				}

				else if(matrix[y][nextLine] !== 0 &&
						matrix[y][nextLine].value === matrix[y][nextLine-1].value &&
						matrix[y][nextLine].increase !== true){

					// check march
					matrix[y][nextLine].value *= 2;
					matrix[y][nextLine].increase = true;
					
					matrix[y][nextLine-1] = 0;

					cellChanged = true;

					break;
				}

				else break;

				nextLine += 1;

			}

			break;

		default:
			return;
	}

	for(let y=0; y <= 3; y++){
		for(let x=0; x <= 3; x++){
			if(matrix[y][x] === 0) continue;

			matrix[y][x].x = x;
			matrix[y][x].y = y;

			map.push(matrix[y][x]);
		}
	}

	return {map, cellChanged};
}

export default moveCell;