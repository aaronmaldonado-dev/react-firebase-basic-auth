import React from 'react';
import ReactDOM from 'react-dom';

import { firebase } from './firebase/firebase';
import AppRouter from './routers/AppRouter';

const jsx = (
    <AppRouter/>
);

ReactDOM.render(jsx, document.getElementById('app'));