import React, { useEffect, useState } from 'react';
import axios, {AxiosError} from 'axios';
import {s} from "./style";
import { useNavigate } from 'react-router-dom';
import Modal from '../../components/Modal/Modal';

interface MenuProps {
  onLogout: () => void;
  onServiceDescription: () => void;
  nowDate: number | null;
}

const accessToken = localStorage.getItem('accessToken');
const userId = localStorage.getItem('userId');

const Menu: React.FC<MenuProps> = ({ onServiceDescription, nowDate }) => { 
  const [isOpen, setIsOpen] = React.useState(false);
  const [isLogoutModalOpen, setLogoutModalOpen] = useState(false);
  const initialCount = localStorage.getItem(`menuButtonClickedCount_${userId}`);
  const [menuButtonClickedCount, setMenuButtonClickedCount] = useState(
    initialCount ? parseInt(initialCount) : 0
  );
  const navigate = useNavigate(); // useNavigate hook 사용

  console.log(menuButtonClickedCount);
  console.log(nowDate);

  const handleMenuToggle = async () => {
    setIsOpen(prev => !prev);
    if (nowDate === 1 ) {
      if(menuButtonClickedCount === 0 || menuButtonClickedCount === 1) {
        setMenuButtonClickedCount(prevCount => prevCount + 1);
      }
    }
  };
  
  useEffect(() => {
    const userId = localStorage.getItem('userId');
    console.log(menuButtonClickedCount);
    localStorage.setItem(`menuButtonClickedCount_${userId}`, menuButtonClickedCount.toString());

    (async () => { // 즉시 실행 함수 표현식
        if (nowDate === 1 && menuButtonClickedCount === 1) {
            // 조건에 맞을 때 서버에 PUT 요청 보내기
            try {
                const response = await axios.put(`http://localhost:8080/api/users/${userId}/missions/${nowDate}`, {
                    menuButtonClicked: true
                }, {
                    headers: {
                        'authorization': `${accessToken}`
                    }
                });
                if (response.status === 200) {
                    alert("메뉴버튼 클릭 미션 성공. 이는 테스트용이므로 지울 것임.")
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
              return null;
            }
        }
    })(); // 마지막의 괄호 ()는 즉시 실행을 의미합니다.
}, [menuButtonClickedCount, nowDate]); // 의존성 배열에 nowDate를 추가했습니다.

  //로그아웃 버튼 함수
  const handleSubmitLogout = async () => { 
    try {
      const response = await axios.put(`http://localhost:8080/api/auth/logout/${userId}`, {}, {
          headers: {
              'authorization': `${accessToken}`
          }
      });
        // 추가: response가 정의되어 있고 data가 있는지 확인
        if(response.status === 200) {
            // User has been deactivated, handle this (e.g. log out)
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
            <s.StyledLink to={`/mypage/${userId}`}>마이페이지</s.StyledLink>
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
