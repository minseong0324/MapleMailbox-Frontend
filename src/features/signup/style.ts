import styled from 'styled-components';

export const SignUpWrapper = styled.div`
  font-family: 'LeeSeoyun';
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const SignUpForm = styled.form`
  font-family: 'LeeSeoyun';
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const SignUpInput = styled.input`
border-radius: 10px;
border: 1px solid #DDDDDD;
  font-family: 'LeeSeoyun';
  padding: 10px;
  font-size: 16px;
  width: 200px;
`;

export const SignUpButton = styled.button`
  font-family: 'LeeSeoyun';
  width: 250px; // 버튼 너비를 조정
  height: 35px; // 버튼 높이를 조정
  padding: 10px; // 내부 패딩을 조정
  background:rgb(255, 178, 34);
  color: black;
  border-radius: 15px;
  font-size: 17px; 
  border: 1px transparent; // 테두리 색상을 투명
  position: relative;
  z-index: 2;
`;
