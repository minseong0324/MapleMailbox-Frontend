import React, { useEffect, useState } from 'react';
import axios,{AxiosError} from 'axios';
import { useNavigate } from 'react-router-dom';
import { s } from './style'
import ErrorModal from "src/components/ErrorModal/ErrorModal";

function KakaoCallback() {
  const navigate = useNavigate();
  const [isErrorModalOpen, setErrorModalOpen] = useState(false);
  const [modalErrorContent, setModalErrorContent] = useState<React.ReactNode>(null); // 모달에 표시될 내용을 저장합니다.
  
  useEffect(() => {
    // 현재 URL에서 인증 코드와 상태 값을 추출
    const url = new URL(window.location.href);
    const authorizationCode = url.searchParams.get('authorizationCode');
    const state = url.searchParams.get('state');

    if (!authorizationCode || !state) {
      alert('인증 코드 또는 상태 값이 없습니다.');
      navigate('/login');
      return;
    }

    // 백엔드 서버에 인증 코드를 전달하여 액세스 토큰 요청
    axios.post(`http://localhost:8080/api/auth/login/kakao`, { authorizationCode, state })
      .then(async (response) => {
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
          }catch (error: unknown) { //에러 일 경우
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
                navigate('/login');
              } else if (status === 500) {
                  // 서버 내부 오류
                  navigate('/login');
              } else {
                  // 기타 상태 코드 처리
                  navigate('/login');
              }
            } 
            setErrorModalOpen(true);
            return null;
          }
        }
      }
      )
      .catch((error) => {
        const status = error.response.status;
        setModalErrorContent(
          <s.ErrorCenterModalWrapper>
              <s.ErrorModalTextsWrapper2>카카오에서 정보를</s.ErrorModalTextsWrapper2>
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
        setErrorModalOpen(true);
      });
    }, [navigate]);

    const handleErrorModalClose = () => {
      navigate('/login');
    }

  return (
    <s.KakaoWrapper>
      로그인 중...
      <ErrorModal isOpen={isErrorModalOpen} onClose={() => setErrorModalOpen(false)} >
          {modalErrorContent}
      </ErrorModal>
    </s.KakaoWrapper>
  );
}

export default KakaoCallback;
