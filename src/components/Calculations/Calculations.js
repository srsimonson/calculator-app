import React, {Component} from 'react';

class Calculations extends Component {
    state = {
        calculations: 'calculations hi'
    }

    render() {
        console.log('calcuations state', this.state);
        
        return (
            <>
            <div>
                <h1>Calculation History</h1>
            </div>
            <div>
                {/* Map through calculations here. */}
            </div>
            </>
        )
    }
}

export default Calculations;