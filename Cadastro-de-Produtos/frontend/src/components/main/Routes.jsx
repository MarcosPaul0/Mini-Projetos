import React from 'react'
import {Switch, Route, Redirect, useParams} from 'react-router'

import Products from '../templates/Products'
import Home from '../templates/Home'
import Add from '../products/Add'
import Edit from '../products/Edit'
import Delete from '../products/Delete'

export default props => 
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/products" component={Products}/>
        <Route exact path="/products/add" component={Add}/>
        <Route exact path="/products/edit/:id" component={Edit}/>
        <Route exact path="/products/delete/:id" component={Delete}/>
        <Redirect from="*" to="/"/>
    </Switch>