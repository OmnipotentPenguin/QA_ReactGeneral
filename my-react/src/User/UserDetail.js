import React from 'react';

export default class UserDetail extends React.Component{
    render() {
        return (
            <ul>
                <li> First Name:    {this.props.userData.FirstName}</li>
                <li> Last Name:     {this.props.userData.LastName}</li>
                <li> Age:           {this.props.userData.Age}</li>
            </ul>
        )
    }
};