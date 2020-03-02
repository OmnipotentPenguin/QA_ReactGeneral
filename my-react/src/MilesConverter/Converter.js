import React, { Component } from 'react';
import { InputValue } from './InputValue';

export class MilesConverter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            miles: 0,
            km: 0
        };
    };

    handleChange = (event) => {
        if (event.target.name === "miles") {
            this.setState({ miles: event.target.value, km: event.target.value * 1.609 });
        } 
        
        if (event.target.name === "km") {
        this.setState({miles: event.target.value/1.609, km: event.target.value});        
        }
    }

    render() {
        return (
            <div>
                <p>Miles</p>
                <InputValue name="miles" value={this.state.miles} handleChange={this.handleChange} ></InputValue>
                <p>KM</p>
                <InputValue name="km" value={this.state.km} handleChange={this.handleChange}></InputValue>
            </div>
        );
    }
}