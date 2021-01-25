import React from 'react';

import * as S from './styled';

export const Header = () => {
  return(
    <S.Header>
      <S.HeaderList>
        <S.HeaderListItem>
          Início
        </S.HeaderListItem>
        <S.HeaderListItem>
          Produtos
        </S.HeaderListItem>
      </S.HeaderList>
    </S.Header>
  );
};