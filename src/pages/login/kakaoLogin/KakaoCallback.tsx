import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { s } from './style'

function KakaoCallback() {
  const navigate = useNavigate();

  useEffect(() => {
    // 현재 URL에서 인증 코드와 상태 값을 추출
    /*
    const url = new URL(window.location.href);
    const authorizationCode = url.searchParams.get('authorizationCode');
    const state = url.searchParams.get('state');

    if (!authorizationCode || !state) {
      alert('인증 코드 또는 상태 값이 없습니다.');
      navigate('/login');
      return;
    }
  */
    // 백엔드 서버에 인증 코드를 전달하여 액세스 토큰 요청
    axios.get(`http://localhost:8080/oauth2/authorization/kakao`)
      .then(async (response) => {
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
          }
      )
      .catch((error) => {
        const status = error.response.status;
        if (status === 404) {
              // 리소스를 찾을 수 없음
            } else if (status === 500) {
                // 서버 내부 오류
            } else {
                // 기타 상태 코드 처리
            }
            
        navigate('/login');
      });
      
  }, [navigate]);

  return (
    <s.KakaoWrapper>
      로그인 중...
    </s.KakaoWrapper>

  );
}

export default KakaoCallback;
