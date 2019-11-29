// import React, { Component } from 'react';
// import Radium, { StyleRoot } from 'radium';
// import './App.css';
// import Person from './Person/Person';

// class App extends Component {
//   state = {
//     persons: [
//       { id: '1', name: 'Max', age: 26 },
//       { id: '2', name: 'Manu', age: 27 },
//       { id: '3', name: 'Christian', age: 29 }
//     ],
//     showPersons: false
//   }

//   nameChangedHandler = (event, id) => {
//     this.setState({
//       ...this.state,
//       persons: this.state.persons.map(person => {
//         if (person.id === id) {
//           return {
//             ...person,
//             name: event.target.value
//           };
//         }

//         return person;
//       })
//     })
//   }

//   togglePersonsHandler = () => {
//     this.setState({
//       showPersons: !this.state.showPersons
//     })
//   }

//   deletePersonHandler = (personId) => {
//     this.setState({
//       ...this.state,
//       persons: this.state.persons.filter(person => person.id !== personId)
//     })
//   }

//   render() {
//     const style = {
//       backgroundColor: 'green',
//       color: 'white',
//       font: 'inherit',
//       border: '1px solid blue',
//       padding: '8px',
//       cursor: 'pointer',
//       ':hover':  {
//         backgroundColor: 'lightgreen',
//         color: 'black'
//       }
//     };

//     if (this.state.showPersons) {
//       style.backgroundColor = 'red';
//       style[':hover'] = {
//         backgroundColor: 'salmon',
//         color: 'black'
//       }
//     }

//     const classes = [];

//     if (this.state.persons.length <= 2) {
//       classes.push('red');
//     }

//     if (this.state.persons.length <= 1) {
//       classes.push('bold');
//     }

//     return (
//       <StyleRoot>
//         <div className="App">
//           <h1>Hello, world!</h1>
//           <p className={classes.join(' ')}>This is working!</p>

//           <button
//             style={style}
//             onClick={this.togglePersonsHandler}>
//             Toggle persons
//           </button>

//           {this.state.showPersons && (
//             <div>
//               {this.state.persons.map(person => {
//                 return <Person
//                   key={person.id}
//                   name={person.name}
//                   age={person.age}
//                   onClick={() => this.deletePersonHandler(person.id)}
//                   onChange={(event) => this.nameChangedHandler(event, person.id)} />
//               })}
//             </div>
//           )}
//         </div>
//       </StyleRoot>
//     );
//   }
// }

// export default Radium(App);

//below will be the version with the styled library
import React, { Component } from 'react';
import styled from 'styled-components';
import './App.css';
import Person from './Person/Person';

const StyledButton = styled.button`
  background-color: ${props => props.alt ? 'red' : 'green'};
  color: white;
  font: inherit;
  border: 1px solid blue;
  padding: 8px;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
    color: black;
  }
`;

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
    const classes = [];

    if (this.state.persons.length <= 2) {
      classes.push('red');
    }

    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
      <div className="App">
        <h1>Hello, world!</h1>
        <p className={classes.join(' ')}>This is working!</p>

        <StyledButton
          alt={this.state.showPersons}
          onClick={this.togglePersonsHandler}>
          Toggle persons
        </StyledButton>

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
