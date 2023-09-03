import styled from 'styled-components';
import modalButton from '../../assets/button/button-midium-1.png'; 
import modalButtonAfterClick from '../../assets/button/button-midium-2.png'; 
import button1 from '../../assets/button/button1.png'; 
import button4 from '../../assets/button/button4.png'; 
import { isMobile } from 'react-device-detect';

const Wrapper = styled.div`
z-index: 5;
//padding-top: -1px;
padding-bottom: 55px;
`;

const Button = styled.button`
  font-family: 'NanumBarunpenB';
  font-weight: normal; // 명시적으로 굵기 설정
  width: 250px; // 버튼 너비를 조정
  height: 40px; // 버튼 높이를 조정
  background: url(${button4}) no-repeat center center; // 이미지를 배경으로 사용
  background-size: cover; // 이미지가 버튼에 맞게 조절
  color: black;
  border-radius: 15px;
  font-size: 17px;
  border: 0px transparent; // 테두리 색상을 투명
  position: relative;
  z-index: 5;
  &:active { // 버튼이 눌렸을 때의 스타일
    background: url(${button1}) no-repeat center center; // 눌렸을 때의 배경 이미지
    background-size: cover; // 이미지가 버튼에 맞게 조절
  }
  margin-top: 50px;
  color: #444;
`;

const ModalButton = styled.button`
  font-family: 'NanumBarunpenB';
  font-weight: normal; // 명시적으로 굵기 설정
  width: 170px; // 버튼 너비를 조정
  height: 40px; // 버튼 높이를 조정
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
  color: #444;
`;

const mobileStyles = `
  /* 모바일 스타일 */

  /* 모바일 모든 크기 가로모드용 스타일 */
  @media screen and (max-width: 999px) and (orientation: landscape) {
    height: 200px;
  }

  /* 태블릿 모든 크기 가로모드용 스타일 */
  @media screen and (min-width: 1000px) and (orientation: landscape) {
    height: 800px;
  }

  /* 태블릿 미니, 기본 세로모드용 스타일 */
  @media screen and (max-width: 820px) and (orientation: portrait) {
    height: 900px;
  }

  /* 큰 태블릿 세로모드용 스타일 */
  @media screen and (min-width: 821px) and (orientation: portrait) {
    height: 1125px;
  }

  /* 모바일 기본 세로모드용 스타일 */
  @media screen and (max-width: 599px) and (orientation: portrait) {
    height: 765px;
  }

  /* 모바일 미니 세로모드용 스타일 */
  @media screen and (max-width: 379px) and (orientation: portrait) {
    height: 765px;
  }

`;

export const CenteredWrapper = styled.div`
  font-family: 'BareunHipi';
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 714px;

  ${isMobile ? mobileStyles : ''}
  color: #444;
`;

const BackButtonWrapper = styled.div`
  position: relative; 
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: left;
  z-index: 4;

`;

const ButtonWrapper = styled.div`
margin-top: 70px;
position: relative; 
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
z-index: 4;
margin-bottom: 365px;

@media (min-width: 360px) { // 디바이스의 너비가 570px 이상일 때 적용될 스타일
    margin-top: 150px;
    align-items: center;
    justify-content: center;
    margin-bottom: 270px;
}
@media (min-width: 380px) { // 디바이스의 너비가 570px 이상일 때 적용될 스타일
    margin-top: 150px;
    align-items: center;
    justify-content: center;
    margin-bottom: 300px;
}
@media (min-width: 429px) { // 디바이스의 너비가 570px 이상일 때 적용될 스타일
    margin-top: 150px;
    align-items: center;
    justify-content: center;
    margin-bottom: 300px;
}
@media (min-width: 599px) { // 디바이스의 너비가 570px 이상일 때 적용될 스타일
    margin-top: 150px;
    align-items: center;
    justify-content: center;
    margin-bottom: 50px;
}
@media (min-width: 799px) { // 디바이스의 너비가 570px 이상일 때 적용될 스타일
    margin-top: 150px;
    align-items: center;
    justify-content: center;
    margin-bottom: 50px;
}
@media (min-width: 821px) { // 디바이스의 너비가 570px 이상일 때 적용될 스타일
  margin-top: 150px;
    align-items: center;
    justify-content: center;
    margin-bottom: 50px;
}
`;

const TitleTextStyle = styled.div`
  position: relative; 
  font-family: 'BareunHipi';
display: flex;
flex-direction: column;
align-items: center;
line-height: 5;
font-size: 38px;
//margin-top: -10%;
`;


const H2 = styled.h2`
margin-top: 60px;
  font-size: 18px;

`;

const P = styled.p`
  margin-top: 60px;
  font-size: 15px;
  padding-bottom: 30px;
`;

const Break = styled.br``;

const WordInput = styled.input`
  font-family: 'BareunHipi';
width: 190px;
height: 30px;
border: none; // 모든 테두리를 제거합니다.
color: #222;
margin-bottom: 20px;
background-color: #fff8f0;
`;


const ModalWrapper = styled.div`
  align-items: center;
  justify-content: center;
  margin-top: 50px;

`;
const CenterModalWrapper = styled.div`
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 80px;

`;


const ErrorCenterModalWrapper = styled.div` //에러 모달창 wrapper
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 50px;
`;

const ErrorModalTextsWrapper1 = styled.div` // 한줄짜리 에러창일 때 사용
position: relative;
display: flex;
font-size: 20px;
align-items: center;
  justify-content: center;
line-height: 2;  // 글자 간격
margin-bottom: 10px;
`;

const ErrorModalTextsWrapper2 = styled.div` //두줄짜리 에러창일 때 사용
position: relative;
display: flex;
font-size: 20px;
align-items: center;
  justify-content: center;
line-height: 2;  // 글자 간격
margin-bottom: -10px;
`;

export const s = {
    CenteredWrapper,
    TitleTextStyle,
    Button,
    H2,
    P,
    Break,
    ButtonWrapper,
    ModalButton,
    Wrapper,
    WordInput,
    ErrorModalTextsWrapper1,
    ModalWrapper,
    CenterModalWrapper,
    ErrorModalTextsWrapper2,
    ErrorCenterModalWrapper,
    BackButtonWrapper
}

