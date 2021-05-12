import { IStoreState,appReducers } from './store';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { registerWithMiddleware } from '../saga/index';

const sagaMiddleware = createSagaMiddleware();

export default function configureStore(initialState?: IStoreState) {

    let store = createStore(
        appReducers,
        initialState,
        applyMiddleware(sagaMiddleware,)
    );

    registerWithMiddleware(sagaMiddleware);

    return store;
}