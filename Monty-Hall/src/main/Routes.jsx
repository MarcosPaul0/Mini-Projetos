import React from 'react'
import {Switch, Route, Redirect} from 'react-router'

import Home from '../components/Home'
import Play from '../components/Play'

export default props =>
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/play" component={Play}/>
        <Redirect from="*" to="/"/>
    </Switch>