import React from 'react';

const Validation = (props) => {
	const text = props.length > 5 ? 'Text long enough' : 'Text too short';

	return (
		<p>
			{text}
		</p>
	)
}

export default Validation;
