import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Main from './pages/main';
import Login from './pages/login';
import Registrar from './pages/register';

export default () => {
    return (

        <BrowserRouter>

            <Route path="/" exact component={Main} />
            <Route path="/login" exact component={Login} />
            <Route path="/register" exact component={Registrar} />

        </BrowserRouter>

    )
}