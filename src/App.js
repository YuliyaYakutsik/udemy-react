import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    persons: [
      { name: 'Yuliya' },
      { name: 'Anna' }
    ]
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: event.target.value },
        { name: 'Anna' }
      ]
    })
  }

  render() {
    const style = {
      color: 'red',
      fontSize: '20px'
    };

    return (
      <div className="App">
        <h1>Hello, world!</h1>
        <p style={style}>This is working!</p>
        <UserInput
          onChange={this.nameChangeHandler}
          value={this.state.persons[0].name} />
        <UserOutput
          name={this.state.persons[0].name} />
        <UserOutput
          name={this.state.persons[1].name} />
      </div>
    );
  }
}

export default App;
