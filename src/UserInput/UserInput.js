import React from 'react';

const UserInput = (props) => {
	return (
		<input type="text" onChange={props.onChange} value={props.value} />
	)
}

export default UserInput;
