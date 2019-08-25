import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Name extends Component {
  constructor(props) {
    super(props)
    this.state = {name: 'señor desconocido'}
  }
  changeName() {
    let n = document.getElementsByClassName('input')[0].value
    this.setState({name: n})
  }
  render() {
    return (
      <div className="App-sayname">
        <input type="name" className="input" placeholder="Tu nombre" onChange={this.changeName.bind(this)}/>
        <h2 className="input-helper">Bienvenido {this.state.name}!</h2>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome Jackseni</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Name/>
      </div>
    );
  }
}

export default App;

