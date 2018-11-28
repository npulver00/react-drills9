import React, { Component } from 'react';
import './App.css';
import Image from "./Image/Image"

class App extends Component {
  constructor(){
    super();
    this.state={
      url:"https://http.cat/408"
    }
  }


  
  render() {
    return (
      <div className="App">
       <Image 
        catImage = {this.state.url}
       />
      </div>
    );
  }
}

export default App;
