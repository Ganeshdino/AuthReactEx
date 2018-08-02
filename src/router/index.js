import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import App from '../components/app';
import Home from '../containers/home';
import Login from '../containers/login'

const routes = (props) => {
    return (
        <BrowserRouter>
            <div>
                <Route exact path='/' component={Home} />
                <Route path='/home' component={Home} />
                {/* <Route path='/login' component={Login} /> */}
            </div>
        </BrowserRouter>
    )
}

export default routes;