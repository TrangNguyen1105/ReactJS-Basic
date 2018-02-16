import React from 'react';
import {render} from 'react-dom';
import App from './App';
import Demo from './Demo';

class Result extends React.Component {
  
  render() {

    return (
    <div>
         
         <App> </App>
         
         
    </div>
  
    );
  }

}

render(<Result/>, window.document.getElementById("root"));




