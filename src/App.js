
import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';
import Mybutton from './components/Mybutton'



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Fetch the data</h1>
        </header>
        <Mybutton />
      </div>
    );
  }
}

export default App;
