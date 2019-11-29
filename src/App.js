import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {
  state = {
    enteredText: ''
  }

  inputChangeHandler = (event) => {
    this.setState({
      ...this.state,
      enteredText: event.target.value
    })
  }

  deleteLetterHandler = (idx) => {
    const textArray = this.state.enteredText.split('');

    this.setState({
      ...this.state,
      enteredText: textArray.filter((letter, index) => index !==idx).join('')
    })
  }

  render() {
    const textLength = this.state.enteredText.length;
    const textArray = this.state.enteredText.split('');

    return (
      <div className="App">
        <h1>Hello, world!</h1>
        <p>This is working!</p>
        <input
          type="text"
          value={this.state.enteredText}
          onChange={this.inputChangeHandler} />
        {this.state.enteredText && (
          <div>
            <p>{textLength}</p>
            {textArray.map((letter, idx) => {
              return <Char
                key={idx}
                text={letter}
                onDelete={() => this.deleteLetterHandler(idx)} />
            })}
          </div>
        )}
        <Validation
          length={textLength} />
      </div>
    );
  }
}

export default App;
