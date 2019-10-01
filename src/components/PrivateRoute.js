import React from 'react';
import { Redirect, Route } from 'react-router-dom';

import { firebase } from '../firebase/firebase';

const PrivateRoute = ({component: Component, ...rest}) => (
    <Route {...rest}
        render={props =>
            (!!firebase.auth().currentUser) ? (
                <Component {...props} />
            ) : (
                <Redirect to={{
                    pathname: '/',
                    state: {from: props.location}
                }} />
            )
        }
    ></Route>
);

export default PrivateRoute;