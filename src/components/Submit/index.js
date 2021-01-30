import React from 'react';

import * as S from './styled'

const SubmitButton = ({type, children, isLoading}) => {
  return(
    <S.Submit type={type} isLoading={isLoading}>{children}</S.Submit>
  );
};

export default SubmitButton;