import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import PrivateRoute from '../components/PrivateRoute';
import SamplePage from '../pages/SamplePage';
import HomePage from '../pages/HomePage';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <header>
                <Link to="/">Home Page</Link>
                <Link to="/sample-01">Sample Page 01</Link>
                <Link to="/sample-02">Sample Page 02</Link>
                <Link to="/sample-03">Sample Page 03</Link>
            </header>
            <Switch>
                <Route exact path="/" component={HomePage}></Route>
                <PrivateRoute exact path="/:title" component={SamplePage}></PrivateRoute>
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;