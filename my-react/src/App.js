import React, {Component} from 'react';
import './App.css';
import { UserForm } from './InputForm/Form';

class App extends Component {

  render(){
    return(
      <div className="App">
        <p>The App</p>
        <UserForm></UserForm>
      </div>
    );
  }
}

export default App;