import React, {Component} from 'react';
import Buttons from '../Buttons/Buttons';
import Calculations from '../Calculations/Calculations';

class Calculator extends Component {
    state = {
        calculator: 'is this needed?',
    };

    render() {
        console.log('calculator state: ', this.state);
        
        return (
            <>
            <div>
                <h1>Calculator Body</h1>
                <Buttons/>
            </div>
            </>
        )
    }
}

export default Calculator;