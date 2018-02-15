import React from 'react';
import {render} from 'react-dom';
import './css/index.css';
import App from './App';
import Demo from './Demo';

class Result extends React.Component {
  constructor() {
    super();
    this.state = {
      value: 0
    };
    this.add = this.add.bind(this);
    
  }
  
  add() {
    this.setState({value: this.state.value + 1});
  }

  
  render() {

    return (
    <div>
         <button onClick={this.add}>Add</button>
         <App numA = {this.state.value}> </App>
         <div className="index"></div>
         <Demo numD = {this.state.value}></Demo>
    </div>
  
    );
  }

}

render(<Result/>, window.document.getElementById("root"));




