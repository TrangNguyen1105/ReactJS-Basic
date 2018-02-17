import React, { Component } from 'react';
import './css/App.css';
import Demo from './Demo';
import { connect } from 'react-redux';

class App extends React.Component {
  constructor() {
    super();
  }
  
  onChangeNumb() {
    this.props.dispatch({ type: 'ADD'});
  }

  
  render() {
    return (
      <div className="content">
        <button onClick={this.onChangeNumb.bind(this)}>Add</button>
        <hr/>
        <label>This is {this.props.myNumb}</label>
        <div className="index"></div>
        <Demo></Demo>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { myNumb: state.value };
}

export default connect(mapStateToProps)(App);
