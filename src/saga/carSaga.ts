import {call, put, takeLatest} from 'redux-saga/effects';
import { FetchMakes,makesReceived,FETCH_MAKES ,FetchModels,modelsReceived,FETCH_MODELS} from '../components/Car/actions';
import CarsAPI from '../api/carsAPI';
import { Make,Model } from '../api/carsApiType';

function* handleFetchMakes(action: FetchMakes) {
    let makes: Make[];
    makes = yield call(CarsAPI.getMakesAsync,action.year);
    yield put(makesReceived(makes));
}

export function* fetchMakesSaga() {
    yield takeLatest(FETCH_MAKES, handleFetchMakes);
}

function* handleFetchModels(action: FetchModels) {
    let models: Model[];
    models = yield call(CarsAPI.getModelsAsync,action.year,action.make);
    yield put(modelsReceived(models));
}

export function* fetchModelsSaga() {
    yield takeLatest(FETCH_MODELS, handleFetchModels);
}