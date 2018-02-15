import React, { Component } from 'react';
import './css/App.css';


class Demo extends React.Component {
    constructor(props) {
        super(props)
        
      }

    render() {
        return(
            <div className="content">

                <label>That is {this.props.numD}</label>
            </div>
        );
    }
}

export default Demo;