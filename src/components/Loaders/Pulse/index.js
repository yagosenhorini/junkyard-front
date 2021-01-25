import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

const Pulse = ({
  className,
  size,
  color,
  loading,
}) => loading && (
  <S.StyledPulse
    className={className}
    size={size}
    color={color}
  />
);

Pulse.defaultProps = {
  className: '',
  color: '#333',
  size: 32,
  loading: true,
};

Pulse.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.number,
  loading: PropTypes.bool,
};

export default Pulse;
