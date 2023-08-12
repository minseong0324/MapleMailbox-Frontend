import React from "react";
import { s } from './style'

interface KakaoProps {
    imageUrl: string;
  }

const KakaoLogin: React.FC<KakaoProps> = ({ imageUrl }) => {
    const CLIENT_ID = `${import.meta.env.VITE_APP_KAKAO_CLIENT_ID}`;
    const REDIRECT_URI = `${import.meta.env.VITE_APP_KAKAO_REDIRECT_URL}`;
    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`

    // 이미지 클릭 시 카카오 로그인 페이지로 이동
    const handleClick = () => {
        window.location.href = KAKAO_AUTH_URL;
    }

    return(
        <s.KakaoLoginButton
        alt="카카오 로그인"
        src={imageUrl}
        onClick={handleClick}
        />
    )
}

export default KakaoLogin;
