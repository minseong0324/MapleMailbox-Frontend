import styled from 'styled-components';
import buttonMidium1 from '../../../assets/button/button-midium-1.png'; 
import buttonMidium2 from '../../../assets/button/button-midium-2.png'; 

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

const SenderNameText = styled.span`
font-size: 18px;
`;

const H3 = styled.h3`
margin-top:10px;
margin-bottom:10px;
`;

const LetterContentText = styled.span`
margin-top:5px;
margin-bottom:10px;
font-size: 13px;
`;

const tips = styled.p`
margin-top:5px;
margin-bottom:10px;
font-size:15px;
color: gray;
`;

const ErrorCenterModalWrapper = styled.div` //에러 모달창 wrapper
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 50px;
`;

const ErrorModalTextsWrapper1 = styled.div` // 한줄짜리 에러창일 때 사용
position: relative;
display: flex;
font-size: 18px;
align-items: center;
  justify-content: center;
line-height: 2;  // 글자 간격
margin-bottom: 10px;
`;

const ErrorModalTextsWrapper2 = styled.div` //두줄짜리 에러창일 때 사용
position: relative;
display: flex;
font-size: 18px;
align-items: center;
  justify-content: center;
line-height: 2;  // 글자 간격
margin-bottom: -10px;
`;

const ModalButton = styled.button`
  margin-top: 45px;
  font-family: 'DOSSaemmul';
  width: 170px; // 버튼 너비를 조정
  height: 40px; // 버튼 높이를 조정
  padding: 10px; // 내부 패딩을 조정
  background: url(${buttonMidium1}) no-repeat center center; // 이미지를 배경으로 사용
  background-size: cover; // 이미지가 버튼에 맞게 조절
  color: black;
  border-radius: 15px;
  font-size: 17px; 
  border: 0px transparent; // 테두리 색상을 투명
  position: relative;
  z-index: 2;
  &:active { // 버튼이 눌렸을 때의 스타일
    background: url(${buttonMidium2}) no-repeat center center; // 눌렸을 때의 배경 이미지
    background-size: cover; // 이미지가 버튼에 맞게 조절
  }
`;

export const s = {
    BackButton,
    TextsStyle,
    LetterWrapper,
    LetterContent,
    SenderNameText, H3, tips,
    LetterContentText,
    ErrorCenterModalWrapper,
    ErrorModalTextsWrapper1,
    ErrorModalTextsWrapper2,
    ModalButton
}