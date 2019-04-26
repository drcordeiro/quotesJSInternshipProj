import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {combineReducers, createStore} from 'redux';
import {Provider} from 'react-redux';

import colorReducer from './reducers/color-reducer';
import quotesReducer from './reducers/quotes-reducer';

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


const allReducers = combineReducers({
    color: colorReducer,
    quotes: quotesReducer
});

export const store = createStore(allReducers, window.devToolsExtension && window.devToolsExtension());

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));