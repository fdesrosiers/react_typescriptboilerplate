import { carsActions, FETCH_YEARS,MAKE_RECEIVED, MODELS_RECEIVED,FETCH_MAKES, FETCH_MODELS,MODEL_SELECTED} from '../components/Car/actions/index';
import { Make,Model } from '../api/carsApiType';

export interface CarState  {
    selectedModel : string;
    selectedMake : string;
    selectedYear : string;

    Models : string[];
    Makes : string[];
    Years : string[]
}

export const initialState: CarState = {
        selectedModel : "",
        selectedMake : "",
        selectedYear : "",
        Models : [],
        Makes : [],
        Years :  [],
}

export default function carsReducer(state: CarState = initialState, action: carsActions) {
    switch (action.type) {
        case FETCH_YEARS:
            return handleCarsInfoLoaded(state);
        case FETCH_MAKES:
            return handleYearSelected(state,action.yearSelected);
        case FETCH_MODELS:
            return handleMakeSelected(state,action.makeSelected);                           
        case MAKE_RECEIVED:
            return handleMakesReceived(state,action.makes);
        case MODELS_RECEIVED:
            return handleModelsReceived(state,action.models);
        case MODEL_SELECTED:
            return handleModelSelected(state,action.model);                         
        default:
            return state;
    }
}

const handleCarsInfoLoaded = (state: CarState ) => {
    let lstYears=[];

    if(state.Years.length===0){
        for (let year=2019; year>=1947;year--) {
            lstYears.push(year.toString());
        }
        return {...state, Years: lstYears }
    }
    return {...state};
}

const handleMakesReceived = (state: CarState, makes: Make[] ) => {
    const stateMakes = getTransformedMakes(makes);
    return {...state,  Makes: stateMakes};
}

function getTransformedMakes(makes: Make[]) {
    let transformedMakes= makes.map(m =>  m.make_display); 
     return transformedMakes;
 }

const handleYearSelected = (state: CarState,yearSelected:string) => {
    return {...state,  selectedYear: yearSelected,selectedMake:'',selectedModel:''};
}

const handleMakeSelected = (state: CarState,makeSelected:string) => {
    return {...state,  selectedMake: makeSelected,selectedModel:''};
}

const handleModelSelected = (state: CarState,modelSelected:string) => {
    return {...state, selectedModel:modelSelected};
}

 const handleModelsReceived = (state: CarState, models: Model[] ) => {
    const stateModels = getTransformedModels(models);
    return {...state,  Models: stateModels};
}

function getTransformedModels(models: Model[]) {
    let transformedModels= models.map(m =>  m.model_name); 
     return transformedModels;
 }