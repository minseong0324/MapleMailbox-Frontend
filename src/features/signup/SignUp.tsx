import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import KakaoLogin from '../login/kakaoLogin/KakaoLogin';
import NaverLogin from '../login/naverLogin/NaverLogin';
import GoogleLoginButton from '../login/googleLogin/GoogleLoginButton';
import axios from 'axios';
import { s } from './style';

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
        const response = await axios.post("http://localhost:8080/auth/signup/self", {
          username,
          email,
          password,
        });
  
        if (response.data.success) {
          // 로그인 토큰을 로컬 스토리지에 저장
          localStorage.setItem('token', response.data.token);
          // 회원가입 성공 시 OwnerHome 페이지로 이동
          navigate(`/OwnerHome/${response.data.userId}`);
        } else {
          // 회원가입 실패 시 서버에서 받은 메시지 출력
          alert(`회원가입에 실패했습니다: ${response.data.message}`);
        }
      } catch (error) {
          alert(`회원가입에 실패했습니다`);
        
      }
    };
  
    return (
      <s.SignUpWrapper>
        <h1>회원가입</h1>
        <s.SignUpForm onSubmit={handleSignUp}>
          
            <s.SignUpInput
                type="text"
                placeholder="이름"
                value={username}
                onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setUsername(e.target.value)}
            />

            <s.SignUpInput
                type="text"
                placeholder="이메일"
                value={email}
                onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setEmail(e.target.value)}
            />
            
            <s.SignUpInput
                type="password"
                placeholder="비밀번호"
                value={password}
                onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setPassword(e.target.value)}
            />
            <s.SignUpButton type="submit">회원가입하기</s.SignUpButton>
            <KakaoLogin/>
            <NaverLogin/>
            <GoogleLoginButton/>
        </s.SignUpForm>
      </s.SignUpWrapper>
    );
  }
  
  export default SignUp;