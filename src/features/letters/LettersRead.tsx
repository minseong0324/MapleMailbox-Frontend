import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

// 뒤로가기 버튼을 스타일링합니다.
const BackButton = styled.button`
  font-family: 'LeeSeoyun';
  background-color: transparent;
  border: none;
  font-size: 15px; 
  color: black;
  text-decoration: none;
  cursor: pointer;
`;

const TextsStyle = styled.div`
font-family: 'LeeSeoyun';
display: flex;
flex-direction: column;
//align-items: center;
//line-height: 0.2;  // 글자 간격
font-size: 20px; 
`;


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
  const fetchLetters = async () => {
    try {
      const response = await axios.get(`/api/letters/${date}`); // 서버에서 편지 정보를 가져옵니다.
      setLetters(response.data); // 가져온 편지 정보를 상태에 저장합니다.
    } catch (error) {
      console.error(error); // 에러가 발생하면 콘솔에 에러를 출력합니다.
    }
  };

  // 컴포넌트가 마운트되거나 date가 변경될 때 서버에서 편지 정보를 가져옵니다.
  useEffect(() => {
    fetchLetters();
  }, [date]);

  return (
    <div>
      <BackButton onClick={onClose}>뒤로 가기</BackButton>
      {letters.map((letter, index) => (
        <div key={index}>
          <TextsStyle>
            <h2>보낸이 {index + 1}: {letter.senderName}</h2>
            <p>편지내용: {letter.letterContent}</p>
          </TextsStyle>
        </div>
      ))}
    </div>
  );
};

export default LettersRead;
