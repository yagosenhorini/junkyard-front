import React from 'react';
import { useSelector } from 'react-redux';

import * as S from './styled';

const InfoWrapper = () => {

  const { data } = useSelector((state) => state.data);

  if(!data?.length) return null;

  return (
    <S.MainWrapper>
      <S.Wrapper>
        <S.TitleList>Material</S.TitleList>
        <S.ListWrapper>
          {data.map((item) => (
            <S.ListItem key={item._id}>{item.name}</S.ListItem>
          ))}
        </S.ListWrapper>
      </S.Wrapper>
      <S.Wrapper>
        <S.TitleList>Preço</S.TitleList>
        <S.ListWrapper>
          {data.map((item) => (
            <S.ListItem key={item._id}>R$ {item.price}</S.ListItem>
          ))}
        </S.ListWrapper>
      </S.Wrapper>
      <S.Wrapper>
        <S.TitleList>Peso</S.TitleList>
        <S.ListWrapper>
          {data.map((item) => (
            <S.ListItem key={item._id}>{item.weight}</S.ListItem>
          ))}
        </S.ListWrapper>
      </S.Wrapper>
    </S.MainWrapper>
  );
};

export default InfoWrapper;
