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

const LetterWrapper = styled.div`

`;

const LetterContent = styled.div`

`;

const H2 = styled.h2`

`;

const P = styled.p`

`;

export const s = {
    BackButton,
    TextsStyle,
    LetterWrapper,
    LetterContent,
    H2,
    P
}