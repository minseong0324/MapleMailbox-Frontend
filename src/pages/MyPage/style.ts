import styled from 'styled-components';
import modalButton from '../../assets/button/button-midium-1.png'; 
import modalButtonAfterClick from '../../assets/button/button-midium-2.png'; 
import button1 from '../../assets/button/button1.png'; 
import button4 from '../../assets/button/button4.png'; 

const Wrapper = styled.div`
z-index: 5;
`;

const Button = styled.button`
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
  z-index: 5;
  &:active { // 버튼이 눌렸을 때의 스타일
    background: url(${button1}) no-repeat center center; // 눌렸을 때의 배경 이미지
    background-size: cover; // 이미지가 버튼에 맞게 조절
  }
  margin-top: 50px;
`;

const ModalButton = styled.button`
  font-family: 'DOSSaemmul';
  width: 170px; // 버튼 너비를 조정
  height: 40px; // 버튼 높이를 조정
  padding: 10px; // 내부 패딩을 조정
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
`;

const CenteredWrapper = styled.div`
  position: relative; 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 4;

  @media (min-width: 570px) { // 디바이스의 너비가 570px 이상일 때 적용될 스타일
    align-items: center;
    justify-content: center;
  }
`;

const ButtonWrapper = styled.div`
margin-top: 70px;
position: relative; 
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
z-index: 4;

@media (min-width: 570px) { // 디바이스의 너비가 570px 이상일 때 적용될 스타일
    margin-top: 150px;
    align-items: center;
    justify-content: center;
}
`;

const TitleTextStyle = styled.div`
  position: relative; 
font-family: 'DOSGothic';
display: flex;
flex-direction: column;
align-items: center;
line-height: 5;
font-size: 25px;
margin-top: -10%;
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
font-family: "DOSSaemmul";
width: 190px;
height: 30px;
border: none; // 모든 테두리를 제거합니다.
color: #222;
margin-bottom: 20px;
background-color: #fff8f0;
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
    WordInput
}

