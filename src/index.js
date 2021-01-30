import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import { Provider } from 'react-redux';

import Footer from './containers/Footer';
import { Header } from './containers/Header';
import { GlobalStyle } from './config/global/styled';


import store from './store/index';
import Routes from './routes/routes';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} name="FerroVelho">
      <GlobalStyle />
      <Router>
        <Header />
        <Routes />
      </Router>
      <Footer />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);