import React from 'react';
import calculateColor from './logic/calculateColor';

function Cell(props) {

	let left = 15 + (props.x * 165) + (props.x * 10) + 'px',
	 	top = 15 + (props.y * 165) + (props.y * 10) + 'px',
	 	background = calculateColor(props.value),
	 	color;

	if(props.value >= 8) color = '#fff';
	else color = '#5c5655';

	return(
		<div style={{left,top,background,color}} className='game-cell'>
			{props.value}
		</div>
	)
}

export default Cell;