import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import ReduxPromise from 'redux-promise'
import thunkMiddleware from 'redux-thunk'
import {combineReducers} from 'redux'
import HomeReducer from './home/reducers/home'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

const createStoreWithMiddleware = applyMiddleware(ReduxPromise, thunkMiddleware)(createStore)

const store = createStore(
	HomeReducer,
	window.devToolsExtension && window.devToolsExtension() //Redux dev tools in chrome
);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(HomeReducer, window.devToolsExtension && window.devToolsExtension() )}><App /></Provider>,
  document.getElementById('root'));
registerServiceWorker();
