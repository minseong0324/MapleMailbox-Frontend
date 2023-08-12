import React, { useRef } from 'react';
import axios from 'axios';
import { GoogleLogin, CredentialResponse } from '@react-oauth/google';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import { s } from './style';

type MyCredentialResponse = {
  authorizationCode: string;
};

type GoogleLoginButtonProps = {
  buttonImage: string; // Declare the prop type as string (assuming the image is a string path)
}

const GoogleLoginButton: React.FC<GoogleLoginButtonProps> = ({ buttonImage }) => {
  const navigate = useNavigate();

  const handleLogin = async (credentialResponse: CredentialResponse | MyCredentialResponse) => {
    try {
      const authorizationCode = 'authorizationCode' in credentialResponse ? credentialResponse.authorizationCode : credentialResponse;
      const response = await axios.post('http://localhost:8080/api/auth/login/google', {
        authorizationCode: authorizationCode,
      });

      if (response.status === 200) {
        const userResponse = await axios.get('http://localhost:8080/api/users');
        if (userResponse.status === 200) {
          localStorage.setItem("userId", userResponse.data.userId);
          //localStorage.setItem('email', userResponse.data.email);
          localStorage.setItem('name', userResponse.data.userName);
          localStorage.setItem('accessToken', userResponse.headers.accessToken);
          localStorage.setItem('refreshToken', userResponse.headers.refreshToken);
          navigate(`/home/${userResponse.data.userId}`, { replace: true }); // 인가 코드 제거 및 /OwnerHome/${email}로 리다이렉트
        } else {
          console.error('Failed to fetch user data.');
          navigate('/login');
        }
      } else {
        console.error('Login failed with status:', response.status);
        navigate('/login');
      }
    } catch (error) {
      console.error('로그인 실패', error);
        navigate('/login');
    }
  };

  return (
    <GoogleOAuthProvider clientId={import.meta.env.VITE_APP_GOOGLE_CLIENT_ID || ''}>
      <s.ButtonWrapper>
      <s.CustomButton buttonImage={buttonImage}>
          <s.HiddenDiv>
            <GoogleLogin
                onSuccess={handleLogin}
                onError={() => {
                  console.error('로그인 실패');
                }}
            />
          </s.HiddenDiv>
        </s.CustomButton>
      </s.ButtonWrapper>
    </GoogleOAuthProvider>
  );
}

export default GoogleLoginButton;
