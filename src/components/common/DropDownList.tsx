/// <reference path="../../types/option.d.ts" />
import * as React from 'react';

interface DropDownListProps {
    name: string;
    label: string;
    defaultOption: string,
    options: Option[];
    value: string;
    onChange: (e: React.FormEvent<HTMLSelectElement>) => void;
}

export const DropDownList: React.FunctionComponent<DropDownListProps> = (props) => {
    return (
        <div>
          <label htmlFor={props.name}>{props.label}</label>
          <div className="field">
            <select              
              name={props.name}
              value={props.value}
              onChange={props.onChange}>

              <option value="">{props.defaultOption}</option>
                  {
                      props.options.map(currentOption =>{
                        return ( <option key={currentOption.value} value={currentOption.value}>{currentOption.label}</option>)
                      })
                  }
            </select>
          </div>
        </div>
  );
}

