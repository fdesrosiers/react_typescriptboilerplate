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

export const MODEL_SELECTED = 'MODEL_SELECTED';
export type MODEL_SELECTED = typeof MODEL_SELECTED;

export const MODEL_ADDED = 'MODEL_ADDED';
export type MODEL_ADDED = typeof MODEL_ADDED;

export type carsActions = FetchYears | FetchMakes | MakesReceived | FetchModels|ModelsReceived|ModelSelected|ModelAdded;

export interface FetchYears {
    type: FETCH_YEARS;
}

export interface FetchMakes {
    type: FETCH_MAKES;
    yearSelected: string
}

export interface MakesReceived {
    type: MAKE_RECEIVED;
    makes: Make[];
}

export interface FetchModels {
    type: FETCH_MODELS;
    yearSelected: string,
    makeSelected: string,
}

export interface ModelsReceived {
    type: MODELS_RECEIVED;
    models: Model[];
}

export interface ModelSelected {
    type: MODEL_SELECTED;
    model: string;
}

export interface ModelAdded{
    type: MODEL_ADDED;
}

export function addModel(): ModelAdded {
    return {
        type: MODEL_ADDED
    };
}

export function fetchYears(): FetchYears {
    return {
        type: FETCH_YEARS
    };
}

export function fetchMakes(year : string): FetchMakes {
    return {
        type: FETCH_MAKES,
        yearSelected: year
    };
}


export function fetchModels(year : string, make: string): FetchModels {
    return {
        type: FETCH_MODELS,
        yearSelected: year,
        makeSelected: make,
    };
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

export const modelSelected = (model: string) => {
    return {
        type: MODEL_SELECTED,
        model: model
    };
};