import React from 'react';

import * as S from './styled';

const InputForm = ({id, name, defaultValue, disabled, errors, ref}) => {
  return (
    <S.InputForm
      id={id}
      name={name}
      defaultValue={defaultValue}
      disabled={disabled}
      errors={errors}
      ref={ref}  
    />
  );
};

export default InputForm;