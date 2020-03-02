import React, {Component} from 'react';

export class InputValue extends Component {
    render(){
        return(
            <input name={this.props.name} type="number" value={this.props.value} onChange={this.props.handleChange}></input>
        )
    }
}
