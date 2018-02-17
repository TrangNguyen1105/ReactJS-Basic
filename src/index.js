import React from 'react';
import {render} from 'react-dom';
import App from './App';
import Demo from './Demo';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const defaultState = {value: 0};

const reducer = (state = defaultState, action) => {
  if(action.type === "ADD") return {value: state.value + 1};
  return state;
}

const store = createStore(reducer);

class Result extends React.Component {
  
  render() {

    return (
      <Provider store={store}>
         <App/>
      </Provider>
    );
  }

}


render(<Result/>, window.document.getElementById("root"));




