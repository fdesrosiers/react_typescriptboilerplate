import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import history from './route/historyRoute';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { Routes } from './route/routes';

let store = configureStore();

ReactDOM.render(
            <Provider store={store}>
                    <Router history={history}>
                        <Routes/>
                    </Router >
            </Provider>,
            document.getElementById("root"));