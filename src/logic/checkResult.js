import moveCell from './moveCell';

function checkResult(direction, cells) {
	// abstract matrix
	const matrix = Array.from(new Array(4), () => Array.from(new Array(4), () => 0));

	let newMap,
		mapChange = false;

	cells.map( item => {
		matrix[item.y][item.x] = item;
	})

	if(direction === 'left' || direction === 'top'){
		for(let y=0; y <= 3; y++){
			for(let x=0; x <= 3; x++){
				if(matrix[y][x] === 0) continue;
				newMap = moveCell(matrix,x,y,direction);

				// did the map change? 
				if(newMap.cellChanged) {
					delete newMap.cellChanged;
					mapChange = true;
				}
			}
		}
	}

	if(direction === 'right' || direction === 'bottom'){
		for(let y=3; y >= 0; y--){
			for(let x=3; x >= 0; x--){
				if(matrix[y][x] === 0) continue;
				newMap = moveCell(matrix,x,y,direction);

				// did the map change?
				if(newMap.cellChanged) {
					delete newMap.cellChanged;
					mapChange = true;
				}
			}
		}
	}

	newMap.map.forEach( item => {
		delete item.increase;
	})
	
	return {
		map:newMap.map,
		mapChange
	};
}

export default checkResult;