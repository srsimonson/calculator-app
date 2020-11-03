import React, {Component} from 'react';
import { evaluate, sqrt } from 'mathjs';
import './Buttons.css';

class Buttons extends Component {
    state = {
        // expression: '',
        operator: '',
        operatorClicked: false,
        firstNumber: '',
        secondNumber: '',
        answer: '',
        showExpression: true,
    }

    numberClicked = (event) => {
        // this.setState ({
        //     expression: this.state.expression.concat(event.target.value),
        // })
        if (this.state.operatorClicked === false) {
            this.setState({ 
                firstNumber: this.state.firstNumber.concat(event.target.value),
                showExpression: true,
            })
        } else {
            this.setState({ 
                secondNumber: this.state.secondNumber.concat(event.target.value),
                showExpression: true,
            })
        }
    }

    decimalClicked = (event) => {
        if (!this.state.firstNumber.includes('.') && !this.state.operatorClicked) {
            console.log('hi');
            this.setState({ firstNumber: this.state.firstNumber.concat(event.target.value) })
        } else if (this.state.operatorClicked) {
            !this.state.secondNumber.includes('.') 
                ?
                    this.setState({ secondNumber: this.state.secondNumber.concat(event.target.value) }) 
                : 
                    console.log('Decimal be gone!!!!!!!!');
        }
    }

    operatorClicked = (event) => {
        if (this.state.firstNumber !== '') {
            this.setState({
                operator: event.target.value,
                operatorClicked: true,
            })
        }
    }

    equalsClicked = () => {
        evaluate(this.state.firstNumber.concat(this.state.operator, this.state.secondNumber)) === Infinity ?
            this.setState({
                answer: undefined
            }) 
        :
            this.setState({
                answer: evaluate(this.state.firstNumber.concat(this.state.operator, this.state.secondNumber))
            })
        this.setState({
            // expression: '',
            firstNumber: '',
            secondNumber: '',
            operator: '',
            showExpression: false,
            operatorClicked: false,
        })
        // universal refresh goes here
    }

    percentClicked = () => {
        this.setState({
            // expression: '',
            answer: this.state.firstNumber / 100,
            showExpression: false,
            firstNumber: '',
            operatorClicked: false,
        })
    }

    sqrtClicked = () => {
        this.setState({
            // expression: '',
            answer: sqrt(this.state.firstNumber),
            showExpression: false,
            firstNumber: '',
            operatorClicked: false,
        })
    }

    clearClicked = () => {
        this.setState({
            // expression: '',
            answer: '',
            firstNumber: '',
            secondNumber: '',
            operator: '',
        })
    }

    render() {
        console.log('state: ', this.state);
        
        return (
            <>
            <div className='output'>
                { this.state.showExpression === true 
                ? 
                    <ul>
                        <li>{this.state.firstNumber} {this.state.operator} {this.state.secondNumber}</li>
                    </ul>
                :
                    <ul>
                        <li>{this.state.answer}</li>
                    </ul>
                }
            </div>
            <div className='button-grid'>
                <div className='button-row'>
                    <button className='non-ops' onClick={this.clearClicked}>C</button>
                    <button className='non-ops' onClick={this.sqrtClicked}>√</button>
                    <button className='non-ops' value='%' onClick={this.percentClicked}>%</button>
                    <button className='operator' value='/' onClick={this.operatorClicked}>/</button>
                </div>
                <div className="button-row">
                    <button value='7' onClick={this.numberClicked}>7</button>
                    <button value='8' onClick={this.numberClicked}>8</button>
                    <button value='9' onClick={this.numberClicked}>9</button>
                    <button className='operator' value='*' onClick={this.operatorClicked}>x</button>
                </div>
                <div className="button-row">
                    <button value='4' onClick={this.numberClicked}>4</button>
                    <button value='5' onClick={this.numberClicked}>5</button>
                    <button value='6' onClick={this.numberClicked}>6</button>
                    <button className='operator' value='-' onClick={this.operatorClicked}>-</button>
                </div>
                <div className="button-row">
                    <button value='1' onClick={this.numberClicked}>1</button>
                    <button value='2' onClick={this.numberClicked}>2</button>
                    <button value='3' onClick={this.numberClicked}>3</button>
                    <button className='operator' value='+' onClick={this.operatorClicked} >+</button>
                </div>
                <div className="button-row">
                    <button className='zero' value='0' onClick={this.numberClicked}>0</button>
                    <button value='.' onClick={this.decimalClicked} >.</button>
                    <button className='operator' value='=' onClick={this.equalsClicked}>=</button>
                </div>
            </div>
            </>
        )
    }
}

export default Buttons;