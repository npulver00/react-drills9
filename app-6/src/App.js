import React, { Component } from 'react';
import './App.css';
import Todo from "./Todo/Todo"

class App extends Component {
  constructor(){
    super();
    this.state={
      input: "",
      tasks: []
    }
  }
  handleInput=(value)=>{
    this.setState({
      input:value,
      
    })
  }

  updateList=()=>{
       this.setState({
      tasks:[this.state.tasks, this.state.input],
      input: ""
    })
  }
  render() {
      let tasks = this.state.tasks.map((e,i)=>{
        return <Todo key={i} task={e}/>
      })
    return (
      <div className="App">
       <Todo/>
       <h2>My to-do list:</h2>
       <input placeholder= "Enter new task" value={this.state.input} onChange={e=>this.handleInput(e.target.value)}/>
       <button onClick={this.updateList}>Add</button>

       {tasks}
      </div>
    );
  }
}

export default App;
