import {call, put, takeLatest} from 'redux-saga/effects';
import { FetchMakes,makesReceived,FETCH_MAKES ,FetchModels,modelsReceived,FETCH_MODELS} from '../components/Car/actions';
import CarsAPI from '../api/carsAPI';
import { Make,Model } from '../api/carsApiType';



function* handleFetchMakes(action: FetchMakes) {
    let makes: {Makes :Make[]};
    let carsAPI = new CarsAPI();

    makes = yield call(carsAPI.getMakesAsync,action.yearSelected);

    yield put(makesReceived(makes.Makes));
}

export function* fetchMakesSaga() {
    yield takeLatest(FETCH_MAKES, handleFetchMakes);
}

function* handleFetchModels(action: FetchModels) {
    let models:{ Models:Model[]};
    let carsAPI = new CarsAPI();
    models = yield call(carsAPI.getModelsAsync,action.yearSelected,action.makeSelected);
    yield put(modelsReceived(models.Models));
}

export function* fetchModelsSaga() {
    yield takeLatest(FETCH_MODELS, handleFetchModels);
}