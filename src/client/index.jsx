import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
//import 'bootstrap';
//import 'bootstrap/dist/css/bootstrap.min.css';
//import 'webpack-icons-installer/bootstrap';

import App from './app';

const app = (
  <BrowserRouter>
    <App name="Pavel" />
  </BrowserRouter>
);

hydrate(app, document.getElementById('root'));
