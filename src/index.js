import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import {createStore ,applyMiddleware} from 'redux'
import rootReducer  from './Reducers/index'
import thunk from 'redux-thunk'




const store = createStore(rootReducer,applyMiddleware(thunk))
ReactDOM.render(
  <Provider  store={store} >
    <App />
  </Provider>,
  document.getElementById('root')
);


// store.dispatch({action}),store will run its reducer function,
//the only way to update state is to call store.dispatch function and 
// pass in action object ,the store will run its reducer function and savae the new 
// state value inside