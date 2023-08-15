import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import sunImg from '../../assets/sunImg/sun.png';
import modalButton from '../../assets/button/button-midium-1.png'; 
import modalButtonAfterClick from '../../assets/button/button-midium-2.png'; 

const SunWrapper = styled.div`
  font-family: 'DOSSaemmul';
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 5;

  @media (min-width: 821px) {
    right: calc(50% - 410px + 10px);
  }
`;

const Wrapper = styled.div`
  max-width: 820px;
  margin: auto;
`;

const SunButton = styled.button`
  position: relative;
  background: url(${sunImg}) no-repeat center;
  border: none;
  cursor: pointer;
  width: 85px;
  height: 85px;
  z-index: 5;
`;

const MenuWrapper = styled.div`
  position: absolute;
  top: 10px;
  right: 20px;
  z-index: 3;
  padding-top: 80px;
  font-size: 13px;
  text-align: center;
  `;

interface SunRayProps {
  isActive: boolean;
}

const SunRay = styled.div<SunRayProps>`
  position: absolute;
  top: 42.5px;
  left: 42.5px;
  height: 150px;
  width: 20px;
  opacity: 0;
  animation: ${props => props.isActive ? fadeIn : fadeOut} 2.5s forwards;
  z-index: 1;
  &:before {
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    background: linear-gradient(to bottom, rgb(255, 251, 132) -100%, transparent 100%);
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes` //안됨..
  from {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
  }
  to {
    clip-path: polygon(0 100%, 100% 100%, 100% 100%, 0% 100%);
  }
`;

interface MenuItemProps {
  isActive: boolean;
}

const MenuItem = styled.button<MenuItemProps>`
margin-bottom: 10px;
font-family: 'DOSSaemmul'; 
background: transparent;
border: none;
font-size: 13px;
cursor: pointer;
opacity: 0;
animation: ${props => props.isActive ? fadeIn : fadeOut} 1s forwards;
`;

interface StyledLinkContainerProps {
  isActive: boolean;
}

const StyledLinkContainer = styled.div<StyledLinkContainerProps>`
  z-index: 9;
  margin-top: 3px;
  animation: ${props => props.isActive ? fadeIn : fadeOut} 1s forwards;
  margin-bottom: 10px;
`;

const StyledLink = styled(Link)`
  font-family: 'DOSSaemmul';
  background: transparent;
  border: none;
  text-decoration: none;  // 밑줄 제거
  color: black; 
  cursor: pointer;
`;

const CenteredWrapper = styled.div`
  position: relative; 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 4;

  @media (min-width: 570px) { // 디바이스의 너비가 570px 이상일 때 적용될 스타일
    align-items: center;
    justify-content: center;
  }
`;

const H2 = styled.h2`
margin-top: 60px;
  font-size: 18px;

`;

const ModalButton = styled.button`
  font-family: 'DOSSaemmul';
  width: 170px; // 버튼 너비를 조정
  height: 40px; // 버튼 높이를 조정
  padding: 10px; // 내부 패딩을 조정
  background: url(${modalButton}) no-repeat center center; // 이미지를 배경으로 사용
  background-size: cover; // 이미지가 버튼에 맞게 조절
  color: black;
  border-radius: 15px;
  font-size: 17px; 
  border: 0px transparent; // 테두리 색상을 투명
  position: relative;
  z-index: 5;
  &:active { // 버튼이 눌렸을 때의 스타일
    background: url(${modalButtonAfterClick}) no-repeat center center; // 눌렸을 때의 배경 이미지
    background-size: cover; // 이미지가 버튼에 맞게 조절
  }
  margin-top: 50px;
`;

export const s = {
    fadeIn,
    SunWrapper,
    SunButton,
    MenuWrapper,
    SunRay,
    MenuItem,
    StyledLink,
    StyledLinkContainer,
    Wrapper,
    CenteredWrapper,
    H2,
    ModalButton
}