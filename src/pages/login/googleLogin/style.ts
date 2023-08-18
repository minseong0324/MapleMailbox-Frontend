import styled from 'styled-components';
import GoogleLoginButtonSVG from '../../../assets/socialLoginButton/GoogleLogin.svg';

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

export const s = {
  ButtonWrapper,
  CustomButton,
  HiddenDiv,
  ModalTextsWrapper,
  ModalWrapper,
  Wrapper
};
