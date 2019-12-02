import React, { Component } from 'react';
import './App.css';
import Cockpit from '../components/Cockpit/Cockpit';
import Persons from '../components/Persons/Persons';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }

  state = {
    persons: [
      { id: '1', name: 'Max', age: 26 },
      { id: '2', name: 'Manu', age: 27 },
      { id: '3', name: 'Christian', age: 29 }
    ],
    showPersons: false
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
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
    console.log('[App.js] render');

    return (
      <div className="App">
        <Cockpit
          title={this.props.appTitle}
          persons={this.state.persons}
          showPersons={this.state.showPersons}
          onToggle={this.togglePersonsHandler} />

        {this.state.showPersons && (
          <Persons
            list={this.state.persons}
            onDelete={this.deletePersonHandler}
            onChange={this.nameChangedHandler} />
        )}
      </div>
    );
  }
}

export default App;
