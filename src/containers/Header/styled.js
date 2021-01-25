import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;
  height: 70px;
  color: #fefdfc;
  padding: 1.5rem;
  font-weight: 700;
  background-color: #3c454c;
`;

export const HeaderList = styled.ul`
  display: flex;
  list-style: none;
  justify-content: space-evenly;
`;

export const HeaderListItem = styled.li`
  cursor: pointer;
  transition: 0.45s;
  align-items: center;
  /** */

  &:hover{
    border-bottom-width: 2px;
    border-bottom-style: solid;
    border-bottom-color: rgba(189,103,109,1);
  }
`