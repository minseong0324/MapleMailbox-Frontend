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

  // 위로의 편지를 가져오는 함수입니다.
  const fetchEncourageLetters = useCallback(async () => {
    try {
      const randNum = Math.floor(Math.random() * 11); // 0부터 10 사이의 랜덤한 숫자를 생성합니다. 
      const response = await axios.get(`/api/encourageLetters/${randNum}`); // 서버에서 랜덤한 위로 편지를 가져옵니다.
      setLetters(response.data); // 가져온 편지 정보를 상태에 저장합니다.
    } catch (error) {
      console.error(error); // 에러가 발생하면 콘솔에 에러를 출력합니다.
    }
  }, [date]);

  // 컴포넌트가 마운트되거나 date가 변경될 때 서버에서 편지 정보를 가져옵니다.
  useEffect(() => {
    fetchLetters();
    // 편지가 5개 미만이라면, 랜덤한 위로의 편지 하나를 가져옵니다.
    if(letters.length < 5) {
      fetchEncourageLetters();
    }
  }, [fetchLetters]);

  //if(letters.length >= 0) { // 테스트용
  if(letters.length >= 5) {
    return (
      <s.LetterWrapper>
        {letters.map((letter, index) => (
          <s.LetterContent key={index}>
            <s.TextsStyle>
              <s.H2>보낸이 {index + 1}: {letter.senderName}</s.H2>
              <s.P>편지내용: {letter.letterContent}</s.P>
            </s.TextsStyle>
          </s.LetterContent>
        ))}

        <s.BackButton onClick={onClose}>닫기</s.BackButton>

      </s.LetterWrapper>
    );
  } else {
    return (
      <s.LetterWrapper>

            <s.TextsStyle>
              <s.H3>보낸이 : 은행이</s.H3>
              <s.P>편지 내용: 안녕! 나 은행이. 
                지금쯤 편지를 많이 모았을까?
                나도 네게 보탬이 되고 싶어 한장 써서 보내.
                편지 많이 못받았다고 우울해하지마!
                때론 5명의 친구보다 1명의 친구가 더 소중하게 느껴지기도 해.
              </s.P>
            </s.TextsStyle>

            <s.TextsStyle>
              <s.H3>
              받은 편지의 수가 5개 미만이에요. </s.H3>
              <s.P>
              편지가 5개 이상 모여야 오늘의 편지를 열람할 수 있어요. </s.P>
              <s.tips> 
              Q. 편지를 5개 모으는 방법 외에는 편지를 열람할 수 있는 방법이 없나요? </s.tips>
              <s.tips> 
              A. 마지막 날이 되면 받은 편지를 모두 열람할 수 있어요. </s.tips>
            </s.TextsStyle>

            <s.BackButton onClick={onClose}>닫기</s.BackButton>

      </s.LetterWrapper>
    )
  }
};

export default LettersRead;
