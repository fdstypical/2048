import React from 'react';

class Header extends React.Component{

	newGame = (e) => {
		this.props.handleNewGame();
	}

	render(){
		let score = 0;

		this.props.score.map( item => {
			score += item.value;
		})

		return(
			<div className='header-wrap'>
				<div className='score'>
					<p className='score-title'>SCORE</p>
					<p className='score-value'>{score}</p>
				</div>

				<button 
					onClick={this.newGame}
					className='new-game-btn'
				>
					New Game
				</button>
			</div>
		)
	}
}

export default Header;