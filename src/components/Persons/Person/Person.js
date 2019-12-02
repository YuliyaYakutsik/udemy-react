import React from 'react';
import './Person.css';

const Person = (props) => {
	console.log('[Person.js] rendering...');

	return (
		<div
			className="Person">
			<p onClick={props.onClick}>I`m {props.name} and I`m {props.age} years old!</p>
			<p>{props.children}</p>
			<input type="text" onChange={props.onChange} value={props.name} />
		</div>
	)
}

export default Person;
