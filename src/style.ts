// styles.ts
import { createGlobalStyle } from 'styled-components';
import bodyBackground from './assets/sky/sky-small.png';
import bodyAfterBackground from './assets/background/background-small.png';
import NanumBarunpenB from './static/font/NanumBarunpenB.woff2'
import BareunHipi from './static/font/BareunHipi.woff2'


import modalButton from './assets/button/button-midium-1.png'; 
import modalButtonAfterClick from './assets/button/button-midium-2.png'; 

import styled from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  html, body {

    margin: 0;
    padding: 0;

    background-color: rgb(88 201 255);
    //padding-top: 15px;  // 이 부분을 추가

    /* 태블릿 가로모드용 스타일, 아이패드 에어 기준으로 배경을 제작했기 때문에 820px */
    @media screen and (min-width: 821px) and (orientation: landscape) {
      padding-top: 20px;
      background-color: rgb(62 192 255);
      //transform: translateY(0px);  
    }

    /* 큰 태블릿 세로모드용 스타일 */
    @media screen and (min-width: 821px) and (orientation: portrait) {
      //margin-top: -10px;
      transform: translateY(0px);  /* 10px 위로 옮김 */
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
      background-color: rgb(86 200 255);
      //background-color: rgb(62 192 25);

    }

    /* small 모바일 가로모드용 스타일 */
    @media screen and (max-width: 799px) and (orientation: landscape) {
      padding-top: 100px;
      background-color: rgb(62 192 255);
    }

    /* small 모바일 세로모드용 스타일 아이폰 미니*/
    @media screen and (max-width: 389px) and (orientation: portrait) {
      padding-top: 20px;
      background-color: rgb(86 200 255);
      //background-color: rgb(62 192 25);
    }
  }

    @font-face {
        font-family: 'NanumBarunpenB';
        src: url(${NanumBarunpenB}) format('woff2');
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: 'BareunHipi';
        src: url(${BareunHipi}) format('woff2');
        font-weight: normal;
        font-style: normal;
    }

    

`;

export const Background = styled.div`
        position: absolute;
        //bottom: 0;
        top: 0px;
        //top: 40px;
        height: 100%;
        //min-height: 820px;
        width: 100%;
        margin: 0;
        padding: 0;
        background: url(${bodyBackground});
        background-position: center;
        background-repeat: no-repeat;
        -ms-interpolation-mode: nearest-neighbor;
        image-rendering: pixelated;
        background-size: 820px 1180px; 
        background-attachment: scroll; // 이 부분을 추가
        overflow: auto;
 

        /* 태블릿 가로모드용 스타일, 아이패드 에어 기준으로 배경을 제작했기 때문에 820px */
        @media screen and (min-width: 821px) and (orientation: landscape){
          min-height: 1024px;
          transform: translateY(-50px); 
        }

        /* 태블릿 세로모드용 스타일  아이패드 에어 기준으로 배경을 제작했기 때문에 820px */
        @media screen and (max-width: 820px) and (orientation: portrait) {
          top: 0px;
          min-height: 740px;
        }

        /* 태블릿 미니 세로모드용 스타일 */
        @media screen and (max-width: 768px) and (orientation: portrait) {
          transform: translateY(0px); 
        }

        /* 모바일 가로모드용 스타일 아이패드 에어 기준으로 배경을 제작했기 때문에 820px */
        @media screen and (max-width: 820px) and (orientation: landscape) {
          top: 0px;
          min-height: 740px;
         
        }

        /* small 모바일 가로모드용 스타일 */
        @media screen and (max-width: 799px) and (orientation: landscape) {
          top: 0px;
          min-height: 740px;
        }

        
         /* 모바일 세로모드용 스타일 아이폰 프로맥스, 플러스 */
        @media screen and (max-width: 599px) and (orientation: portrait) {
          min-height: 750px;
          transform: translateY(15px); 
        }

       /* 모바일 세로모드용 스타일 */
        @media screen and (max-width: 429px) and (orientation: portrait) {
          min-height: 750px;
          //transform: translateY(0px); 
        }

        /* small 모바일 세로모드용 스타일 */
        @media screen and (max-width: 389px) and (orientation: portrait) {
          min-height: 600px;
          transform: translateY(7px); 
        }

`;

export const BackgroundAfter = styled.div`
  position: absolute;
  //bottom: 0;
  top: 0;
  height: 100%;
  //min-height: 700px;
  width: 100%;
  background: url(${bodyAfterBackground});
  background-position: center; //calc(50% + 5px); //이미지 크기 더 늘리기
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
          transform: translateY(15px); 
        }

        /* 큰 태블릿 새로모드용 스타일  */
        @media screen and (min-width: 821px) and (orientation: portrait) {
          transform: translateY(65px); 
          min-height: 1180px;
        }

        /* 태블릿 세로모드용 스타일 아이패드 에어 기준으로 배경을 제작했기 때문에 820px */
        @media screen and (max-width: 820px) and (orientation: portrait) {
          transform: translateY(-45px); 
          min-height: 1180px;
        }

        /* 모바일 max, plus 가로모드용 스타일 */
        @media screen and (max-width: 899px) and (orientation: landscape) {
          transform: translateY(35px); 
          min-height: 800px;
        }

         /* small, 모바일 가로모드용 스타일 */
        @media screen and (max-width: 799px) and (orientation: landscape) {
          transform: translateY(35px); 
          min-height: 800px;
        }

        /* 태블릿 미니 세로모드용 스타일 */
        @media screen and (max-width: 768px) and (orientation: portrait) {
          transform: translateY(-50px); 
          min-height: 1180px;

        }

        /* 모바일 세로모드용 스타일 아이폰 프로맥스, 플러스 */ 
        @media screen and (max-width: 599px) and (orientation: portrait) {
          transform: translateY(80px); 
          min-height: 800px;
        }

         /* 모바일 세로모드용 스타일 */
         @media screen and (max-width: 429px) and (orientation: portrait) {
          transform: translateY(80px); 
          min-height: 800px;
        }

        /* small 모바일 세로모드용 스타일 아이폰 미니*/
        @media screen and (max-width: 389px) and (orientation: portrait) {
          transform: translateY(75px); 
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
        font-family: 'NanumBarunpenB';
        src: url(${NanumBarunpenB}) format('woff2');
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: 'BareunHipi';
        src: url(${BareunHipi}) format('woff2');
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
        transform: translateY(-55px);
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




export const AppStyle = styled.div`
  position: absolute;
  //bottom: 0;
  top:0;
  //height: 100%;
  //min-height: 700px;
  width: 100%;

  //background-position: center;
  z-index: 3;
  -ms-interpolation-mode: nearest-neighbor;
  image-rendering: pixelated;
  background-size: 820px 1180px;
  //background-attachment: scroll; // 이 부분을 추가
  //overflow: auto;
  transform: translateY(0px); 
  min-height: 1024px;

  `;


  //점검할 때  전역적으로 띄울 공지모달을 위한 코드
const ErrorCenterModalWrapper = styled.div` //에러 모달창 wrapper
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 50px;
`;
  //점검할 때  전역적으로 띄울 공지모달을 위한 코드
const ErrorModalTextsWrapper1 = styled.div` // 한줄짜리 에러창일 때 사용
position: relative;
display: flex;
font-size: 20px;
align-items: center;
  justify-content: center;
line-height: 2;  // 글자 간격
margin-bottom: 10px;
`;
  //점검할 때  전역적으로 띄울 공지모달을 위한 코드
const ErrorModalTextsWrapper2 = styled.div` //두줄짜리 에러창일 때 사용
position: relative;
display: flex;
font-size: 20px;
align-items: center;
  justify-content: center;
line-height: 2;  // 글자 간격
margin-bottom: -10px;
`;

const ModalButton = styled.button`
  font-family: 'NanumBarunpenB';
  font-weight: normal; // 명시적으로 굵기 설정
  width: 170px; // 버튼 너비를 조정
  height: 40px; // 버튼 높이를 조정
  background: url(${modalButton}) no-repeat center center; // 이미지를 배경으로 사용
  background-size: cover; // 이미지가 버튼에 맞게 조절
  color: #444;
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
  color: #444;
`;

const WordInput = styled.input`
  font-family: 'BareunHipi';
width: 190px;
height: 30px;
border: none; // 모든 테두리를 제거합니다.
color: #222;
margin-bottom: 20px;
background-color: #fff8f0;
`;

  //점검할 때  전역적으로 띄울 공지모달을 위한 코드
export const s ={
  ErrorCenterModalWrapper,
  ErrorModalTextsWrapper1,
  ErrorModalTextsWrapper2,
  ModalButton,
  WordInput
}

 