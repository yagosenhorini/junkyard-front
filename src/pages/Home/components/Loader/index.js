
import React from 'react';

import ThreeBounce from '../../../../components/Loaders/ThreeBounce';

import * as S from './styled';

const Loader = () => (
  <S.LoaderWrapper>
    <ThreeBounce
      color="#cecece"
      size={32}
    />
  </S.LoaderWrapper>
);

export default Loader;
