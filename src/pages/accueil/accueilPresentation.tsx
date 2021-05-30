import * as React from 'react';

export interface AccueilPresentationProps {
      carsSelected: string[],
      isValid: boolean,
      onAddCar: (e: React.SyntheticEvent<EventTarget>) => void;
}

export const AccueilPresentation: React.FunctionComponent<AccueilPresentationProps> = (props) => {
    return (
            <>
            <div>
                <h1>Liste de vos voitures de rêve</h1>
                <div>
                <input type="submit" value="Ajouter une voiture" onClick={props.onAddCar} disabled={!props.isValid}/>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Description des voitures</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.carsSelected.map(currentCar => {
                           return (
                                  <tr key={currentCar}>
                                      <td>{currentCar}</td>
                                 </tr>
                                 );
                        })}
                    </tbody>
                </table>
            </div>
            </>
    )
}
