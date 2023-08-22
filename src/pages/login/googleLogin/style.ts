import styled from 'styled-components';
import GoogleLoginButtonSVG from '../../../assets/socialLoginButton/GoogleLogin.svg';
import buttonMidium1 from '../../../assets/button/button-midium-1.png'; 
import buttonMidium2 from '../../../assets/button/button-midium-2.png'; 

const ButtonWrapper = styled.div`
  z-index: 2;
`;

// 여기에 스타일드 컴포넌트를 정의합니다.
const HiddenDiv = styled.div`
  position: absolute;
  opacity: 0;
  z-index: 10;
`;

type CustomButtonProps = {
  buttonImage: string;
};

const CustomButton = styled.button<CustomButtonProps>`
  background-image: url(${props => props.buttonImage});
  background-image: url(${props => props.buttonImage});
  background-color: transparent; 
  color: white;
  border: none;
  width: 250px;
  height: 40px;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  background-size: cover; 
  background-position: center; 
  background-repeat: no-repeat; 
`;

const GoogleLoginButton = styled.button<CustomButtonProps>`
  background-image: url(${props => props.buttonImage});
  background-image: url(${props => props.buttonImage});
  background-color: transparent; 
  color: white;
  border: none;
  width: 250px;
  height: 40px;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  background-size: cover; 
  background-position: center; 
  background-repeat: no-repeat; 
  z-index: 2;

`;

const ModalTextsWrapper = styled.div`
position: relative;
display: flex;
font-size: 18px;

line-height: 2;  // 글자 간격
margin-bottom: 10px;
`;

const ModalWrapper = styled.div`
  align-items: center;
  justify-content: center;
  margin-top: 50px;

`;

const Wrapper = styled.div`
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
font-size: 18px;
align-items: center;
  justify-content: center;
line-height: 2;  // 글자 간격
margin-bottom: 10px;
`;

const ErrorModalTextsWrapper2 = styled.div` //두줄짜리 에러창일 때 사용
position: relative;
display: flex;
font-size: 18px;
align-items: center;
  justify-content: center;
line-height: 2;  // 글자 간격
margin-bottom: -10px;
`;

const ModalButton = styled.button`
  margin-top: 45px;
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

const GoogleWrapper = styled.div`
  position: relative;
  z-index: 2;

`;

export const s = {
  ButtonWrapper,
  CustomButton,
  HiddenDiv,
  ModalTextsWrapper,
  ModalWrapper,
  Wrapper,
  ErrorCenterModalWrapper,
  ErrorModalTextsWrapper1,
  ErrorModalTextsWrapper2,
  ModalButton,
  GoogleLoginButton,
  GoogleWrapper
};
