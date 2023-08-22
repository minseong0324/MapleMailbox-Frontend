import React, { useEffect, useState, useCallback } from 'react';
import axios, {AxiosError} from 'axios';
import { s } from './style'
import ErrorModal from "src/components/ErrorModal/ErrorModal";
import {useToken}  from '../../../contexts/TokenProvider/TokenProvider'

// 편지 정보를 저장할 타입을 정의합니다.
type Letter = {
  senderName: string;
  letterContent: string;
};

type Props = {
  selectedDate: number; // 선택된 날짜를 props로 받습니다.
  onClose: () => void; // 뒤로가기 버튼을 클릭했을 때 호출될 함수를 props로 받습니다.
};

const LettersRead: React.FC<Props> = ({ selectedDate, onClose }) => {
  const { accessToken, refreshToken } = useToken();
  const userId = localStorage.getItem("userId");
  const [letters, setLetters] = useState<Letter[]>([]); // 선택된 날짜의 편지들을 저장할 상태입니다.
  const [isErrorModalOpen, setErrorModalOpen] = useState(false);
  const [modalErrorContent, setModalErrorContent] = useState<React.ReactNode>(null); // 모달에 표시될 내용을 저장합니다.

  // 선택된 날짜의 편지들을 가져오는 함수입니다.
  const fetchLetters = useCallback(async () => {
    try {
      const response = await axios.get(`http://maplemailbox.com/api/users/${userId}/letters/${selectedDate}`, {
        headers: {
          'authorization': `${accessToken}`
        }
      }); // 서버에서 편지 정보를 가져옵니다.
      if(response.status===200) {
        setLetters(response.data); // 가져온 편지 정보를 상태에 저장합니다.
        console.log("lettersRead에서 편지 목록")
        console.log(response.data)
        console.log("lettersRead에서 편지 목록--")

      }
    } catch (error: unknown) { //에러 일 경우
      if (error instanceof AxiosError) {
          const status = error?.response?.status;
          console.error('Failed to fetch user info:', error);
          setModalErrorContent(
            <s.ErrorCenterModalWrapper>
                <s.ErrorModalTextsWrapper2>유저의 정보를</s.ErrorModalTextsWrapper2>
                <s.ErrorModalTextsWrapper2>불러오지 못했어요.</s.ErrorModalTextsWrapper2>
                <s.ModalButton onClick={handleErrorModalClose}>닫기</s.ModalButton>
            </s.ErrorCenterModalWrapper>
          );
          if (status === 404) {
              // 리소스를 찾을 수 없음
          } else if (status === 500) {
              // 서버 내부 오류
          } else {
              // 기타 상태 코드 처리
          }
      } 
      setErrorModalOpen(true);
      return null;
    }
  }, [selectedDate]);

  useEffect(() => {
    fetchLetters();
  }, [fetchLetters]);

  const handleErrorModalClose = () => {
    setErrorModalOpen(false);
  }
  
    return (
      <s.LetterWrapper>
        {letters.map((letter, index) => (
          <s.LetterContent key={index}>
            <s.TextsStyle>
              <s.H2>보낸이: {letter.senderName}</s.H2>
              <s.P>편지내용: {letter.letterContent}</s.P>
            </s.TextsStyle>
          </s.LetterContent>
        ))}

        <s.BackButton onClick={onClose}>닫기</s.BackButton>

        <ErrorModal isOpen={isErrorModalOpen} onClose={() => setErrorModalOpen(false)} >
          {modalErrorContent}
        </ErrorModal>
      </s.LetterWrapper>
    );
};


export default LettersRead;
