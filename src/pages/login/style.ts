import styled from 'styled-components';

const LoginWrapper = styled.div`
  font-family: 'LeeSeoyun';
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const LoginForm = styled.form`
  font-family: 'LeeSeoyun';
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 67px;
`;

const LoginInput = styled.input`
  font-family: 'LeeSeoyun';
  padding: 10px;
  font-size: 16px;
  width: 200px;
`;

const LoginButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  font-family: 'LeeSeoyun';
  width: 200px; // 버튼 너비를 조정
  height: 35px; // 버튼 높이를 조정
  padding: 10px; // 내부 패딩을 조정
  background:rgb(255, 178, 34);
  color: black;
  border-radius: 15px;
  font-size: 17px; 
  border: 1px transparent; // 테두리 색상을 투명
  position: relative;
  z-index: 2;
  &:active { // 버튼이 눌렸을 때의 스타일
    background: rgb(255, 157, 0); // 눌렸을 때의 배경색을 변경
}
`;

const TextsStyle = styled.div`
font-family: 'LeeSeoyun';
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 0.2;  // 글자 간격
`;

const H3 = styled.h3`

`;

const H1 = styled.h1`

`;

const P = styled.p`

`;

export const s = {
    LoginWrapper,
    LoginForm,
    LoginInput,
    LoginButton,
    TextsStyle,
    H3,
    H1,
    P
}