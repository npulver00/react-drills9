import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      input:"",
      food:  ["Spaghetti", "Ice Cream", "Sushi", "Bologna","Cheese"]
    }
  }
  updateList=(value)=>{
    this.setState({
       input: value
    })
  }

  render() {
     const{food, input, newArray}= this.state
     const foodList = food.filter(e=>{
       return e.includes(input)
     }).map((e,i)=>{
       return <h2 key={i}>{e}</h2>
     })
    return (
      <div className="App">
      <input onChange={e=>this.updateList(e.target.value)}></input>
       {foodList}
        </div>
    );
  }
}

export default App;
