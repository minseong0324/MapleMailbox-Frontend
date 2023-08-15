import React, { useEffect } from 'react';
import {s} from "./style";

interface MenuProps {
  onLogout: () => void;
  onServiceDescription: () => void;
}

const VisitorMenu: React.FC<MenuProps> = ({ onServiceDescription }) => { 
  const [isOpen, setIsOpen] = React.useState(false);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);  // 로그인 상태를 저장하는 state 추가

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    setIsLoggedIn(accessToken !== null);  // accessToken의 값에 따라 로그인 상태를 설정
  }, []);  // 컴포넌트가 마운트될 때만 실행

  const handleMenuToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <s.Wrapper>
    <s.SunWrapper>
    <s.SunButton onClick={handleMenuToggle} />
    {isOpen &&
      Array.from({ length: 70 }, (_, i) => (
        <s.SunRay
            key={i}
            style={{
                transform: `rotate(${-5 + i}deg)`,
                transformOrigin: 'top',
            }}
            isActive={isOpen}
        />
    ))
    }

    {isOpen && (
          <>
          <s.MenuWrapper>
            {isLoggedIn ? (  // 로그인 상태에 따라 다른 링크를 렌더링
              <s.StyledLinkContainer isActive={isOpen}>
                <s.StyledLink to="/">로그아웃</s.StyledLink>
              </s.StyledLinkContainer>
            ) : (
              <s.StyledLinkContainer isActive={isOpen}>
                <s.StyledLink to="/login">로그인</s.StyledLink>
              </s.StyledLinkContainer>
            )}
            <s.MenuItem onClick={onServiceDescription} isActive={isOpen}>이용안내</s.MenuItem>
          </s.MenuWrapper>
          </>
        )}
      </s.SunWrapper>
    </s.Wrapper>
  );
};

export default VisitorMenu;
