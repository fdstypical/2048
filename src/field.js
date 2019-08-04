import React from 'react';
import Cell from './cell';
import BackGround from './background';

class Field extends React.Component{

	render(){
		let cells = this.props.map;
		// need for normali work animations
		cells.sort((a,b) => a.id-b.id);

		return(
			<div className='game-field'>

				<BackGround />

				{
					cells.map( item => {
						return(
							<Cell 
								key = {item.id}
								x = {item.x}
								y = {item.y}
								value = {item.value}
							/>
						)
					})
				}
			</div>
		)
	}
}

export default Field;