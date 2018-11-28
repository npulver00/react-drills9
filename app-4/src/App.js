import React, { Component } from 'react';
import './App.css';
import Login from "./Login/Login"

class App extends Component {
  constructor(){
    super();
    this.state={
      username: "",
      password: ""
    }
  }


  login=()=>{
     return alert(`Username: ${this.state.username}   Password:  ${this.state.password}`)
  }
  updateUser=(value)=>{
    this.setState({
      username: value
    })
  }
  updatePassword=(value)=>{
    this.setState({
      password: value
    })
  }
  

  render() {
    return (
      <div className="App">
        <Login 
          //propname = {prop}
          alertLogin = {this.login}
          alertUser ={this.updateUser}
          alertPassword = {this.updatePassword}
        />
      </div>
    );
  }
}

export default App;
