import React, { Component } from 'react';
import Input from 'Common/input';
import Button from 'Common/button';

class FibonacciInput extends Component {
    constructor (props: any) {
        super(props);

        this.state = {
            inputVal: '',
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this);
    }
    handleInputChange (val: string) {
        this.setState({ inputVal: val });
    }
    handleButtonClick () {
        // dispatch redux to calculate fibonacci numbers in the results component
    }
    render () {
        return (
            <div>
                <Input callback={this.handleInputChange} />
                <Button callback={this.handleButtonClick} />
            </div>
        )
    }
}

export default FibonacciInput;