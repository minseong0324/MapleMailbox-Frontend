import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { s } from './style'

function KakaoCallback() {
  const navigate = useNavigate();

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
    axios.post('http://localhost:8080/api/auth/login/kakao', { authorizationCode, state })
      .then(async (response) => {
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
      })
      .catch((error) => {
        console.error('로그인 실패', error);
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
