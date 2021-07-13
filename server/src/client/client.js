// import('./bootstrap');
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

// const initialState =  window.INITIAL_STATE;

ReactDOM.hydrate(
      <BrowserRouter>
        <div>{renderRoutes(Routes)}</div>
      </BrowserRouter>,
    document.getElementById('root')
);
