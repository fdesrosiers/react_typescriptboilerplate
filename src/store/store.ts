import { combineReducers } from 'redux';
import { CarState } from '../reducers/carsReducer';
import carsReducer from '../reducers/carsReducer';

export const appReducers =  combineReducers<IApplicationState> ({
    carsReducer
});


export interface IApplicationState {
    carsReducer: CarState,
}