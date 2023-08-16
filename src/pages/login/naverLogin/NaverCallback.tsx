// NaverCallback.tsx
import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { s } from './style'

function NaverCallback() {
  const navigate = useNavigate();

  useEffect(() => {
    const url = new URL(window.location.href);
    const authorizationCode = url.searchParams.get('authorizationCode');
    const state = url.searchParams.get('state');

    if (!authorizationCode || !state) {
      alert('인증 코드 또는 상태 값이 없습니다.');
      navigate('/login');
      return;
    }

    // 백엔드 서버에 인증 코드를 전달하여 액세스 토큰 요청
    axios.post(`http://localhost:8080/api/auth/login/naver`, { authorizationCode, state })
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
      })
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
    <s.NaverWrapper>
      로그인 중...
    </s.NaverWrapper>
  );
}

export default NaverCallback;
