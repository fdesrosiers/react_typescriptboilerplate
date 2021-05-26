import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import Accueil from '../accueil';

export const Routes:React.FunctionComponent = () => {
    return (
        <Switch>
            <Route path="/" exact={true} component={Accueil}/>
        </Switch>
    );
;}