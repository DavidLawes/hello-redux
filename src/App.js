import React from "react";
import { createStore } from "redux";
import HelloWorld from "./HelloWorld";
import reducer from './reducers'

// { dispatch, subscribe, getState }
// reducer takes 2 args: state, action

const initialState = { tech: 'react' };
const store = createStore(reducer, initialState);

console.log(store.getState())

// store.dispatch(action)

// store.getState = { new state }

const App = () => {

  // return <HelloWorld tech={'redux'} />;
  return <HelloWorld tech={store.getState().tech} />;
};

export default App;
