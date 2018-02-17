import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home.js'
import Shelf from './Shelf.js';
import Bin from './Bin.js';
import Create from './Create.js';

export default (
    <Switch>
        
        <Route component={Home} exact path="/"/>
        <Route component={Shelf} path="/bins/:id"/>
        <Route component={Bin} path='/bin/:id'/>
        <Route component={Create} path='/create/:id'/>
        
    </Switch>
)