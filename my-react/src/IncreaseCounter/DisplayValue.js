import React, {Component} from 'react';

export class DisplayComponent extends Component {

  render(){
    return(
      <div>
        <p>{this.props.sentValue}</p>
      </div>
    );
  };
}