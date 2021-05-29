import { Make,Model } from '../../../api/carsApiType';

export const FETCH_YEARS = 'FETCH_YEARS';
export type FETCH_YEARS = typeof FETCH_YEARS;

export const FETCH_MAKES = 'FETCH_MAKES';
export type FETCH_MAKES = typeof FETCH_MAKES;

export const MAKE_RECEIVED = 'MAKE_RECEIVED';
export type MAKE_RECEIVED = typeof MAKE_RECEIVED;


export const FETCH_MODELS = 'FETCH_MODELS';
export type FETCH_MODELS = typeof FETCH_MODELS;

export const MODELS_RECEIVED = 'MODELS_RECEIVED';
export type MODELS_RECEIVED = typeof MODELS_RECEIVED;

export type carsActions = FetchYears | FetchMakes | MakesReceived | FetchModels|ModelsReceived;

export interface FetchYears {
    type: FETCH_YEARS;
}

export interface FetchMakes {
    type: FETCH_MAKES;
    year: string
}

export interface MakesReceived {
    type: MAKE_RECEIVED;
    makes: Make[];
}

export interface FetchModels {
    type: FETCH_MODELS;
    make: string
    year: string;
}

export interface ModelsReceived {
    type: MODELS_RECEIVED;
    models: Model[];
}

export const makesReceived = (makes: Make[]) => {
    return {
        type: MAKE_RECEIVED,
        makes: makes
    };
};

export const modelsReceived = (models: Model[]) => {
    return {
        type: MODELS_RECEIVED,
        models: models
    };
};