import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 26 },
      { name: 'Manu', age: 27 },
      { name: 'Christian', age: 29 }
    ],
    otherState: 'some other value'
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 26 },
        { name: 'Manu', age: 27 },
        { name: 'Christian', age: 24 }
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Max', age: 26 },
        { name: event.target.value, age: 27 },
        { name: 'Christian', age: 24 }
      ]
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
          onClick={() => this.switchNameHandler('Maximilian')}>
          Switch name
        </button>

        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age} />

        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          onClick={this.switchNameHandler.bind(this, 'Max!')}
          onChange={this.nameChangedHandler}>
          My hobbies: Racing
        </Person>

        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;

// import React, { useState } from 'react';
// import './App.css';
// import Person from './Person/Person';

// const App = props => {
//   const [ personsState, setPersonsState ] = useState({
//     persons: [
//       { name: 'Max', age: 26 },
//       { name: 'Manu', age: 27 },
//       { name: 'Christian', age: 29 }
//     ]
//   });

//   const [ otherState, setotherState ] = useState({
//     otherState: 'some other value'
//   });

//   const switchNameHandler = () => {
//     setPersonsState({
//       persons: [
//         { name: 'Maximilian', age: 26 },
//         { name: 'Manu', age: 27 },
//         { name: 'Christian', age: 24 }
//       ]
//     })
//   };

//   return (
//     <div className="App">
//       <h1>Hello, world!</h1>
//       <p>This is working!</p>
//       <button onClick={switchNameHandler}>Switch name</button>

//       <Person
//         name={personsState.persons[0].name} age={personsState.persons[0].age} />

//       <Person
//         name={personsState.persons[1].name} age={personsState.persons[1].age}>
//         My hobbies: Racing
//       </Person>

//       <Person
//         name={personsState.persons[2].name} age={personsState.persons[2].age} />
//     </div>
//   );
// };

// export default App;
