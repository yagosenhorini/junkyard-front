import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { start } from '../../store/ducks/data';

import Loader from './components/Loader';
import { Main } from './components/Main/styled';
import InfoWrapper from './components/InfoWrapper';

const HomePage = () => {
  const dispatch = useDispatch();
  const { isLoading, data } = useSelector((state) => state.data);
  
  useEffect(() => {
    (async () => {
      dispatch(start());
    })();
  }, [dispatch]);
  
  if(isLoading || !data?.length) {
    return (
     <Loader />
    );
  }

  return (
      <Main>
        <InfoWrapper />
      </Main>
  );

};

export default HomePage;