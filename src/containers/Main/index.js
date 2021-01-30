import React from 'react';

import * as S from './styled';

const Main = (props) => {
  return (
    <S.MainWrapper>
      {props.children}
    </S.MainWrapper>
  )
};

export default Main;