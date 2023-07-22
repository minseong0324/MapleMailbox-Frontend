import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

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
  font-family: 'LeeSeoyun';
  padding: 10px;
  font-size: 16px;
  width: 200px;
`;

const SignUpButton = styled.button`
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
  &:active { // 버튼이 눌렸을 때의 스타일
    background: rgb(255, 157, 0); // 눌렸을 때의 배경색을 변경
}
`;

function SignUp() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // useNavigate hook 사용
  
    // 회원가입 처리 함수
    const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
  
      // 여기에 회원가입 로직 추가
      // API 요청 등
      // 이부분은 백엔드 API가 준비되면 주석 해제하고 사용
      console.log(`Signing up as: ${username}, ${email}, ${password}`);

      // 회원가입 API 요청
      try {
        const response = await axios.post("http://localhost:8080/signup", {
          username,
          email,
          password,
        });
  
        if (response.data.success) {
          // 회원가입 성공 시 OwnerHome 페이지로 이동
          navigate('/OwnerHome');
        } else {
          // 회원가입 실패 시 서버에서 받은 메시지 출력
          alert(`회원가입에 실패했습니다: ${response.data.message}`);
        }
      } catch (error) {
          alert(`회원가입에 실패했습니다`);
        
      }
    };
  
    return (
      <SignUpWrapper>
        <h1>회원가입</h1>
        <SignUpForm onSubmit={handleSignUp}>
          
            <SignUpInput
                type="text"
                placeholder="이름"
                value={username}
                onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setUsername(e.target.value)}
            />

            <SignUpInput
                type="text"
                placeholder="이메일"
                value={email}
                onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setEmail(e.target.value)}
            />
            
            <SignUpInput
                type="password"
                placeholder="비밀번호"
                value={password}
                onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setPassword(e.target.value)}
            />
            <SignUpButton type="submit">회원가입하기</SignUpButton>
        </SignUpForm>
      </SignUpWrapper>
    );
  }
  
  export default SignUp;