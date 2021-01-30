import React from 'react';

import * as S from './styled';
import { LinkWrapper } from '../../components/Link';

const Footer = () => {
  return(
    <S.Footer>
      <S.Copyright>&copy; Senhorini.dev - {new Date().getFullYear()}</S.Copyright>
    </S.Footer>
  )
};

export default Footer;