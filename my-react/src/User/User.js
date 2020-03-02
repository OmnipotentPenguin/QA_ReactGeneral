import React from 'react';
import UserDetail from './UserDetail';

function User() {

    let myUserData = {
        FirstName:"John",
        LastName:"Doe",
        Age: 29
    }
    return (<div><UserDetail userData={myUserData}/></div>);
}

export default User;