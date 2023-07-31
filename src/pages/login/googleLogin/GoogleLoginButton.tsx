import React from 'react';
import axios from 'axios';
import { GoogleLogin, CredentialResponse } from '@react-oauth/google';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import { s } from './style'
type MyCredentialResponse = {
  tokenId: string;
  // Add other properties here if needed
};

const GoogleLoginButton = () => {
  const navigate = useNavigate();

  const handleLogin = async (credentialResponse: CredentialResponse | MyCredentialResponse) => {
    try {
      const tokenId = 'tokenId' in credentialResponse ? credentialResponse.tokenId : credentialResponse;
      const response = await axios.post('http://localhost:8080/auth/login/google', {
        token: tokenId, // Google에서 발급한 토큰을 서버에 전달
      });
        //토큰을 백엔드한테 보내서 백엔드가 잘 처리해서 이메일을 프론트가 요청을 해서 이메일을 로컬스토리지에 저장
      if (response.data.success) { 
        // 로그인에 성공했을 경우
        navigate('/OwnerHome');
      } else {
        // 로그인에 실패했을 경우
        navigate('/login');
      }
    } catch (error) {
      console.error('Login request failed:', error);
    }
  };

  return (
    <GoogleOAuthProvider clientId={import.meta.env.VITE_APP_GOOGLE_CLIENT_ID || ''}>
      <s.ButtonWrapper>
        <GoogleLogin
          onSuccess={handleLogin}
          onError={() => {
            console.log('Login Failed');
          }}
        />
      </s.ButtonWrapper>
    </GoogleOAuthProvider>
  );
};

export default GoogleLoginButton;
