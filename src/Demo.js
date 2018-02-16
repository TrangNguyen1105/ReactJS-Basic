import React, { Component } from 'react';
import './css/App.css';


class Demo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            numb: 0
        }
      }
    
    changeNumb() {
        this.setState ({numb: this.state.numb + 1});
    }

    render() {
        return(
            <div className="content">

                <label>That is {this.state.numb}</label>
            </div>
        );
    }
}

export default Demo;