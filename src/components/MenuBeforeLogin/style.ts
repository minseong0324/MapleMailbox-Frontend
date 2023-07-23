import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import sunImg from '../../assets/sunImg/sun.png';


const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const SunWrapper = styled.div`
  font-family: 'LeeSeoyun';
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 1;
`;

const SunButton = styled.button`
  position: relative;
  background: url(${sunImg}) no-repeat center;
  border: none;
  cursor: pointer;
  width: 85px;
  height: 85px;
  z-index: 2;
`;

const MenuWrapper = styled.div`
  position: absolute;
  top: 10px;
  right: 20px;
  z-index: 3;
  padding-top: 80px;
  font-size: 15px;
  text-align: center;
`;


const SunRay = styled.div`
  background: linear-gradient(to bottom, rgb(255, 251, 132) -100%, transparent 100%);
  height: 160px;
  width: 20px;
  position: absolute;
  top: 42.5px;   // 수정된 부분
  left: 42.5px;  // 수정된 부분
  opacity: 0;
  animation: ${fadeIn} 1s forwards;
  z-index: 1;
`;

const MenuItem = styled.button`
  font-family: 'LeeSeoyun'; 
  background: transparent;
  border: none;
  font-size: 16px;
  cursor: pointer;
  opacity: 0;
  animation: ${fadeIn} 1s forwards;
  &:nth-child(1) {
    animation-delay: 2s;
  }
  &:nth-child(2) {
    animation-delay: 3s;
  }
`;

const StyledLink = styled(Link)`
  font-family: 'LeeSeoyun';
  background: transparent;
  border: none;
  text-decoration: none;  // 밑줄 제거
  color: black; 
  cursor: pointer;
  animation: ${fadeIn} 1s forwards;
  z-index: 9;

`;


export const s = {
    fadeIn,
    SunWrapper,
    SunButton,
    MenuWrapper,
    SunRay,
    MenuItem,
    StyledLink
}