import React, { useEffect, useState } from 'react';
import axios, {AxiosError} from 'axios';
import {s} from "./style";
import { useNavigate } from 'react-router-dom';
import Modal from '../../components/Modal/Modal';
import ErrorModal from "src/components/ErrorModal/ErrorModal";
import {useToken}  from '../../contexts/TokenProvider/TokenProvider'

interface MenuProps {
  onLogout: () => void;
  onServiceDescription: () => void;
}

const VisitorMenu: React.FC<MenuProps> = ({ onServiceDescription }) => { 
  const { accessToken, refreshToken } = useToken();
  const userId = localStorage.getItem("userId");
  const [isOpen, setIsOpen] = React.useState(false);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);  // 로그인 상태를 저장하는 state 추가
  const [isLogoutModalOpen, setLogoutModalOpen] = useState(false);
  const navigate = useNavigate(); // useNavigate hook 사용
  const [isErrorModalOpen, setErrorModalOpen] = useState(false);
  const [modalErrorContent, setModalErrorContent] = useState<React.ReactNode>(null); // 모달에 표시될 내용을 저장합니다.
  
  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    setIsLoggedIn(accessToken !== null);  // accessToken의 값에 따라 로그인 상태를 설정
  }, []);  // 컴포넌트가 마운트될 때만 실행

  const handleMenuToggle = () => {
    setIsOpen((prev) => !prev);
  };

  //로그아웃 버튼 함수
  const handleSubmitLogout = async () => { 
    try {
      const response = await axios.put(`http://13.125.112.77:80/api/auth/logout/${userId}`, {}, {
          headers: {
              'authorization': `${accessToken}`
          }
      });
        // 추가: response가 정의되어 있고 data가 있는지 확인
        if(response.status === 200) {
            // User has been deactivated, handle this (e.g. log out)
            setLogoutModalOpen(false);
            
        } 
        navigate('/')
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
      setLogoutModalOpen(false);
      // "menuButtonClickedCount"의 값을 가져옵니다. 로그아웃 하고도 첫번째날 미션인 메뉴클릭하기에 대해 계속 요청이 보내지기 떄문.
      const menuButtonClickedCount = localStorage.getItem(`menuButtonClickedCount_${userId}`);
      const getUserId = localStorage.getItem('userId');
      // 모든 항목을 삭제합니다.
      localStorage.clear();
      // "keepThisKey"의 값을 다시 저장합니다.
      if (menuButtonClickedCount !== null) {
          localStorage.setItem(`menuButtonClickedCount_${getUserId}`, menuButtonClickedCount);
        }
      navigate('/')
      return null;
    }
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
          <>
          <s.MenuWrapper>
            {isLoggedIn ? (  // 로그인 상태에 따라 다른 링크를 렌더링
                <s.MenuItem onClick={handleSubmitLeaveModalOpen} isActive={isOpen}>로그아웃</s.MenuItem>
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
      <ErrorModal isOpen={isLogoutModalOpen} onClose={() => setLogoutModalOpen(false)}>
        <s.ErrorCenterModalWrapper>
            <s.LogoutModalTextsWrapper>로그아웃 하시겠어요?</s.LogoutModalTextsWrapper>
            <s.ModalButton onClick={handleSubmitLogout}>로그아웃하기</s.ModalButton>
            <s.LogoutModalButton onClick={handleSubmitCancel}>취소</s.LogoutModalButton>
        </s.ErrorCenterModalWrapper>
      </ErrorModal>
      <ErrorModal isOpen={isErrorModalOpen} onClose={() => setErrorModalOpen(false)} >
        {modalErrorContent}
      </ErrorModal>
      </s.Wrapper>
  );
};

export default VisitorMenu;
