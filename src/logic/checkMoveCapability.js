function checkMoveCapability(matrix, x, y) {
	// possible positions for the move!

	if(x < 3 && matrix[y][x+1].value === matrix[y][x].value) return true;
	if(x > 0 && matrix[y][x-1].value === matrix[y][x].value) return true;

	if(y > 0 && matrix[y-1][x].value === matrix[y][x].value) return true;
	if(y < 3 && matrix[y+1][x].value === matrix[y][x].value) return true;

	return false;
}

export default checkMoveCapability;