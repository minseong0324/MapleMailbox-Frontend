import React from 'react';
import {s} from "./style";

interface MenuBeforeLoginProps {
  onLogin: () => void;
  onServiceDescription: () => void;
}

const MenuBeforeLogin: React.FC<MenuBeforeLoginProps> = ({ onServiceDescription }) => {  const [isOpen, setIsOpen] = React.useState(false);

  const handleMenuToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <s.SunWrapper>
    <s.SunButton onClick={handleMenuToggle} />
    {isOpen &&
      Array.from({ length: 70 }, (_, i) => (
        <s.SunRay
          key={i}  // key prop 추가
          style={{
            transform: `rotate(${-5 + i}deg)`,
            transformOrigin: 'top',              
          }}
        />
    ))}

      {isOpen && (
        <s.MenuWrapper>
        <s.StyledLink to="/login">로그인</s.StyledLink>
          <br />
          <s.MenuItem onClick={onServiceDescription}>이용안내</s.MenuItem>
        </s.MenuWrapper>
      )}
    </s.SunWrapper>
  );
};

export default MenuBeforeLogin;