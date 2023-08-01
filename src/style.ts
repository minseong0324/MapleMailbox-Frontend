import styled, { keyframes } from 'styled-components';
import backgroundImage from './assets/background/background1.png';



const BodyWrapper = styled.div`

  margin: 0;
  padding: 0;
  height: 100vh;
  overflow: hidden;
  background-size: cover;
  background: linear-gradient(to bottom, rgb(0, 149, 241) 0%, rgb(70, 206, 255) 10%, rgb(250, 250, 129) 80%);

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    height: 33%;
    width: 100%;
    background: url(${backgroundImage}), linear-gradient(to bottom, rgb(0, 128, 0) 0%, rgb(135, 214, 52) 20%, rgb(255, 213, 59) 130%);
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 100% 100% 0 0 / 25% 25% 0 0;
  }
`

const Content = styled.div`
  position: relative;
  height: 100%;
  overflow: auto;
  z-index: 1;
`; 

export const s = {

    BodyWrapper,
    Content
}