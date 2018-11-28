import React, { Component } from 'react';
import './App.css';
import NewTask from "./NewTask/NewTask"
import List from "./List/List"


class App extends Component {
  constructor(){
    super();
    this.state={
      list:[]
    }
  }
  handleAddTask=(value)=>{
    this.setState({
      list:[this.state.list, value]
    })
  }

  render() {
    return (
      <div className="App">
      <div>
        <h2>My To-do List</h2>
      <NewTask add={this.handleAddTask}/>    
      <List tasks={this.state.list}/>
      
      </div>
      </div>
    );
  }
}

export default App;
