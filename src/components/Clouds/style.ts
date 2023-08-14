import styled, { keyframes } from 'styled-components';
import cloudImageSmall from '../../assets/cloud/clouds-small.png';
import cloudImageBig from '../../assets/cloud/clouds-big.png';

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
  background: url(${cloudImageSmall}) repeat-x;
  animation: ${moveCloud} 50s linear infinite;
  z-index: 0;

  @media screen and (min-width: 560px) {
    background: url(${cloudImageBig}) repeat-x;
    bottom: 100px
  }
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
  z-index: 0;
`;

export const s = {
    CloudsDiv,
    WrapperDiv
}

