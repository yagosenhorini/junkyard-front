import styled, { keyframes } from 'styled-components';
import { rem } from 'polished';

const scaleOut = keyframes`
  0% {
    transform: scale(0);
  }

  100% {
    opacity: 0;
    transform: scale(1);
  }
`;

export const StyledPulse = styled.div`
  height: ${(props) => rem(props.size)};
  width: ${(props) => rem(props.size)};
  background-color: ${(props) => props.color};
  border-radius: 100%;
  animation: ${scaleOut} 1s ease-in-out infinite;
`;
