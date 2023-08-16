import React, { useRef } from 'react';
import axios, {AxiosError} from 'axios';
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
      const response = await axios.post(`http://localhost:8080/api/auth/login/google`, {
        authorizationCode: authorizationCode,
      });

      if (response.status === 200) {
          localStorage.setItem('accessToken', response.headers.accessToken);
          localStorage.setItem('refreshToken', response.headers.refreshToken);
          const accessToken = localStorage.getItem('accessToken');
          
        const userResponse = await axios.get(`http://localhost:8080/api/users`, {
          headers: {
            'authorization': `${accessToken}` 
          }
        });
        if (userResponse.status === 200) {
          localStorage.setItem("userId", userResponse.data.userId);
          //localStorage.setItem('email', userResponse.data.email);
          localStorage.setItem('name', userResponse.data.userName);
          
          navigate(`/home/${userResponse.data.userId}`, { replace: true }); // 인가 코드 제거 및 /OwnerHome/${email}로 리다이렉트
        } 
      }
    } catch (error: unknown) { //에러 일 경우
      if (error instanceof AxiosError) {
        const status = error?.response?.status;
        console.error('Failed to fetch user info:', error);
        if (status === 404) {
          // 리소스를 찾을 수 없음
          navigate('/login');
        } else if (status === 500) {
            // 서버 내부 오류
            navigate('/login');
        } else {
            // 기타 상태 코드 처리
            navigate('/login');
        }
      } 
      return null;
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
