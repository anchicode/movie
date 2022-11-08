import React from 'react';

import { Route, Switch } from 'react-router-dom';

import Home from '../components/pages/Home.jsx';
import Catalog from '../components/pages/Catalog.jsx';
import Detail from '../components/pages/Detail/Detail.jsx';

const Routes = () => {
    return (
        <Switch>
            <Route
                path='/:category/search/:keyword'
                component={<Catalog/>}
            />
            <Route
                path='/:category/:id'
                component={Detail}
            />
            <Route
                path='/:category'
                component={Catalog}
            />
            <Route
                path='/'
                exact
                component={Home}
            />
        </Switch>
    );
}

export default Routes;