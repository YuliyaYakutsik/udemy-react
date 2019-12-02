import React, { useEffect } from 'react';

const Cockpit = ({
	title,
	persons,
	showPersons,
	onToggle
}) => {
	//below will be only when the component is rendered because we pass empty array as the second argument
	useEffect(() => {
		console.log('[Cockpit.js] useEffect');
		//Http request...
		setTimeout(() => {
			alert('[Cockpit.js] componentDidMount');
		}, 1000);
	}, []);

	//below will be only when persons will change
	useEffect(() => {
		console.log('[Cockpit.js] useEffect');
		//Http request...
		setTimeout(() => {
			alert('[Cockpit.js] persons componentDidUpdate');
		}, 1000);
	}, [persons]);

	//if the didn`t pass the second array argument then it will be called all the time (componentDidMount, componentDidUpdate)
	//useEffect();

	const parClasses = [];
	const buttonClasses = [];
	const style = {
      	backgroundColor: 'white',
      	font: 'inherit',
      	border: '1px solid blue',
      	padding: '8px',
      	cursor: 'pointer'
    };

	if (persons.length <= 2 ) {
		parClasses.push('red');
	}

	if (persons.length <= 1 ) {
		parClasses.push('bold');
	}

	if (showPersons) {
		buttonClasses.push('red');
	}

	return (
		<div>
			<h1>{title}</h1>
	        <p className={parClasses.join(' ')}>This is working!</p>

	        <button
	        	className={buttonClasses.join(' ')}
	        	style={style}
	          	onClick={onToggle}>
	          	Toggle persons
	        </button>
		</div>
	)
}

export default Cockpit;
