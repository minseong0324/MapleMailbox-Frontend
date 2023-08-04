import styled, { keyframes } from 'styled-components';

const leafFall = keyframes`
  0% {
     opacity: 0.5;
      top: -10%;
      left: var(--start-left);  
      transform: rotate(0deg);
  }
  100% {
      opacity: 0;
      top: 70%;
      left: var(--end-left); 
      transform: rotate(90deg);
  }
`;

const Leaf = styled.div`
  position: absolute;
  top: 0;
  width: 20px;
  height: 20px;
  background-size: cover;
  
  animation: ${leafFall} 5s linear infinite;
`;

const LeafDiv = styled.div`
  position: absolute;
  width: 100%;
  max-width: 820px;
  height: 100vh;
  left: 50%;
  right: 50%;
  transform: translateX(-50%);
  overflow: hidden;
  z-index: 1;
`;

export const s = {
  Leaf,
  LeafDiv
}
