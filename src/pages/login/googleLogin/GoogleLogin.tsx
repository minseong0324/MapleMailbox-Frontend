// NaverLogin.tsx
import React, { useState } from 'react';
import { s } from './style'
import ErrorModal from "src/components/ErrorModal/ErrorModal"; //구글 검수 완료 시 삭제


type GoogleLoginButtonProps = {
    buttonImage: string; // Declare the prop type as string (assuming the image is a string path)
  }

// 네이버 로그인 컴포넌트
const GoogleLogin: React.FC<GoogleLoginButtonProps> = ({ buttonImage }) => {
  const [isErrorModalOpen, setErrorModalOpen] = useState(false);
  const [modalErrorContent, setModalErrorContent] = useState<React.ReactNode>(null); // 모달에 표시될 내용을 저장합니다.
  

    // 이미지 클릭 시 구글 로그인 페이지로 이동
    const handleButtonClick = () => {
        //window.location.href = 'https://api.maplemailbox.com/api/oauth/google'; //구글 검수 완료 시 주석 해제
        setErrorModalOpen(true);
        setModalErrorContent(
          <s.ErrorCenterModalWrapper>
              <s.ErrorModalTextsWrapper2>곧 오픈 예정입니다.</s.ErrorModalTextsWrapper2>
                <s.ErrorModalTextsWrapper2>네이버, 카카오로 이용해주세요!</s.ErrorModalTextsWrapper2>
              <s.ModalButton onClick={handleModalClose}>닫기</s.ModalButton>
          </s.ErrorCenterModalWrapper>
      );
    }

    const handleModalClose = () => { 
      setErrorModalOpen(false);
    }

    return (
      <>
        <s.GoogleLoginButton
        buttonImage={buttonImage}
        onClick={handleButtonClick}
        />
        <ErrorModal isOpen={isErrorModalOpen} onClose={() => setErrorModalOpen(false)} >
          {modalErrorContent}
        </ErrorModal>
    </>
      );
    }


export default GoogleLogin;
