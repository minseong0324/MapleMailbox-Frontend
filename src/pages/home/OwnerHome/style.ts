import styled, { keyframes } from 'styled-components';
import button1 from '../../../assets/button/button1.png'; 
import button4 from '../../../assets/button/button4.png'; 
import buttonMidium1 from '../../../assets/button/button-midium-1.png'; 
import buttonMidium2 from '../../../assets/button/button-midium-2.png'; 
import buttonSmall4 from '../../../assets/button/button-small-4.png'; 
import SquirrelButton from '../../../assets/animal/squirrel.png'
import SpeechBubbleGif from '../../../assets/speechBubble/speechBubble1.gif'
import '../../../static/font/font.css';


const Button = styled.button`
  margin-bottom: 15px;
  font-family: 'DOSSaemmul';
  width: 250px; // 버튼 너비를 조정
  height: 40px; // 버튼 높이를 조정
  padding: 10px; // 내부 패딩을 조정
  background: url(${button4}) no-repeat center center; // 이미지를 배경으로 사용
  background-size: cover; // 이미지가 버튼에 맞게 조절
  color: black;
  border-radius: 15px;
  font-size: 17px; 
  border: 0px transparent; // 테두리 색상을 투명
  position: relative;
  z-index: 2;
  &:active { // 버튼이 눌렸을 때의 스타일
    background: url(${button1}) no-repeat center center; // 눌렸을 때의 배경 이미지
    background-size: cover; // 이미지가 버튼에 맞게 조절
  }
`;

const LetterOpenButton = styled.button`
  margin-bottom: 15px;
  font-family: 'DOSSaemmul';
  width: 170px; // 버튼 너비를 조정
  height: 40px; // 버튼 높이를 조정
  padding: 10px; // 내부 패딩을 조정
  background: url(${buttonMidium1}) no-repeat center center; // 이미지를 배경으로 사용
  background-size: cover; // 이미지가 버튼에 맞게 조절
  color: black;
  border-radius: 15px;
  font-size: 17px; 
  border: 0px transparent; // 테두리 색상을 투명
  position: relative;
  z-index: 2;
  &:active { // 버튼이 눌렸을 때의 스타일
    background: url(${buttonMidium2}) no-repeat center center; // 눌렸을 때의 배경 이미지
    background-size: cover; // 이미지가 버튼에 맞게 조절
  }
`;

const DdayCount = styled.button`
  margin-bottom: 15px;
  font-family: 'DOSSaemmul';
  width: 75px; // 버튼 너비를 조정
  height: 40px; // 버튼 높이를 조정
  padding: 10px; // 내부 패딩을 조정
  margin-left: 5px;
  background: url(${buttonSmall4}) no-repeat center center; // 이미지를 배경으로 사용
  background-size: cover; // 이미지가 버튼에 맞게 조절
  color: black;
  border-radius: 15px;
  font-size: 17px; 
  border: 0px transparent; // 테두리 색상을 투명
  position: relative;
  z-index: 2;
`;

const ButtonWrapper = styled.div`
  position: relative;
  bottom: -30px;
  font-family: 'DOSSaemmul';
  z-index: 2;
`;
  
 const CenteredWrapper = styled.div`
  font-family: 'DOSSaemmul';
  position: relative; 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

 const TextsStyle = styled.div`
  font-family: 'DOSSaemmul';
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 0.2;  // 글자 간격
  padding-top: 30px;
`;

const ModalTextsStyle1 = styled.div`
font-family: 'DOSSaemmul';
font-size: 20px;
height: 10%; 
padding-bottom: 130px;
margin: 0 -30px;
text-align: center;
`;

 const ModalTextsStyle2 = styled.div`
  font-family: 'DOSSaemmul';
  font-size: 15px;
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

// 기존의 HTML 태그를 styled-components로 변경합니다.
const StyledImg = styled.img`
  position: relative;
  z-index: 2;
  width: 160px;
  height: 40px;
`;

const H3 = styled.h3`
  margin-bottom: 5px;
  font-size: 15px;
`;

const H1 = styled.h1`
  //margin-top: 0px;
  font-family: 'DOSGothic';
  font-size: 28px;
`;

const P = styled.p`
  margin-top: 6px;
  font-size: 14px;
  padding-bottom: 30px;
`;

const Break = styled.br``;

const TreeImg = styled.img`
  width: 300px;
  height: 300px;
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

export const s = {
    Button,
    CenteredWrapper,
    TextsStyle,
    ModalTextsStyle1,
    ModalTextsStyle2,
    ModalTextsWrapper,
    CharImage,
    TreeImageWrapper,
    StyledImg,
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
    Text
}

