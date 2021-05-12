import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import app from '../app';

export const Routes:React.FunctionComponent = () => {
    return (
        <Switch>
            <Route path="/" exact={true} component={app}/>
        </Switch>
    );
;}