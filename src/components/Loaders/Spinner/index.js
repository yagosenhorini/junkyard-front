import React, { memo } from 'react';
import PropTypes from 'prop-types';

const radius = 32;
const circ = 2 * radius * Math.PI;

const Spinner = ({ color, size }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    preserveAspectRatio="xMidYMid"
    height={size}
    width={size}
  >
    <style>
      {`
        @keyframes spinnerRotate {
          from {
            transform-origin: 50% 50%;
            transform: rotate(0deg);
          }
          to {
            transform-origin: 50% 50%;
            transform: rotate(360deg);
          }
        }
        @keyframes spinnerFill {
          0% {
            stroke-dasharray: 0 0 2 ${circ};
          }
          50% {
            stroke-dasharray: 0 0 ${circ * 0.75} ${circ};
          }
          100% {
            stroke-dasharray: 0 ${circ - 2} ${circ * 0.75} ${circ};
          }
        }
        .spinnerCircle {
          animation: spinnerFill 1.25s infinite cubic-bezier(0.455, 0.030, 0.515, 0.955), spinnerRotate 0.625s infinite linear;
        }
      `}
    </style>

    <circle
      className="spinnerCircle"
      cx="50"
      cy="50"
      fill="none"
      r={radius}
      stroke={color || 'currentColor'}
      strokeWidth="10"
      strokeDasharray={`0 0 ${circ * 0.75} ${circ}`}
      strokeLinecap="round"
      strokeDashoffset="1"
    />
  </svg>
);

Spinner.defaultProps = {
  color: '',
  size: 32,
};

Spinner.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
};

export default memo(Spinner);
