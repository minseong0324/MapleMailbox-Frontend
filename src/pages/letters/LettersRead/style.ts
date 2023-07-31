import styled from 'styled-components';

// 뒤로가기 버튼을 스타일링합니다.
const BackButton = styled.button`
  font-family: 'DOSSaemmul';
  background-color: #FFE5CC;
  border:2px; 
  border-style:hidden;
  border-radius: 30%;
  font-size: 15px; 
  width: 45px;
  height: 25px;
  color: black;
  text-decoration: none;
  cursor: pointer;
  float: right;
`;

const TextsStyle = styled.div`
font-family: 'DOSSaemmul';
display: flex;
flex-direction: column;
//align-items: center;
//line-height: 0.2;  // 글자 간격
font-size: 20px; 
border:2px; 
border-style:hidden;
border-radius: 5%;
background-color: #FFE5CC;
padding: 10px;
margin-top:5px;
margin-bottom:10px;
`;

const LetterWrapper = styled.div`

`;

const LetterContent = styled.div`

`;

const H2 = styled.h2`

`;

const H3 = styled.h3`
margin-top:10px;
margin-bottom:10px;
`;

const P = styled.p`
margin-top:5px;
margin-bottom:10px;
`;

const tips = styled.p`
margin-top:5px;
margin-bottom:10px;
font-size:15px;
color: gray;
`;

export const s = {
    BackButton,
    TextsStyle,
    LetterWrapper,
    LetterContent,
    H2, H3, tips,
    P
}