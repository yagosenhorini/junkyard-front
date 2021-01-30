import React from 'react';
import { Provider } from 'react-redux';

import Footer from '../containers/Footer';
import { Header } from '../containers/Header';
import { GlobalStyle } from '../config/global/styled';


import store from '../store/index';

const Root = ({ name, children }) => (
  <>
    <GlobalStyle />
    <Header />
    <Provider store={store} name={name}>
      {React.Children.only(children)}
    </Provider>
    <Footer />
  </>
);

export default Root;