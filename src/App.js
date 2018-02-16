import React, { Component } from 'react';
import './css/App.css';
import Demo from './Demo';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      value: 0
    };
    this.add = this.add.bind(this);
    
  }
  
  add() {
    this.refs.changeD.changeNumb();
    this.setState({value: this.state.value + 1});
  }

  render() {
    return (
      <div className="content">
        <button onClick={this.add}>Add</button>
        <hr/>
        <label>This is {this.state.value}</label>
        <div className="index"></div>
        <Demo ref="changeD"></Demo>
      </div>
    );
  }
}

export default App;
