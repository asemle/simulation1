import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Bin from './Bin';

export default (
    <Switch>
        <Route component={Bin} exact path="/bin/id" />

    </Switch>
)