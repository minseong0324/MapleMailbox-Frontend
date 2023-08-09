import styled from 'styled-components';
import button1 from '../../assets/button/button1.png'; 
import button2 from '../../assets/button/button2.png'; 
import button3 from '../../assets/button/button3.png'; 
import button4 from '../../assets/button/button4.png'; 


const SignUpButton = styled.button`
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

 const SignUpWrapper = styled.div`
  font-family: 'DOSSaemmul';
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

 const SignUpForm = styled.form`
  font-family: 'DOSSaemmul';
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const SignUpInput = styled.input`
  font-family: 'DOSSaemmul';
  padding: 10px;
  font-size: 16px;
  width: 250px;
  border: none; // 모든 테두리를 제거합니다.
  border-bottom: 1px solid #777; // 아래쪽 테두리만 추가합니다.
  background-color: transparent;
  color: #222;
  z-index: 5;

  &::placeholder {
    color: #777;
  }

  &:focus {
    outline: none;
  }
`;



const H1 = styled.h1`
  //margin-top: 0px;
  font-size: 28px;
  z-index: 0;
`;

export const s = {
  SignUpWrapper,
  SignUpForm,
  SignUpInput,
  SignUpButton,
  H1
}