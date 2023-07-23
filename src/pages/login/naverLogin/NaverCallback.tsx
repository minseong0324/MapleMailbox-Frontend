// NaverCallback.tsx
import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { s } from './style'

// 네이버 로그인 후 콜백을 처리하는 컴포넌트
const NaverCallback: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // 현재 URL에서 인증 코드와 상태 값을 추출
    const url = new URL(window.location.href);
    const code = url.searchParams.get('code');
    const state = url.searchParams.get('state');

    // 인증 코드 또는 상태 값이 없으면 로그인 페이지로 리다이렉트
    if (!code || !state) {
      alert('인증 코드 또는 상태 값이 없습니다.');
      navigate('/login');
      return;
    }

    // 백엔드 서버에 인증 코드를 전달하여 액세스 토큰 요청
    axios.post('http://localhost:8080/auth/login/naver', { code, state })
      .then((response) => {
        // 서버로부터 받은 사용자 정보와 토큰을 로컬 스토리지에 저장
        localStorage.setItem('user', JSON.stringify(response.data.user));
        localStorage.setItem('token', response.data.token);
        // 로그인이 성공하면 사용자를 OwnerHome 페이지로 리다이렉트
        navigate('/OwnerHome');
      })
      .catch((error) => {
        // 로그인이 실패하면 에러를 출력하고 로그인 페이지로 리다이렉트
        console.error('로그인 실패', error);
        navigate('/login');
      });
  }, [navigate]);

  return (
    <s.NaverWrapper>
      로그인 중...
    </s.NaverWrapper>
  );
};

export default NaverCallback;
