import React from 'react';

import * as S from './styled';

export const Header = () => {
  return(
    <S.Header>
      <S.HeaderList>
        <S.HeaderListItem>
          <S.HeaderLink to='/'>
              Início
          </S.HeaderLink>
        </S.HeaderListItem>
        <S.HeaderListItem>
          <S.HeaderLink to='/create'>
            Produtos
          </S.HeaderLink>
        </S.HeaderListItem>
      </S.HeaderList>
    </S.Header>
  );
};