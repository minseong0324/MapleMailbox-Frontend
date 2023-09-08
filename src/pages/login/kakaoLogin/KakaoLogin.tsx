import React from 'react';
import { s } from './style'

interface KakaoProps {
    imageUrl: string;
  }

// 네이버 로그인 컴포넌트
const KakaoLogin: React.FC<KakaoProps> = ({ imageUrl }) => {

    // 이미지 클릭 시 네이버 로그인 페이지로 이동
    const handleButtonClick = () => {
        window.location.href = 'https://maplemailbox.com/api/oauth/kakao';
    }

    return(
        <s.KakaoLoginButton
            //alt="카카오 로그인"
            //src={imageUrl}
            style={{ backgroundImage: `url(${imageUrl})` }}
            onClick={handleButtonClick}
        />
    )
}

export default KakaoLogin;
