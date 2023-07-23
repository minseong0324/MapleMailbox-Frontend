import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import { s } from './style'
// 편지 정보를 저장할 타입을 정의합니다.
type Letter = {
  date: string;
  senderName: string;
  letterContent: string;
};

type Props = {
  date: number; // 선택된 날짜를 props로 받습니다.
  onClose: () => void; // 뒤로가기 버튼을 클릭했을 때 호출될 함수를 props로 받습니다.
};

const LettersRead: React.FC<Props> = ({ date, onClose }) => {
  const [letters, setLetters] = useState<Letter[]>([]); // 선택된 날짜의 편지들을 저장할 상태입니다.

  // 선택된 날짜의 편지들을 가져오는 함수입니다.
  const fetchLetters = useCallback(async () => {
    try {
      const response = await axios.get(`/api/letters/${date}`); // 서버에서 편지 정보를 가져옵니다.
      setLetters(response.data); // 가져온 편지 정보를 상태에 저장합니다.
    } catch (error) {
      console.error(error); // 에러가 발생하면 콘솔에 에러를 출력합니다.
    }
  }, [date]);

  // 컴포넌트가 마운트되거나 date가 변경될 때 서버에서 편지 정보를 가져옵니다.
  useEffect(() => {
    fetchLetters();
  }, [fetchLetters]);

  return (
    <s.LetterWrapper>
      <s.BackButton onClick={onClose}>뒤로 가기</s.BackButton>
      {letters.map((letter, index) => (
        <s.LetterContent key={index}>
          <s.TextsStyle>
            <s.H2>보낸이 {index + 1}: {letter.senderName}</s.H2>
            <s.P>편지내용: {letter.letterContent}</s.P>
          </s.TextsStyle>
        </s.LetterContent>
      ))}
    </s.LetterWrapper>
  );
};

export default LettersRead;
