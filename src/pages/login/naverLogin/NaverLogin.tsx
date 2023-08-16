// NaverLogin.tsx
import React from 'react';
import { s } from './style'

interface NaverProps {
    imageUrl: string;
  }

// 네이버 로그인 컴포넌트
const NaverLogin: React.FC<NaverProps> = ({ imageUrl }) => {
    // 네이버 클라이언트 ID
    const CLIENT_ID = `${import.meta.env.VITE_APP_NAVER_CLIENT_ID}`;
    // 네이버 리다이렉트 URI
    const REDIRECT_URL = `${import.meta.env.VITE_APP_NAVER_REDIRECT_URL}`;
    // 네이버 인증 URL 생성
    const NAVER_AUTH_URL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL}&state=STATE_STRING`;

    // 이미지 클릭 시 카카오 로그인 페이지로 이동
    const handleClick = () => {
        window.location.href = NAVER_AUTH_URL;
    }

    return(
        <s.NaverLoginButton
            alt="네이버 로그인"
            src={imageUrl}
            onClick={handleClick}
        />
    )
}

export default NaverLogin;
