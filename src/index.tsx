import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from "./App";
import { Router } from 'react-router-dom';
import history from './route/historyRoute';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';

let store = configureStore();

ReactDOM.render(
            <Provider store={store}>
                    <Router history={history}>
                        <App/>
                    </Router >
            </Provider>,
            document.getElementById("root"));