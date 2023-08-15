import React, { useEffect, useState } from 'react';
import axios, {AxiosError} from 'axios';
import {s} from "./style";
import { useNavigate } from 'react-router-dom';
import Modal from '../../components/Modal/Modal';

interface MenuProps {
  onLogout: () => void;
  onServiceDescription: () => void;
}

const accessToken = localStorage.getItem("accessToken");
const userId = localStorage.getItem("userId");

const Menu: React.FC<MenuProps> = ({ onServiceDescription }) => { 
  const [isOpen, setIsOpen] = React.useState(false);
  const [isLogoutModalOpen, setLogoutModalOpen] = useState(false);
  const navigate = useNavigate(); // useNavigate hook 사용

  const handleMenuToggle = () => {
    setIsOpen(prev => !prev);
    console.log(isOpen); // 상태 업데이트 확인
    
  };
  useEffect(() => {
    console.log(isOpen); // 상태 업데이트 확인
  }, [isOpen]);

  //로그아웃 버튼 함수
  const handleSubmitLogout = async () => { 
    try {
        const response = await axios.put(`http://localhost:8080/api/auth/logout/${userId}`, {
            headers: {
                'Authorization': `${accessToken}`
            }
    });
        // 추가: response가 정의되어 있고 data가 있는지 확인
        if(response.status === 200) {
            // User has been deactivated, handle this (e.g. log out)
            setLogoutModalOpen(false);
            localStorage.clear();
            window.location.reload(); // 페이지 새로고침
            navigate('/')
        } 
        
    
    } catch (error: unknown) { //에러 일 경우
        if (error instanceof AxiosError) {
            const status = error?.response?.status;
            console.error('Failed to fetch user info:', error);
            if (status === 404) {
                // 리소스를 찾을 수 없음
            } else if (status === 500) {
                // 서버 내부 오류
            } else {
            // 기타 상태 코드 처리
            } 
        }
        alert("로그아웃 하는 데에 실패했습니다.");
    } 
    return null;
  }

  //로그아웃 하기 모달창 열기 함수
  const handleSubmitLeaveModalOpen = () => { 
    setLogoutModalOpen(true);
}
   //로그아웃 취소 함수
   const handleSubmitCancel = () => { 
    setLogoutModalOpen(false);
} 

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
          <s.MenuItem onClick={handleSubmitLeaveModalOpen} isActive={isOpen}>로그아웃</s.MenuItem>
          <s.MenuItem onClick={onServiceDescription} isActive={isOpen}>이용안내</s.MenuItem>
          <s.StyledLinkContainer isActive={isOpen}>
            <s.StyledLink to="/mypage/:userId">마이페이지</s.StyledLink>
          </s.StyledLinkContainer>

        </s.MenuWrapper>
      )}
    </s.SunWrapper>

    <Modal isOpen={isLogoutModalOpen} onClose={() => setLogoutModalOpen(false)}>
      <s.CenteredWrapper>
        <s.H2>로그아웃 하시겠습니까?</s.H2>
        <s.ModalButton onClick={handleSubmitLogout}>로그아웃하기</s.ModalButton>
        <s.ModalButton onClick={handleSubmitCancel}>취소</s.ModalButton>
      </s.CenteredWrapper>
    </Modal>
    </s.Wrapper>
  );
};

export default Menu;
