import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import App from '../components/app';
import Home from '../components/home';
import Login from '../components/login'

const routes = (props) => {
    return (
        <BrowserRouter>
            <Route exact path='/' component={Home} />
            <Route path='/home' component={Home} />
            <Route path='/login' component={Login} />
        </BrowserRouter>
    )
}

export default routes;