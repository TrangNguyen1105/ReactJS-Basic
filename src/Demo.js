import React, { Component } from 'react';
import './css/App.css';
import { connect } from 'react-redux';


class Demo extends React.Component {
    constructor(props) {
        super(props)
       
    }

    render() {
        return(
            <div className="content">

                <label>That is {this.props.myNumb}</label>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { myNumb: state.value };
}
  

export default connect(mapStateToProps)(Demo);