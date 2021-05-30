import * as React from 'react';
import { DropDownList } from '../common/DropDownList';

interface CarInfoProps {
    years: string[];
    makes: string[];
    models: string[];

    yearSelected: string;
    makeSelected: string;
    modelSelected: string

    onChangeYear: (e: React.FormEvent<HTMLSelectElement>) => void;
    onChangeMake: (e: React.FormEvent<HTMLSelectElement>) => void;
    onChangeModel: (e: React.FormEvent<HTMLSelectElement>) => void;
}

export const CarInfoComponent: React.FunctionComponent<CarInfoProps> = (props) => {
    let yearOptions: Option[] = props.years.map(y => {return {label: y, value:y}});
    let makeOptions: Option[] = props.makes.map(m => {return {label: m, value:m}});
    let modelOptions: Option[] = props.models.map(m => {return {label: m, value:m}});

    return (
            <>
                <div><DropDownList name="Year" label="Sélectionner l'année" defaultOption="" options={yearOptions} onChange={props.onChangeYear} value={props.yearSelected}/></div>
                <div><DropDownList name="Make" label="Sélectionner le constructeur" defaultOption="" options={makeOptions} onChange={props.onChangeMake} value={props.makeSelected}/></div>
                <div><DropDownList name="Model" label="Sélectionner le model" defaultOption="" options={modelOptions} onChange={props.onChangeModel} value={props.modelSelected}/></div>
            </>
    );
}