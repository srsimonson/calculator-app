import React, { Component } from 'react';
import './Calculations.css';

class Calculations extends Component {

    componentDidMount(){
        console.log('props', this.props);
    }

    render(){
        return(
        <>  
            <h1>Calculation History</h1>
            <ul>
                {this.props.calculationHistory.map((item) => {
                    return <li key={item.id}> {item.expression} = {item.answer}</li>
                })}
            </ul>
        </>
        );
    }
}

export default Calculations;