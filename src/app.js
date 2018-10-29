import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import reducer from './reducers';
import Router from './router';
import './styles/styles.scss';
import 'normalize.css/normalize.css';

const store = createStore(
    reducer,
    compose(
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
        applyMiddleware(thunk, logger)
    )
);

ReactDOM.render(
    <Provider store={store} >
        <Router />
    </Provider>
    , document.getElementById('app'));
