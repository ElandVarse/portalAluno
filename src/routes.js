import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


import Home from './pages/home/home';
import Login from './pages/login';


export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/home" exact component={Home} />
                <Route path="/" component={Login} />
            </Switch>
        </BrowserRouter>
    )
}