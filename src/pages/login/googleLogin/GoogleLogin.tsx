// NaverLogin.tsx
import React from 'react';
import { s } from './style'

type GoogleLoginButtonProps = {
    buttonImage: string; // Declare the prop type as string (assuming the image is a string path)
  }

// 네이버 로그인 컴포넌트
const KakaoLogin: React.FC<GoogleLoginButtonProps> = ({ buttonImage }) => {
    // 네이버 클라이언트 ID
    //const CLIENT_ID = `${import.meta.env.VITE_APP_NAVER_CLIENT_ID}`;
    // 네이버 리다이렉트 URI
    //const REDIRECT_URL = `${import.meta.env.VITE_APP_NAVER_REDIRECT_URL}`;
    // 네이버 인증 URL 생성
    //const NAVER_AUTH_URL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL}&state=STATE_STRING`;

    // 이미지 클릭 시 네이버 로그인 페이지로 이동
    const handleButtonClick = () => {
        window.location.href = 'http://localhost:8080/oauth/google';
    }

    return (
        <s.GoogleLoginButton
        buttonImage={buttonImage}
        onClick={handleButtonClick}
    />
      );
    }


export default KakaoLogin;
