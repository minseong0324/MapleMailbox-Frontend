// NaverLogin.tsx
import React from 'react';
import { s } from './style'

interface NaverProps {
    imageUrl: string;
  }

// 네이버 로그인 컴포넌트
const NaverLogin: React.FC<NaverProps> = ({ imageUrl }) => {

    // 이미지 클릭 시 네이버 로그인 페이지로 이동
    const handleButtonClick = () => {
        window.location.href = 'https://api.maplemailbox.com/api/oauth/naver';
    }

    return(
        <s.NaverLoginButton
            //alt="네이버 로그인"
            //src={imageUrl}
            style={{ backgroundImage: `url(${imageUrl})` }}
            onClick={handleButtonClick}
        />
    )
}

export default NaverLogin;
