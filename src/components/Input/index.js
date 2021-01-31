import React from 'react';

import * as S from './styled';

const InputForm = React.forwardRef(({id, name, defaultValue, disabled, errors}, ref) =>(

    <S.InputForm
      id={id}
      name={name}
      defaultValue={defaultValue}
      disabled={disabled}
      errors={errors}
      ref={ref}
    />
));

export default InputForm;