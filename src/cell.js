import React from 'react';
import calculateColor from './logic/calculateColor';
import adaptiveCellSize from './logic/adaptiveScreen'

class Cell extends React.Component {

	constructor(props){
		super(props);

		this.state = {
			showCell: false,
		}
	}

	componentDidMount(){
		// need to delay display cell... 
		this.timerId = setTimeout( () => {
			this.setState({showCell:true});
		},210)
	}

	componentWillUnmount(){
		clearTimeout(this.timerId);
	}

	render() {
		if(this.state.width === 165 && this.state.height === 165) clearInterval(this.timerId)

		let left = 15 + (this.props.x * adaptiveCellSize) + (this.props.x * 10) + 'px',
			top = 15 + (this.props.y * adaptiveCellSize) + (this.props.y * 10) + 'px',
			background = calculateColor(this.props.value),
			color,
			display = this.state.showCell ? 'flex' : 'none';

		if(this.props.value >= 8) color = '#fff';
		else color = '#5c5655';

		return(
			<div style={{left,top,background,color,display}} className='game-cell'>
				{this.props.value}
			</div>
		)
		
	}
}

export default Cell;