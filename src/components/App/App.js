// import logo from '../../logo.svg';
import React, {Component} from 'react';
import './App.css';
import Calculator from '../Calculator/Calculator';
import Calculations from '../Calculations/Calculations';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
        <div className="calculator-body">
          {/* <h1>Calculator Body</h1> */}
            <Calculator/>
        </div>
        <div className="calculation-history">
          {/* <h1>calculation History</h1> */}
            <Calculations/>
        </div>
      </div>
    );
  }
}

export default App;
