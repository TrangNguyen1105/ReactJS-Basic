import React, { Component } from 'react';
import './css/App.css';

class App extends React.Component {
  constructor() {
    super();
    
  }

  render() {
    return (
      <div className="content">
        
        <hr/>
        <label>this is {this.props.numA}</label>
       
      </div>
    );
  }
}

export default App;
