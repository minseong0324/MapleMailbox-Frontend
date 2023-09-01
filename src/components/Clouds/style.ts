import styled, { keyframes } from 'styled-components';
import cloudImageSmall from '../../assets/cloud/clouds-small.png';
import cloudImageBig from '../../assets/cloud/clouds-big.png';
import { isMobile } from 'react-device-detect';

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
  height: 100%;
  background: url(${cloudImageSmall}) repeat-x;
  animation: ${moveCloud} 45s linear infinite;
  z-index: 0;

  @media screen and (min-width: 560px) {
    background: url(${cloudImageBig}) repeat-x;
    bottom: 10px
  }
`;

const mobileStyles = `
  /* 모바일 스타일 */

  /* 모바일 모든 크기 가로모드용 스타일 */
  @media screen and (max-width: 999px) and (orientation: landscape) {
    top: -25%;
    height: 800px;
  }

  /* 태블릿 모든 크기 가로모드용 스타일 */
  @media screen and (min-width: 1000px) and (orientation: landscape) {
    top: -10%;
    height: 800px;
  }

  /* 태블릿 미니, 기본 세로모드용 스타일 */
  @media screen and (max-width: 820px) and (orientation: portrait) {
    top: -5%;
    height: 800px;
  }

  /* 큰 태블릿 세로모드용 스타일 */
  @media screen and (min-width: 821px) and (orientation: portrait) {
    top: -5%;
    height: 800px;
  }

  /* 모바일 기본 세로모드용 스타일 */
  @media screen and (max-width: 599px) and (orientation: portrait) {
    top: 0%;
    height: 800px;
  }

  /* 모바일 미니 세로모드용 스타일 */
  @media screen and (max-width: 379px) and (orientation: portrait) {
    top: 0%;
    height: 600px;
  }

`;

const WrapperDiv = styled.div`
  position: absolute;
  width: 100%;
  max-width: 820px;
  height: 1000px;
  left: 50%;
  right: 50%;
  top: 0%;
  transform: translateX(-50%);
  overflow: hidden;
  z-index: 0;
  ${isMobile ? mobileStyles : ''}

  @media screen and (min-width: 560px) {
    top: -7%;
  }
`;

export const s = {
    CloudsDiv,
    WrapperDiv
}

