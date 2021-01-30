import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { rem } from 'polished';


export const LinkWrapper = styled(Link)`
  width: auto;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  font-weight: 600;
  transition: 0.45s;
  text-decoration: none;
  margin-bottom: ${rem(5)};
  background-color: transparent;
`;