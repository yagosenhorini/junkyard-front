import styled from 'styled-components';

export const MainWrapper = styled.div`
  width: 70%;
  color: #fff;
  height: auto;
  margin: auto;
  display: flex;
  padding: 37px 0;
  transition: .3s;
  border-radius: 6px;
  justify-content: space-around;
  background-color: rgba(#000, 0.2);
  -webkit-transition: all .2s ease-out;
  box-shadow: 0 16px 32px 0 rgba(255, 255, 255, 0.100);
  
  /** */
  &:hover{
    transform: translateY(-5px);
  }
`;

export const TitleList = styled.h3`
  color: #fff;
  margin-bottom: 10px;
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
  font-size: 16px;
  text-align: center;
  margin-bottom: 5px;
`;