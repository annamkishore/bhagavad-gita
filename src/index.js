import React from 'react';
import {render} from 'react-dom';
import BookRouter from "./containers/Router";

import './assets/styles.css';

render(
    <React.StrictMode>
        <BookRouter/>
    </React.StrictMode>,
    document.getElementById('root')
);
