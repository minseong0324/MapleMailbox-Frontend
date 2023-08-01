import React, { useEffect } from 'react';
import {s} from "./style";

interface MenuProps {
  onLogout: () => void;
  onServiceDescription: () => void;
}

const Menu: React.FC<MenuProps> = ({ onServiceDescription }) => { 
  const [isOpen, setIsOpen] = React.useState(false);

  const handleMenuToggle = () => {
    setIsOpen(prev => !prev);
    console.log(isOpen); // 상태 업데이트 확인
    
  };
  useEffect(() => {
    console.log(isOpen); // 상태 업데이트 확인
  }, [isOpen]);

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
        <s.MenuWrapper>
          <s.StyledLinkContainer isActive={isOpen}>
            <s.StyledLink to="/">로그아웃</s.StyledLink>
          </s.StyledLinkContainer>
          <s.MenuItem onClick={onServiceDescription} isActive={isOpen}>이용안내</s.MenuItem>
          <s.StyledLinkContainer isActive={isOpen}>
            <s.StyledLink to="/select-character-tree">나무/캐릭터 변경</s.StyledLink>
          </s.StyledLinkContainer>

        </s.MenuWrapper>
      )}
    </s.SunWrapper>
    </s.Wrapper>
  );
};

export default Menu;
