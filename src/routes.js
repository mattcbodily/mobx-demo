import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Group from './Components/Group/Group';
import View from './Components/View/View';
import Create from './Components/Create/Create';

export default (
    <Switch>
        <Route exact path = '/' component = {Home}/>
        <Route path = '/group/:name' component = {View}/> 
        <Route path = '/group' component = {Group}/>
        <Route path = '/create' component = {Create}/>
    </Switch>
)