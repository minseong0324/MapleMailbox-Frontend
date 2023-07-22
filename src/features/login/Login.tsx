import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import KakaoLogin from './kakaoLogin/KakaoLogin';
import NaverLogin from './naverLogin/NaverLogin';
import GoogleLoginButton from './googleLogin/GoogleLoginButton';
import axios from 'axios';

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

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // useNavigate hook 사용
  
    // 로그인 처리 함수
    const handleLogin = async (e: React.FormEvent) => {
      e.preventDefault();
  
      // 여기에 로그인 로직 추가
      // API 요청 등
      // 이부분은 백엔드 API가 준비되면 주석 해제하고 사용
      try {
        const response = await axios.post("http://localhost:8080/login", {
          email,
          password,
        });
  
        if (response.data.success) {
          // Save user info to local storage
          localStorage.setItem("user", JSON.stringify(response.data.user));
          alert("로그인에 성공했습니다!");
          // 로그인 후 홈페이지로 이동
          navigate('/OwnerHome');
        } else {
          alert(`로그인에 실패했습니다: ${response.data.message}`);
        }
      } catch (error) {
        alert("로그인 도중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
      }
  
      // 여기서 서버에 로그인 요청을 보냅니다.
      console.log(`Logging in with email: ${email} and password: ${password}`);
    
      
    };


  
    return (
      <LoginWrapper>
        <TextsStyle>
            <h3>가을을 기다리며,</h3>
            <h1>단풍 우편함</h1>
            <br/>
            <p>당신의 따뜻한 마음으로 나무를 물들여봐요.</p>
        </TextsStyle>
        <LoginForm onSubmit={handleLogin}>
            <LoginInput
                type="text"
                placeholder="이메일"
                value={email}
                onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setEmail(e.target.value)}
            />
            <LoginInput
                type="password"
                placeholder="비밀번호"
                value={password}
                onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setPassword(e.target.value)}
            />
          <LoginButton type="submit">로그인하기</LoginButton>
          <KakaoLogin/>
          <NaverLogin/>
          <GoogleLoginButton/>
        </LoginForm>
      </LoginWrapper>
    );
  }
  
  export default Login;

  /*
function setIdToken(credential: string) {
  throw new Error('Function not implemented.');
}
*/