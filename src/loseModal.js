import React from 'react';

function LoseModal(props) {
	return (
		<div className='lose-modal'>
			<div className='modal-dialog'>	
				<h1 className='modal-title'>Game Over!</h1>

				<button 
					className='reload-btn'
					onClick={props.tryAgain}
				>
					Try Again!
				</button>
			</div>
		</div>
	)
}

export default LoseModal;