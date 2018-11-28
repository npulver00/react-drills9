import React, { Component } from 'react';
import './App.css';

class App extends Component {

     constructor(){
       super();
       this.state={
         text:""
       }
     }

     updateText=(value)=>{
       this.setState({
         text:value
       })

     }
  render() {
    const{text}=this.state
    return (
      <div>
      <div><input onChange={e=>this.updateText(e.target.value)}></input></div>
      {text}
      </div>
    );
  }
}

export default App;
