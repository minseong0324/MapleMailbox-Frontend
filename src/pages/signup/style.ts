import styled from 'styled-components';
import button1 from '../../assets/button/button1.png'; 
import button2 from '../../assets/button/button2.png'; 
import button3 from '../../assets/button/button3.png'; 
import button4 from '../../assets/button/button4.png'; 


const SignUpButton = styled.button`
  font-family: 'LeeSeoyun';
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
  font-family: 'LeeSeoyun';
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

 const SignUpForm = styled.form`
  font-family: 'LeeSeoyun';
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

 const SignUpInput = styled.input`
border-radius: 10px;
border: 1px solid #DDDDDD;
  font-family: 'LeeSeoyun';
  padding: 10px;
  font-size: 16px;
  width: 200px;
`;

const H1 = styled.h1`

`;

export const s = {
  SignUpWrapper,
  SignUpForm,
  SignUpInput,
  SignUpButton,
  H1
}