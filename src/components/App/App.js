// import logo from '../../logo.svg';
import React, {Component} from 'react';
import './App.css';
import Calculator from '../Calculator/Calculator';
import Calculations from '../Calculations/Calculations';
import axios from 'axios';

class App extends Component {

  state = {
    calculationHistory: [],
  }

  componentDidMount() {
    this.getCalcHx()
  }

  getCalcHx = () => {
    console.log('dododo');
    axios({
      method: 'GET',
      url: '/calculations'
    }).then((response) => {
      console.log('response', response.data);
      this.setState({
        calculationHistory: response.data
      })
    }).catch((error) => {
      console.log('error with GET request', error);
    })
  }

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
            <Calculator/>
        </div>
        <div className="calculation-history">
            <Calculations calculationHistory={this.state.calculationHistory}/>
        </div>
      </div>
    );
  }
}

export default App;
