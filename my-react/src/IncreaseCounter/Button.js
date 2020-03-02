import React, { Component } from 'react';
import { DisplayComponent } from './DisplayValue';

export class ButtonComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 0
        };
    }

    sub10 = () => {
        this.setState({ value: (this.state.value-10) });
    }

    sub1 = () => {
        this.setState({ value: (this.state.value-1) });
    }

    reset = () => {
        this.setState({ value: 0 });
    }

    add1 = () => {
        this.setState({ value: (this.state.value+1) });
    }

    add10 = () => {
        this.setState({ value: (this.state.value+10) });
    }

    render() {
        return (
            <div>
                <DisplayComponent sentValue={this.state.value}></DisplayComponent>

                <button onClick={this.sub10}>-10</button>
                <button onClick={this.sub1}>-1</button>
                <button onClick={this.reset}>0</button>
                <button onClick={this.add1}>+1</button>
                <button onClick={this.add10}>+10</button>
            </div>
        );
    }
}