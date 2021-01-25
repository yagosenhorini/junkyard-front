import React from 'react';
import ReactDOM from 'react-dom';

import Root from './core/Root';
import HomePage from './pages/Home';

ReactDOM.render(
  <Root name="FerroVelho">
    <HomePage />
  </Root>,
  document.getElementById('root')
);