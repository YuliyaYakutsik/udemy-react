import React from 'react';
import './UserOutput.css';

const UserOutput = (props) => {
	return (
		<div className="UserOutput">
			<p>I`m {props.name}!</p>
			<p>I`m studying!</p>
		</div>
	)
}

export default UserOutput;
