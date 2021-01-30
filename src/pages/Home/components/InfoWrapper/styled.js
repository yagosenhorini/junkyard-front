import styled from 'styled-components';
import { rem } from 'polished';

export const MainWrapper = styled.div`
  width: 100%;
  color: #fff;
  height: auto;
  margin: auto;
  display: flex;
  transition: .3s;
  padding: ${rem(37)} 0;
  max-width: ${rem(1440)};
  border-radius: ${rem(6)};
  justify-content: space-around;
  background-color: rgba(#000, 0.2);
  -webkit-transition: all .2s ease-out;
  box-shadow: 0 ${rem(16)} ${rem(32)} 0 rgba(255, 255, 255, 0.100);
  
  /** */
  &:hover{
    transform: translateY(${rem(-5)});
  }
`;

export const TitleList = styled.h3`
  color: #fff;
  text-align: center;
  font-size: ${rem(22)};
  margin-bottom: ${rem(10)};
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const ListWrapper = styled.ul`
  width: 100%;
  display: flex;
  list-style: none;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const ListItem = styled.li`
  width: 100%;
  text-align: center;
  font-size: ${rem(16)};
  margin-bottom: ${rem(5)};
`;