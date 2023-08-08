import React from 'react';
import axios from 'axios';
import { GoogleLogin, CredentialResponse } from '@react-oauth/google';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import { s } from './style';

type MyCredentialResponse = {
  tokenId: string;
};

const GoogleLoginButton = () => {
  const navigate = useNavigate();

  const handleLogin = async (credentialResponse: CredentialResponse | MyCredentialResponse) => {
    try {
      const tokenId = 'tokenId' in credentialResponse ? credentialResponse.tokenId : credentialResponse;
      const response = await axios.post('http://localhost:8080/api/auth/login/google', {
        token: tokenId,
      });

      if (response.status === 200) {
        const userResponse = await axios.get('http://localhost:8080/api/users', {
          headers: {
            'Authorization': `Bearer ${response.data.accessToken}` // 토큰을 헤더에 포함
          }
        });

        if (userResponse.status === 200) {
          localStorage.setItem("user_id", userResponse.data.id);
          //localStorage.setItem('email', userResponse.data.email);
          localStorage.setItem('name', userResponse.data.userName);
          localStorage.setItem('access_token', userResponse.headers.accessToken);
          localStorage.setItem('refresh_token', userResponse.headers.refreshToken);
          navigate(`/OwnerHome/${userResponse.data.id}`, { replace: true }); // 인가 코드 제거 및 /OwnerHome/${email}로 리다이렉트
        } else {
          console.error('Failed to fetch user data.');
          navigate('/login');
        }
      } else {
        console.error('Login failed with status:', response.status);
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
