// styles.ts
import { createGlobalStyle } from 'styled-components';
import bodyBackground from './assets/sky/sky-small.png';
import bodyAfterBackground from './assets/background/background-small.png';
import DoSSaemmul from './static/font/DOSSaemmul.ttf';
import DOSGothic from './static/font/DOSGothic.ttf';
import styled from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    html, body {
        margin: 0;
        padding: 0;
        background-color: rgb(88 201 255);
        //background: linear-gradient(to bottom, rgb(78, 197, 255), rgb(132, 172, 47));
        @media screen and (max-width: 500px) {
          top: 67px;
        }

        
        @media screen and (min-width: 500px) and (max-width: 780px) {

          background-color:rgb(103 205 255);
        }
        
        @media screen and (min-width: 780px) and (max-width: 821px) {

          background-color:rgb(121 211 255);
        }
    }

    @font-face {
    font-family: 'DOSSaemmul';
    src: url(${DoSSaemmul}) format('truetype');
    font-weight: normal;
    font-style: normal;
    }

    @font-face {
        font-family: 'DOSGothic';
        src: url(${DOSGothic}) format('truetype');
        font-weight: normal;
        font-style: normal;
    }
    #content {
        position: relative;
        height: 100%;
        z-index: 1;
    }
    
`;

export const Background = styled.div`
        position: absolute;
        bottom: 0;
        top: 40px;
    height: calc(100%);
        width: 100%;
        margin: 0;
        padding: 0;
        background: url(${bodyBackground});
        background-position: center ;
        background-repeat: no-repeat;
        -ms-interpolation-mode: nearest-neighbor;
        image-rendering: pixelated;
        background-size: 820px 1180px; 
        background-attachment: scroll; // 이 부분을 추가
        overflow: auto;


`;

export const BackgroundAfter = styled.div`
  content: "";
  position: absolute;
  bottom: 0;
  height: 100vh;
  width: 100%;
  background: url(${bodyAfterBackground});
  background-position: center;
  background-repeat: no-repeat;
  z-index: 1;
  -ms-interpolation-mode: nearest-neighbor;
  image-rendering: pixelated;
  background-size: 820px 1180px;
  background-attachment: scroll; // 이 부분을 추가
  overflow: auto;



  @media screen and (max-width: 768px) {
    top: 67px;
  }

  @media screen and (min-width: 768px) and (max-width: 821px) {
    top: 67px;

  }

  @media screen and (min-width: 821px) {
    top: 117px;
    height: calc(100% - 117px);

  }
`;