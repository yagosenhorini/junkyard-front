import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from './components/Loader';

import { start } from '../../store/ducks/data';
import InfoWrapper from './components/InfoWrapper';
import { Main } from './components/Main/styled';

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