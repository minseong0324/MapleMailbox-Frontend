import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import sunImg from '../../assets/sunImg/sun.png';

const SunWrapper = styled.div`
  font-family: 'BareunHipi';
  position: fixed;
  top: 5px;
  right: 5px;
  z-index: 5;

  @media (min-width: 821px) {
    right: calc(50% - 410px + 10px);
  }
  @media (min-height: 1181px) {
    top: calc(50% - 590px + 10px);
  }
`;


const Wrapper = styled.div`
  max-width: 820px;
  max-height: 1180px;
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
  font-size: 16px;
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
font-family: 'BareunHipi'; 
background: transparent;
border: none;
font-size: 16px;
cursor: pointer;
opacity: 0;
animation: ${props => props.isActive ? fadeIn : fadeOut} 1s forwards;
color: #444; 
white-space: nowrap;
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
  font-family: 'BareunHipi';
  background: transparent;
  border: none;
  text-decoration: none;  // 밑줄 제거
  color: #444; 
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