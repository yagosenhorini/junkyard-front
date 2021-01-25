import styled, { keyframes } from 'styled-components';
import { rem } from 'polished';

const bounce = keyframes`
  0%,
  80%,
  100% {
    transform: scale(0);
  }

  40% {
    transform: scale(1);
  }
`;

export const StyledDotBounce = styled.div`
  border-radius: 100%;
  display: inline-block;
  animation: ${bounce} 1.4s ease-in-out ${(props) => props.delay}s infinite both;
`;

export const StyledThreeBounce = styled.div`
  text-align: center;
  border-radius: 100%;
  margin: 0 auto;

  ${StyledDotBounce} {
    background-color: ${(props) => props.color};
    margin: 0 ${(props) => rem(props.margin)};
    height: ${(props) => rem(props.size)};
    width: ${(props) => rem(props.size)};
  }
`;
