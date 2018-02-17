import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home.js'
import Shelf from './Shelf.js';

export default (
    <Switch>
        
        <Route component={Home} exact path="/"/>
        <Route component={Shelf} path="/bins/:id" />

    </Switch>
)