import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CreateItem from '../pages/CreateItem';

import HomePage from '../pages/Home/index';
import UpdateItem from '../pages/UpdateItem/index'; 

const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path='/'>
          <HomePage />
        </Route>
        <Route path='/update/:id'>
          <UpdateItem />
        </Route>
        <Route path='/create'>
          <CreateItem />
        </Route>
      </Switch>
    </>
  )
};

export default Routes;