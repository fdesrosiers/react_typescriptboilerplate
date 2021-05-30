import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { fetchYears,fetchMakes,fetchModels,modelSelected,addModel } from '../../components/Car/actions';
import { CarInfoComponent } from '../../components/Car/carInfoComponent';
import { IApplicationState } from '../../store/store';
import { AccueilPresentation } from './accueilPresentation';

export interface AccueilProps extends RouteComponentProps<{}>{
    years:string[];
    makes: string[];
    models:string[];
    selectYear: string;
    selectMake:string;
    selectModel: string;
    fetchYears: () => void;
    fetchMakes:  (year: string) => void;
    fetchModels:  (year: string, make: string) => void;
    modelSelected:  (model: string) => void;
    addModel:  () => void;
    isValid: boolean;
    carsSelected: string[];
}

export class AccueilContainer extends  React.Component<AccueilProps, {}> {
    constructor(props: AccueilProps) {
        super(props);

        this.onChangeYear = this.onChangeYear.bind(this);
        this.onChangeMake = this.onChangeMake.bind(this);
        this.onChangeModel = this.onChangeModel.bind(this);
        this.onAddCar = this.onAddCar.bind(this);
    }

    private onChangeYear(e: React.FormEvent<HTMLSelectElement>) {
        this.props.fetchMakes( e.currentTarget.value);
    }

    private onChangeMake(e: React.FormEvent<HTMLSelectElement>) {
        this.props.fetchModels(this.props.selectYear,e.currentTarget.value);
    }

    private onChangeModel(e: React.FormEvent<HTMLSelectElement>) {
        this.props.modelSelected(e.currentTarget.value);
    }

    private onAddCar = (e: React.SyntheticEvent<EventTarget>) => {
        e.preventDefault();
        this.props.addModel();
    }


    componentDidMount() {
        this.props.fetchYears();
    }

    render() {
        return (
            <div>
                <h1>Choisit ta voiture de rêve !</h1>
                <hr />
                <div>
                    <CarInfoComponent years={this.props.years} models={this.props.models} 
                                        makes={this.props.makes} yearSelected={this.props.selectYear}  
                                        makeSelected={this.props.selectMake}  modelSelected={this.props.selectModel}
                                        onChangeMake={this.onChangeMake} onChangeModel={this.onChangeModel} onChangeYear={this.onChangeYear}/>
                </div>
                <div>
                     <AccueilPresentation onAddCar={this.onAddCar} isValid={this.props.isValid} carsSelected={this.props.carsSelected}/>
                </div>
            </div>
        );
    }

}

const mapStateToProps = (state: IApplicationState) => {
    return {
        years: state.carsReducer.Years,
        makes: state.carsReducer.Makes,
        models: state.carsReducer.Models,
        selectYear: state.carsReducer.selectedYear,
        selectMake: state.carsReducer.selectedMake,
        selectModel: state.carsReducer.selectedModel,
        isValid: state.carsReducer.isValid,
        carsSelected: state.carsReducer.selectCars,
    };
}

const mapDispatchToProps = (dispatch: any) => ({
       fetchYears: () => {return dispatch(fetchYears())},
       fetchMakes: (year: string) => {return dispatch(fetchMakes(year))},
       fetchModels: (year: string,make: string) => {return dispatch(fetchModels(year,make))},
       modelSelected: (model: string) => {return dispatch(modelSelected(model))},
       addModel: () => {return dispatch(addModel())},
});

export default connect(mapStateToProps, mapDispatchToProps)(AccueilContainer)