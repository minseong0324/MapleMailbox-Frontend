import styled from 'styled-components';
import buttonMidium1 from '../../../assets/button/button-midium-1.png'; 
import buttonMidium2 from '../../../assets/button/button-midium-2.png'; 

const Container = styled.div`
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const TextWrapper = styled.div`
padding-top: 20px;
padding-bottom: 10px;
`;


const TextsStyle = styled.div`
font-family: 'DOSSaemmul';
display: flex;
flex-direction: column;
//align-items: center;
//line-height: 0.2;  // 글자 간격
font-size: 17px; 
text-align: center;
`;

type LeafButtonProps = {
    leafImage: string;
};

const LeafButton = styled.button<LeafButtonProps>`
  font-family: 'DOSSaemmul';
  font-size: 3px;
  color: rgb(0, 0, 0);
  position: relative;
  background: url(${props => props.leafImage}) no-repeat center;
  border: none;
  cursor: pointer;
  width: 45px;
  height: 45px;
  z-index: 2;
  padding: 15px;
  margin: 10px;
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
    ButtonWrapper,
    TextsStyle,
    LeafButton,
    TextWrapper,
    Container,
    ErrorCenterModalWrapper,
    ErrorModalTextsWrapper1,
    ErrorModalTextsWrapper2,
    ModalButton
}