import React, { Component } from 'react';
import { InputValue } from './InputValue';

export class UserForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            email: "",
            password: ""
        };
    };

    handleChange = ({ target: { name, value } }) => {
        this.setState({ [name]: value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.username + '\n' + this.state.email +'\n' + this.state.password);
    }

    render() {
        return (
            <form name="inputForm" onSubmit={this.handleSubmit}>
                <p>
                    <InputValue name="username" type='text' value={this.state.username} handleChange={this.handleChange} ></InputValue>
                </p>
                <p>
                    <InputValue name="email" type='email' value={this.state.email} handleChange={this.handleChange}></InputValue>
                </p>
                <p>
                    <InputValue name="password" type='password' value={this.state.password} handleChange={this.handleChange}></InputValue>
                </p>
                <p>
                    <button>Submit</button>
                </p>
            </form>
        );
    }
}