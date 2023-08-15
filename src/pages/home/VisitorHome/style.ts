import styled from 'styled-components';
import button1 from '../../../assets/button/button1.png'; 
import button4 from '../../../assets/button/button4.png'; 
import buttonMidium1 from '../../../assets/button/button-midium-1.png'; 
import buttonMidium2 from '../../../assets/button/button-midium-2.png'; 
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

const ModalButton = styled.button`
  margin-top: 70px;
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

const ButtonWrapper = styled.div`
  position: relative;
  bottom: -30px;
  font-family: 'DOSSaemmul';
  z-index: 2;
`;

const SendButton = styled.button`
  font-family: 'DOSSaemmul';
  width: 190px; // 버튼 너비를 조정
  height: 30px; // 버튼 높이를 조정
  padding: 10px; // 내부 패딩을 조정
  background: url(${button4}) no-repeat center center; // 이미지를 배경으로 사용
  background-size: cover; // 이미지가 버튼에 맞게 조절
  color: black;
  border-radius: 15px;
  font-size: 13px; 
  border: 0px transparent; // 테두리 색상을 투명
  position: relative;
  z-index: 2;
  &:active { // 버튼이 눌렸을 때의 스타일
    background: url(${button1}) no-repeat center center; // 눌렸을 때의 배경 이미지
    background-size: cover; // 이미지가 버튼에 맞게 조절
  }
  
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

const CheckTextLength = styled.div`
margin-top: -20px;
font-family: 'DOSSaemmul';
display: flex;
flex-direction: column;
color: #666 !important;
align-self: flex-end;   // 이 부분을 추가
line-height: 0.2;  // 글자 간격
`;


const ModalCenterWrapper = styled.div`
  position: relative; 
  display: flex;
  flex-direction: column; 
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;  // 높이를 설정
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

const H2 = styled.h2`
  margin-top: 0px;
  font-size: 20px;
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

const GinkgoCharImage = styled.img`
position: absolute;
z-index: 2;
top: 77%; // top offset from tree image
right: 25%; // right offset from tree image
`;


const NameInput = styled.input`
font-family: "DOSSaemmul";
width: 190px;
height: 30px;
border: none; // 모든 테두리를 제거합니다.
color: #222;
margin-bottom: 20px;
background-color: #fff8f0;
`;

const LetterArea = styled.textarea`
font-family: "DOSSaemmul";
width: 190px;
height: 250px;
border: none; // 모든 테두리를 제거합니다.
color: #222;
overflow: auto;
margin-bottom: 20px;
resize: none;
background-color: #fff8f0;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center; 
  justify-content: center;
  gap: 10px;
`;


export const s = {
    Button,
    SendButton,
    CenteredWrapper,
    TextsStyle,
    ModalCenterWrapper,
    CharImage,
    TreeImageWrapper,
    StyledImg,
    TreeImg,
    TreeFragmentImg,
    GinkgoCharImage,
    NameInput,
    LetterArea,
    H3,
    H2,
    H1,
    P,
    Break,
    Form,
    ButtonWrapper,
    ModalButton,
    CheckTextLength
}