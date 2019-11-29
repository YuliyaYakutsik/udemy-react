import React from 'react';
import './Char.css';

const Char = (props) => {
	return (
		<div className="Char" onClick={props.onDelete}>
			{props.text}
		</div>
	)
}

export default Char;
