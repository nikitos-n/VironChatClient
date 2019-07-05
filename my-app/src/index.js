import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { Provider } from  'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
 
import { App } from './Components/App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducer from './redux/Reducers/index';

const store =  createStore(reducer, composeWithDevTools(applyMiddleware(thunk, logger)));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));
serviceWorker.unregister();
