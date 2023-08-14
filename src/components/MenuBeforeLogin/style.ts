import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import sunImg from '../../assets/sunImg/sun.png';

const SunWrapper = styled.div`
  font-family: 'DOSSaemmul';
  position: fixed;
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
margin-bottom: 5px;
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
  margin-bottom: 10px;
  animation: ${props => props.isActive ? fadeIn : fadeOut} 1s forwards;
`;

const StyledLink = styled(Link)`
  font-family: 'DOSSaemmul';
  background: transparent;
  border: none;
  text-decoration: none;  // 밑줄 제거
  color: black; 
  cursor: pointer;
  
`;

export const s = {
  fadeIn,
  fadeOut,
  SunWrapper,
  SunButton,
  MenuWrapper,
  SunRay,
  MenuItem,
  StyledLinkContainer,
  StyledLink,
  Wrapper,
}