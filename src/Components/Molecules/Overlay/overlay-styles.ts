import styled, { keyframes } from 'styled-components';

const Transition = keyframes`
    0% { transform: translateY(0) }
  100% { transform: translateY(100%) }
`;

const ImageTransition = keyframes`
     0% { transform: rotate(0) }
    50% {transform: rotate(360deg)}
   100% {transform: translateY(1000px)}
`;

export const Backdrop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: rgba(0, 0, 0, 0.85);
  animation-name: ${Transition};
  animation-delay: 1s;
  animation-duration: 1.1s;
  animation-iteration-count: 1;
`;

export const ImageCenter = styled.div`
  animation-name: ${ImageTransition};
  animation-duration: 1.5s;
  animation-iteration-count: 1;
`;
