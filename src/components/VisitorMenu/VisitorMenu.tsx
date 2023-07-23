import React, { useEffect } from 'react';
import {s} from "./style";

interface MenuProps {
  onLogout: () => void;
  onServiceDescription: () => void;
}

const VisitorMenu: React.FC<MenuProps> = ({ onServiceDescription }) => { 
  const [isOpen, setIsOpen] = React.useState(false);

  const handleMenuToggle = () => {
    setIsOpen(prev => !prev);
    console.log(isOpen); // 상태 업데이트 확인
    
  };
  useEffect(() => {
    console.log(isOpen); // 상태 업데이트 확인
  }, [isOpen]);

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
        <>
        <s.MenuWrapper>
          <s.StyledLink to="/">로그아웃</s.StyledLink>
          <br />
          <s.MenuItem onClick={onServiceDescription}>이용안내</s.MenuItem>
          <br />
        </s.MenuWrapper>
        </>
      )}
    </s.SunWrapper>
  );
};

export default VisitorMenu;
