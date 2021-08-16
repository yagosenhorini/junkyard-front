import styled from 'styled-components';
import { rem } from 'polished';

import { Link } from 'react-router-dom';

export const Header = styled.header`
  width: 100%;
  color: #fefdfc;
  font-weight: 700;
  height: ${rem(70)};
  padding: ${rem(24)};
  background-color: #3c454c;
  box-shadow: ${rem(0)} ${rem(5)} ${rem(10)} #000;
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
    border-bottom-style: solid;
    border-bottom-width: ${rem(2)};
    border-bottom-color: rgba(189,103,109,1);
  }
`;

export const HeaderLink = styled(Link)`
  color: #fefdfc;
  text-decoration: none;
`;