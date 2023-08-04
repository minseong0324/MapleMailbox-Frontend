import styled, { keyframes } from 'styled-components';
import cloudImage from '../../assets/cloud/cloud5.png';

const moveCloud = keyframes`
  0% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(0%);
  }
`;

const CloudsDiv = styled.div`
  position: absolute;
  width: 200%; 
  height: 100vh;
  background: url(${cloudImage}) repeat-x;

  animation: ${moveCloud} 50s linear infinite;
  
  z-index: 0;
`;

const WrapperDiv = styled.div`
  position: absolute;
  width: 100%;
  max-width: 820px;
  height: 100vh;
  left: 50%;
  right: 50%;
  transform: translateX(-50%);
  overflow: hidden;
`;

export const s = {
    CloudsDiv,
    WrapperDiv
}

