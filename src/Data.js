import React from 'react';
import {render} from 'react-dom';
import { connect } from 'react-redux';

class Data extends React.Component {

  renderList() {
    
    return this.props.egypt1.map((myList) =>
      <div key={myList.id}>{myList.optionEn}</div>
    );
  }
  
  render() {

    return (
     
      <div>
        {this.renderList()}
        {/* { this.data} */}
      </div>
    );
  }

};

function mapStateToProps(state){
  return { egypt1: state.Egypt1};
};

export default connect(mapStateToProps)(Data);






