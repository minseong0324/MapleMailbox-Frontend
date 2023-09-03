import styled, { keyframes } from 'styled-components';
import button1 from '../../../assets/button/button1.png'; 
import button4 from '../../../assets/button/button4.png'; 
import modalButton from '../../../assets/button/button-midium-1.png'; 
import modalButtonAfterClick from '../../../assets/button/button-midium-2.png';
import buttonSmall4 from '../../../assets/button/button-small-4.png'; 
import SquirrelButton from '../../../assets/animal/squirrel.png'
import SpeechBubbleGif from '../../../assets/speechBubble/speechBubble1.gif'
import { isMobile } from 'react-device-detect';



const Button = styled.button`
  margin-bottom: 15px;
  font-family: 'NanumBarunpenB';
  font-weight: normal; // 명시적으로 굵기 설정
  width: 250px; // 버튼 너비를 조정
  height: 40px; // 버튼 높이를 조정
  background: url(${button4}) no-repeat center center; // 이미지를 배경으로 사용
  background-size: cover; // 이미지가 버튼에 맞게 조절
  border-radius: 15px;
  font-size: 17px; 
  border: 0px transparent; // 테두리 색상을 투명
  position: relative;
  z-index: 2;
  &:active { // 버튼이 눌렸을 때의 스타일
    background: url(${button1}) no-repeat center center; // 눌렸을 때의 배경 이미지
    background-size: cover; // 이미지가 버튼에 맞게 조절
  }
  color: #444;
`;

const LetterOpenButton = styled.button`
  margin-bottom: 15px;
  font-family: 'NanumBarunpenB';
  font-weight: normal; // 명시적으로 굵기 설정
  width: 170px; // 버튼 너비를 조정
  height: 40px; // 버튼 높이를 조정
  background: url(${modalButton}) no-repeat center center; // 이미지를 배경으로 사용
  background-size: cover; // 이미지가 버튼에 맞게 조절
  border-radius: 15px;
  font-size: 17px; 
  border: 0px transparent; // 테두리 색상을 투명
  position: relative;
  z-index: 2;
  &:active { // 버튼이 눌렸을 때의 스타일
    background: url(${modalButtonAfterClick}) no-repeat center center; // 눌렸을 때의 배경 이미지
    background-size: cover; // 이미지가 버튼에 맞게 조절
  }
  color: #444;
`;

const ModalButton = styled.button`
  font-family: 'NanumBarunpenB';
  font-weight: normal; // 명시적으로 굵기 설정
  width: 170px; // 버튼 너비를 조정
  height: 40px; // 버튼 높이를 조정
  background: url(${modalButton}) no-repeat center center; // 이미지를 배경으로 사용
  background-size: cover; // 이미지가 버튼에 맞게 조절
  border-radius: 15px;
  font-size: 17px; 
  border: 0px transparent; // 테두리 색상을 투명
  position: relative;
  z-index: 5;
  &:active { // 버튼이 눌렸을 때의 스타일
    background: url(${modalButtonAfterClick}) no-repeat center center; // 눌렸을 때의 배경 이미지
    background-size: cover; // 이미지가 버튼에 맞게 조절
  }
  margin-top: 45px;
  color: #444;
`;

const DdayCount = styled.button`
  margin-bottom: 15px;
  font-family: 'NanumBarunpenB';
  font-weight: normal; // 명시적으로 굵기 설정
  width: 75px; // 버튼 너비를 조정
  height: 40px; // 버튼 높이를 조정
  margin-left: 5px;
  background: url(${buttonSmall4}) no-repeat center center; // 이미지를 배경으로 사용
  background-size: cover; // 이미지가 버튼에 맞게 조절
  border-radius: 15px;
  font-size: 17px; 
  border: 0px transparent; // 테두리 색상을 투명
  position: relative;
  z-index: 2;
  color: #444;
`;

const ButtonWrapper = styled.div`
  position: relative;
  bottom: -30px;
  z-index: 2;
`;
  
const mobileStyles = `
  /* 모바일 스타일 */

  /* 모바일 모든 크기 가로모드용 스타일 */
  @media screen and (max-width: 820px) and (orientation: landscape) {
    height: 320px;
  }

  /* 큰 태블릿 세로모드용 스타일 */
  @media screen and (min-width: 821px) and (orientation: portrait) {
    height: 1180px;
  }

  /* 큰 태블릿 제외 air, air mini 태블릿 모든 크기 세로모드용 스타일 */
  @media screen and (max-width: 820px) and (orientation: portrait) {
    height: 950px;
  }

  /* 모바일 세로모드용 스타일 */
  @media screen and (max-width: 599px) and (orientation: portrait) {
    height: 820px;
  }
`;

export const CenteredWrapper = styled.div`
  font-family: 'BareunHipi';
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 820px;

  ${isMobile ? mobileStyles : ''}
  color: #444;
`;

 const TextsStyle = styled.div`
  font-family: 'NanumBarunpenB';
  font-weight: normal; // 명시적으로 굵기 설정
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 0.2;  // 글자 간격
  padding-top: 30px;
  color: #444;
`;

const ModalTextsStyle1 = styled.div`
font-family: 'BareunHipi';
font-size: 18px;
height: 10%; 
padding-bottom: 130px;
margin: 0 -30px;
text-align: center;
`;

 const ModalTextsStyle2 = styled.div`
  font-family: 'BareunHipi';
  font-size: 18px;
  height: 10%; 
  margin: 0 -10px;
  text-align: center;
`;


 const ModalTextsWrapper = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

// 캐릭터 이미지 위치 스타일링 (위치 변경 시 이 부분을 수정)
 const CharImage = styled.img`
  position: absolute;
  z-index: 2;
  top: 77%; // top offset from tree image
  right: 25%; // right offset from tree image
`;

 const TreeImageWrapper = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
    z-index: 2;

`;

const H3 = styled.h3`
  margin-bottom: 0px;
  font-family: 'BareunHipi';
  font-size: 19px;
`;

const H1 = styled.h1`
  font-family: 'BareunHipi';
  font-size: 38px;
  margin-bottom: 24px;
`;

const P = styled.p`
  font-size: 14px;
  padding-bottom: 30px;
`;

const Break = styled.br``;

const TreeImg = styled.img`
  //width: 300px;
  //height: 300px;
`;

const TreeFragmentImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 4;
  width: 300px;
  height: 300px;
`;

const StampCollectionButton = styled.button`
  position: absolute;
  background: url(${SquirrelButton});
  width: 80px;
  height: 80px;
  z-index: 2;
  top: 89%; // top offset from tree image
  right: 76%; // right offset from tree image
  border: transparent;
`;


const SpeechBubble = styled.button`
  position: absolute;
  background: url(${SpeechBubbleGif});
  width: 80px;
  height: 60px;
  z-index: 2;
  top: 75%; // top offset from tree image
  right: 63%; // right offset from tree image
  border: transparent;
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

const LinkModalTextsStyle1 = styled.div` // 한줄짜리 에러창일 때 사용
font-family: 'BareunHipi';
position: relative;
display: flex;
font-size: 20px;
align-items: center;
  justify-content: center;
line-height: 2;  // 글자 간격
margin-bottom: 0px;
margin-top: -25px;
`;

const LinkModalTextsStyle2 = styled.div`
font-family: 'BareunHipi';
font-size: 20px;
text-align: center;
margin-bottom: -20px;
`;

export const s = {
    Button,
    CenteredWrapper,
    TextsStyle,
    ModalTextsStyle1,
    ModalTextsStyle2,
    ModalTextsWrapper,
    CharImage,
    TreeImageWrapper,
    H3,
    H1,
    P,
    Break,
    TreeImg,
    TreeFragmentImg,
    ButtonWrapper,
    LetterOpenButton,
    DdayCount,
    StampCollectionButton,
    SpeechBubble,
    Text,
    ErrorCenterModalWrapper,
    ErrorModalTextsWrapper1,
    ErrorModalTextsWrapper2,
    ModalButton,
    LinkModalTextsStyle2,
    LinkModalTextsStyle1
}

