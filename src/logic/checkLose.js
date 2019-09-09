import checkMoveCapability from './checkMoveCapability';

// abstract matrix
const matrix = Array.from(new Array(4), () => Array.from(new Array(4), () => 0));

function checkLose(map) {
	let moveCapabilityCell = null;

	map.map( item => {
		matrix[item.y][item.x] = item;
	})

	for(let y=0; y <= 3; y++){
		for(let x=0; x <= 3; x++){
			moveCapabilityCell = checkMoveCapability(matrix, x, y);
			
			if(moveCapabilityCell) return false; // you don`t lose game!
		}
	}

	return true; // you lose game!
}

export default checkLose;