import { IApplicationState,appReducers } from './store';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { registerWithMiddleware } from '../saga/index';

const sagaMiddleware = createSagaMiddleware();

export default function configureStore(initialState?: IApplicationState) {

    let store = createStore(
        appReducers,
        initialState,
        applyMiddleware(sagaMiddleware,)
    );

    registerWithMiddleware(sagaMiddleware);

    return store;
}