import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      food: ["Spaghetti", "Ice Cream", "Sushi", "Bologna","Cheese"]
    }
  }
  render() {
       const{food}= this.state
     const groceryList = food.map(e=><h2>{e}</h2>)

    return (
      <div className= "App"> 
      <div>{groceryList}</div> 
      </div>
    );
  }
}

export default App;
