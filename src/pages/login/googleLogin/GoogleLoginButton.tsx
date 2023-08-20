import React, { useState } from 'react';
import axios, {AxiosError} from 'axios';
import { GoogleLogin, CredentialResponse } from '@react-oauth/google';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import { s } from './style';
import ErrorModal from "src/components/ErrorModal/ErrorModal";

type MyCredentialResponse = {
  authorizationCode: string;
};

type GoogleLoginButtonProps = {
  buttonImage: string; // Declare the prop type as string (assuming the image is a string path)
}

const GoogleLoginButton: React.FC<GoogleLoginButtonProps> = ({ buttonImage }) => {
  const navigate = useNavigate();
  const [isErrorModalOpen, setErrorModalOpen] = useState(false);
  const [modalErrorContent, setModalErrorContent] = useState<React.ReactNode>(null); // 모달에 표시될 내용을 저장합니다.
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
        try {   
          const userResponse = await axios.get(`http://localhost:8080/api/users`, {
            headers: {
              'authorization': `${accessToken}` 
            }
          });
          if (userResponse.status === 200) {
            localStorage.setItem("userId", userResponse.data.userId);
            //localStorage.setItem('email', userResponse.data.email);
            localStorage.setItem('userName', userResponse.data.userName);

          // navigate(`/home/${userResponse.data.userId}`, { replace: true }); // 인가 코드 제거 및 /OwnerHome/${email}로 리다이렉트
          } 
          const userId = localStorage.getItem('userId')
          const returnUrl = localStorage.getItem('returnUrl');

          if (returnUrl) {
            // 저장된 URL로 리다이렉트합니다.
            navigate(returnUrl);
            localStorage.removeItem('returnUrl'); // 사용 후 저장된 URL을 삭제합니다.
          } else {
            // 저장된 URL이 없으면 기본 페이지(예: 사용자 홈)로 리다이렉트합니다.
            navigate(`/home/${userId}`, { replace: true }); // 인가 코드 제거 및 /OwnerHome/${email}로 리다이렉트
          }
        } catch (error: unknown) { //에러 일 경우
          if (error instanceof AxiosError) {
            const status = error?.response?.status;
            console.error('Failed to fetch user info:', error);
            setModalErrorContent(
              <s.ErrorCenterModalWrapper>
                <s.ErrorModalTextsWrapper2>유저의 정보를</s.ErrorModalTextsWrapper2>
                <s.ErrorModalTextsWrapper2>불러오지 못했어요.</s.ErrorModalTextsWrapper2>
                <s.ModalButton onClick={handleErrorModalClose}>닫기</s.ModalButton>
              </s.ErrorCenterModalWrapper>
            );
            if (status === 404) {
              // 리소스를 찾을 수 없음
            } else if (status === 500) {
                // 서버 내부 오류
            } else {
                // 기타 상태 코드 처리
            }
          } 
          setErrorModalOpen(true);
          return null;
        }
      } 
    }catch (error: unknown) { //에러 일 경우
      if (error instanceof AxiosError) {
        const status = error?.response?.status;
        console.error('Failed to fetch user info:', error);
        setModalErrorContent(
          <s.ErrorCenterModalWrapper>
              <s.ErrorModalTextsWrapper2>구글에서 정보를</s.ErrorModalTextsWrapper2>
              <s.ErrorModalTextsWrapper2>불러오지 못했어요.</s.ErrorModalTextsWrapper2>
              <s.ModalButton onClick={handleErrorModalClose}>닫기</s.ModalButton>
          </s.ErrorCenterModalWrapper>
        );
        if (status === 404) {
          // 리소스를 찾을 수 없음
        } else if (status === 500) {
            // 서버 내부 오류
        } else {
            // 기타 상태 코드 처리
        }
      } 
      setErrorModalOpen(true);
      navigate('/login');
      return null;
    }
  };

  const handleErrorModalClose = () => {
    navigate('/login')
  }
  
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

          <ErrorModal isOpen={isErrorModalOpen} onClose={() => setErrorModalOpen(false)} >
          {modalErrorContent}
      </ErrorModal>
        </GoogleOAuthProvider>
  );
}

export default GoogleLoginButton;
