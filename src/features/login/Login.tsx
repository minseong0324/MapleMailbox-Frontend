import React, { useState } from 'react';
import { s } from './style'
import { useNavigate } from 'react-router-dom';
import KakaoLogin from './kakaoLogin/KakaoLogin';
import NaverLogin from './naverLogin/NaverLogin';
import GoogleLoginButton from './googleLogin/GoogleLoginButton';
import axios from 'axios';



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
        const response = await axios.post("http://localhost:8080/auth/login/Self", {
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
      <s.LoginWrapper>
        <s.TextsStyle>
            <s.H3>가을을 기다리며,</s.H3>
            <s.H1>단풍 우편함</s.H1>
            <br/>
            <s.P>당신의 따뜻한 마음으로 나무를 물들여봐요.</s.P>
        </s.TextsStyle>
        <s.LoginForm onSubmit={handleLogin}>
            <s.LoginInput
                type="text"
                placeholder="이메일"
                value={email}
                onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setEmail(e.target.value)}
            />
            <s.LoginInput
                type="password"
                placeholder="비밀번호"
                value={password}
                onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setPassword(e.target.value)}
            />
          <s.LoginButton type="submit">로그인하기</s.LoginButton>
          <KakaoLogin/>
          <NaverLogin/>
          <GoogleLoginButton/>
        </s.LoginForm>
      </s.LoginWrapper>
    );
  }
  
  export default Login;

  /*
function setIdToken(credential: string) {
  throw new Error('Function not implemented.');
}
*/