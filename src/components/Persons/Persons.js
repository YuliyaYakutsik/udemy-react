import React from 'react';
import Person from './Person/Person';

const Persons = ({
	list,
	onDelete,
	onChange
}) => {
	console.log('[Persons.js] rendering...');

	return list.map((person, idx) => {
		return <Person
	        key={person.id}
	        name={person.name}
	        age={person.age}
	        onClick={() => onDelete(person.id)}
	        onChange={(event) => onChange(event, person.id)} />
	});
};

export default Persons;
