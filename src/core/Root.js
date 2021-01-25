import React from 'react';
import { Provider } from 'react-redux';
import { GlobalStyle } from '../config/global/styled';
import { Header } from '../containers/Header';


import store from '../store/index';

const Root = ({ name, children }) => (
  <>
    <GlobalStyle />
    <Header />
    <Provider store={store} name={name}>
      {React.Children.only(children)}
    </Provider>
  </>
);

export default Root;