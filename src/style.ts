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
        
        //background-color: rgb(88 201 255);
        //padding-top: 15px;  // 이 부분을 추가
        
        /* 태블릿 가로모드용 스타일, 아이패드 에어 기준으로 배경을 제작했기 때문에 820px */
        @media screen and (min-width: 821px) and (orientation: landscape) {
          padding-top: 20px;
          background-color: rgb(62 192 255);
          //transform: translateY(0px);  
        }

        /* 태블릿 세로모드용 스타일 */
        @media screen and (max-width: 820px) and (orientation: portrait) {
          //margin-top: -10px;
          transform: translateY(0px);  /* 10px 위로 옮김 */
        }

        /* 모바일 가로모드용 스타일 */
        @media screen and (max-width: 899px) and (orientation: landscape) {
          padding-top: 100px;
          background-color: rgb(62 192 255);
        }

        /* 모바일 세로모드용 스타일 */
        @media screen and (max-width: 599px) and (orientation: portrait) {
          //padding-top: 10px;
          background-color: rgb(80 198 255);
        }

        /* small 모바일 가로모드용 스타일 */
        @media screen and (max-width: 799px) and (orientation: landscape) {
          padding-top: 100px;
          background-color: rgb(62 192 255);
        }

        /* small 모바일 세로모드용 스타일 아이폰 미니*/
        @media screen and (max-width: 399px) and (orientation: portrait) {
          padding-top: 20px;
          background-color: rgb(80 198 255);
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
`;

export const Background = styled.div`
        position: absolute;
        bottom: 0;
        //top: 40px;
        height: 100%;
        //min-height: 740px;
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
 

        /* 태블릿 가로모드용 스타일, 아이패드 에어 기준으로 배경을 제작했기 때문에 820px */
        @media screen and (min-width: 821px) and (orientation: landscape){
          min-height: 1024px;
          transform: translateY(214px); 
        }

        /* 태블릿 세로모드용 스타일, 모바일 가로모드용 스타일 아이패드 에어 기준으로 배경을 제작했기 때문에 820px */
        @media screen and (max-width: 820px) and (orientation: landscape) {
          top: 0px;
          min-height: 740px;
        }

        /* small 모바일 가로모드용 스타일 */
        @media screen and (max-width: 799px) and (orientation: landscape) {
          top: 0px;
          min-height: 740px;
        }

        /* 모바일 세로모드용 스타일 */
        @media screen and (max-width: 599px) and (orientation: portrait) {
          min-height: 750px;
          transform: translateY(15px); 
        }

        /* 모바일 세로모드용 스타일 아이폰 프로맥스, 플러스 */
        @media screen and (max-width: 429px) and (orientation: portrait) {
          min-height: 750px;
        }

        /* small 모바일 세로모드용 스타일 */
        @media screen and (max-width: 399px) and (orientation: portrait) {
          min-height: 600px;
          transform: translateY(7px); 
        }

`;

export const BackgroundAfter = styled.div`
  position: absolute;
  bottom: 0;
  //height: 100%;
  //min-height: 700px;
  width: 100%;
  background: url(${bodyAfterBackground});
  background-position: center calc(50% - 40px); //이미지 크기 더 늘리기
  background-repeat: no-repeat;
  z-index: 2;
  -ms-interpolation-mode: nearest-neighbor;
  image-rendering: pixelated;
  background-size: 820px 1180px;
  background-attachment: scroll; // 이 부분을 추가
  overflow: auto;


        /* 태블릿 가로모드용 스타일, 아이패드 에어 기준으로 배경을 제작했기 때문에 820px */
        @media screen and (min-width: 821px) and (orientation: landscape){
          min-height: 1024px;
          transform: translateY(324px); 
        }


        /* 태블릿 세로모드용 스타일 아이패드 에어 기준으로 배경을 제작했기 때문에 820px */
        @media screen and (max-width: 820px) and (orientation: portrait) {
          transform: translateY(50px); 
          min-height: 1024px;
        }


         /* small, 모바일 가로모드용 스타일 */
        @media screen and (max-width: 799px) and (orientation: landscape) {
          transform: translateY(569px); 
          min-height: 800px;
        }

        /* 태블릿 미니 세로모드용 스타일 */
        @media screen and (max-width: 768px) and (orientation: portrait) {
          transform: translateY(70px); 
          min-height: 1024px;
        }

        /* 모바일 세로모드용 스타일 아이폰 프로맥스, 플러스 */
        @media screen and (max-width: 599px) and (orientation: portrait) {
          transform: translateY(110px); 
          min-height: 800px;
        }

         /* 모바일 세로모드용 스타일 */
         @media screen and (max-width: 429px) and (orientation: portrait) {
          transform: translateY(132px); 
          min-height: 800px;
        }

        /* small 모바일 세로모드용 스타일 아이폰 미니*/
        @media screen and (max-width: 389px) and (orientation: portrait) {
          transform: translateY(150px); 
          min-height: 800px;
        }
`;


export const GlobalStylePC = createGlobalStyle`
html, body {
        margin: 0;
        padding: 0;
        padding-top: 25px;
        background-color: rgb(62 192 255);
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
`;

export const BackgroundPC = styled.div`
        position: absolute;
        //bottom: 0;
        top:0;
        //top: 40px;
        //height: 100%;
        //min-height: 740px;
        width: 100%;
        margin: 0;
        padding: 0;
        background: url(${bodyBackground});
        background-position: center;
        background-repeat: no-repeat;
        -ms-interpolation-mode: nearest-neighbor;
        image-rendering: pixelated;
        //background-size: 820px 1180px; 
        background-attachment: scroll; // 이 부분을 추가
        //overflow: auto;
        //transform: translateY(250px); 
        min-height: 1024px;
`;        

export const BackgroundAfterPC = styled.div`
  position: absolute;
  //bottom: 0;
  top:0;
  //height: 100%;
  //min-height: 700px;
  width: 100%;
  background: url(${bodyAfterBackground});
  background-position: center;
  background-repeat: no-repeat;
  z-index: 2;
  -ms-interpolation-mode: nearest-neighbor;
  image-rendering: pixelated;
  background-size: 820px 1180px;
  //background-attachment: scroll; // 이 부분을 추가
  //overflow: auto;
  transform: translateY(10px); 
  min-height: 1024px;
  `;

export const AppStylePC = styled.div`
  position: absolute;
  //bottom: 0;
  //top:0;
  //height: 100%;
  //min-height: 700px;
  width: 100%;

  //background-position: center;
  z-index: 3;
  -ms-interpolation-mode: nearest-neighbor;
  image-rendering: pixelated;

  background-attachment: scroll; // 이 부분을 추가
  //overflow: auto;
  transform: translateY(0px); 
  min-height: 1024px;
  `;

