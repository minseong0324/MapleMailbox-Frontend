import React, { useEffect, useState, useCallback } from 'react';
import axios, {AxiosError} from 'axios';
import { s } from './style'

// 편지 정보를 저장할 타입을 정의합니다.
type Letter = {
  senderName: string;
  letterContent: string;
};

type Props = {
  selectedDate: number; // 선택된 날짜를 props로 받습니다.
  onClose: () => void; // 뒤로가기 버튼을 클릭했을 때 호출될 함수를 props로 받습니다.
};

const userId = localStorage.getItem("userId");
const accessToken = localStorage.getItem("accessToken");

const LettersRead: React.FC<Props> = ({ selectedDate, onClose }) => {
  const [letters, setLetters] = useState<Letter[]>([]); // 선택된 날짜의 편지들을 저장할 상태입니다.

  // 선택된 날짜의 편지들을 가져오는 함수입니다.
  const fetchLetters = useCallback(async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/users/${userId}/letters/${selectedDate}`, {
        headers: {
          'authorization': `${accessToken}`
        }
      }); // 서버에서 편지 정보를 가져옵니다.
      if(response.status===200) {
        setLetters(response.data); // 가져온 편지 정보를 상태에 저장합니다.
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
  }, [selectedDate]);

  useEffect(() => {
    fetchLetters();
  }, [fetchLetters]);
  
  
  //if(letters.length >= 0) { // 테스트용
  //if(letters.length >= 5) { // 테스트용
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

      </s.LetterWrapper>
    );
  //} 
  /*
  else { //편지 5개 이상 못받은 경우이긴 한데, 서버에서 전부 처리해서 알아서 랜덤 편지를 보내줄 거기 때문에 필요 x, 테스트용 o
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
  */
};


export default LettersRead;
