/*
 * @Author: zhi3210happy 
 * @Date: 2017-08-18 13:33:18 
 * @Last Modified by: zhi3210happy
 * @Last Modified time: 2017-08-18 22:05:22
 */
import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import reducer from './reducers';
import 'antd/dist/antd.css';
import './styles/App.css';
import { getAllProducts } from './actions';
import Root from './router/Root';

const logger = createLogger()

const middleware = [thunk]
if (process.env.NODE_ENV !== 'production') {
    middleware.push(logger)
}

const store = createStore(
    reducer,
    applyMiddleware(...middleware)
)

store.dispatch(getAllProducts())
// Render the main component into the dom
ReactDOM.render(
    <Root
        store={ store }
    />
    , document.getElementById('app')
);
