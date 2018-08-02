import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {Provider} from 'react-redux';
import rootReducer from './reducers';
import 'bootstrap/dist/css/bootstrap.css';

const store = createStore(rootReducer,applyMiddleware(thunk,logger));
ReactDOM.render(<Provider store={store}><App /></Provider>,document.getElementById("root"));