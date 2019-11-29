import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: '1', name: 'Max', age: 26 },
      { id: '2', name: 'Manu', age: 27 },
      { id: '3', name: 'Christian', age: 29 }
    ],
    showPersons: false
  }

  nameChangedHandler = (event, id) => {
    this.setState({
      ...this.state,
      persons: this.state.persons.map(person => {
        if (person.id === id) {
          return {
            ...person,
            name: event.target.value
          };
        }

        return person;
      })
    })
  }

  togglePersonsHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    })
  }

  deletePersonHandler = (personId) => {
    this.setState({
      ...this.state,
      persons: this.state.persons.filter(person => person.id !== personId)
    })
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hello, world!</h1>
        <p>This is working!</p>

        <button
          style={style}
          onClick={this.togglePersonsHandler}>
          Toggle persons
        </button>

        {this.state.showPersons && (
          <div>
            {this.state.persons.map(person => {
              return <Person
                key={person.id}
                name={person.name}
                age={person.age}
                onClick={() => this.deletePersonHandler(person.id)}
                onChange={(event) => this.nameChangedHandler(event, person.id)} />
            })}
          </div>
        )}
      </div>
    );
  }
}

export default App;
