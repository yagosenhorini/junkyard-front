import React from 'react';

import * as S from './styled';

const UpdateForm = ({children, onSubmit}) => {

  return(
    <S.Form onSubmit={onSubmit}>
      {children} 
    </S.Form>
  );
};

export default UpdateForm;