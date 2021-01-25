import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

const ThreeBounce = ({
  className,
  size,
  color,
  margin,
  loading,
}) => loading && (
  <S.StyledThreeBounce
    className={className}
    size={size}
    color={color}
    margin={margin}
  >
    <S.StyledDotBounce delay={-0.32} />
    <S.StyledDotBounce delay={-0.16} />
    <S.StyledDotBounce delay={0} />
  </S.StyledThreeBounce>
);

ThreeBounce.defaultProps = {
  size: 40,
  color: '#333',
  className: '',
  margin: 4,
  loading: true,
};

ThreeBounce.propTypes = {
  size: PropTypes.number,
  margin: PropTypes.number,
  color: PropTypes.string,
  className: PropTypes.string,
  loading: PropTypes.bool,
};

export default ThreeBounce;
