import React from 'react';
import axios from 'axios';
import { GoogleLogin, CredentialResponse } from '@react-oauth/google';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

type MyCredentialResponse = {
  tokenId: string;
  // Add other properties here if needed
};

const ButtonWrapper = styled.div`
  z-index: 2;
`;

const GoogleLoginButton = () => {
  const navigate = useNavigate();

  const handleLogin = async (credentialResponse: CredentialResponse | MyCredentialResponse) => {
    try {
      const tokenId = 'tokenId' in credentialResponse ? credentialResponse.tokenId : credentialResponse;
      const response = await axios.post('http://localhost:8080/login', {
        token: tokenId, // Google에서 발급한 토큰을 서버에 전달
      });

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
      <ButtonWrapper>
        <GoogleLogin
          onSuccess={handleLogin}
          onError={() => {
            console.log('Login Failed');
          }}
        />
      </ButtonWrapper>
    </GoogleOAuthProvider>
  );
};

export default GoogleLoginButton;
