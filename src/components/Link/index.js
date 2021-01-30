import React from 'react';

import * as S from './styled';

const LinkWrapper = (props) => {
  return(
    <S.LinkWrapper to={props.to}>{props.children}</S.LinkWrapper>
  );
};

export default LinkWrapper;