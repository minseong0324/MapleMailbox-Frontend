import styled from 'styled-components';
import button1 from '../../assets/button/button1.png'; 
import button4 from '../../assets/button/button4.png'; 
import CheckImage from '../../assets/check/check-big1.png';
import modalButton from '../../assets/button/button-midium-1.png'; 
import modalButtonAfterClick from '../../assets/button/button-midium-2.png'; 

const Wrapper = styled.div`
z-index: 5;
`;

const Button = styled.button`
  font-family: 'DOSSaemmul';
  width: 250px; // 버튼 너비를 조정
  height: 40px; // 버튼 높이를 조정
  padding: 10px; // 내부 패딩을 조정
  background: url(${button4}) no-repeat center center; // 이미지를 배경으로 사용
  background-size: cover; // 이미지가 버튼에 맞게 조절
  color: black;
  border-radius: 15px;
  font-size: 17px; 
  border: 0px transparent; // 테두리 색상을 투명
  position: relative;
  z-index: 5;
  &:active { // 버튼이 눌렸을 때의 스타일
    background: url(${button1}) no-repeat center center; // 눌렸을 때의 배경 이미지
    background-size: cover; // 이미지가 버튼에 맞게 조절
  }
  margin-top: 50px;
`;

const CenteredWrapper = styled.div`
  position: relative; 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 4;

  @media (min-width: 570px) { // 디바이스의 너비가 570px 이상일 때 적용될 스타일
    align-items: center;
    justify-content: center;

  }
`;


const TitleTextStyle = styled.div`
  position: relative; 
font-family: 'DOSGothic';
display: flex;
flex-direction: column;
align-items: center;
line-height: 5;
font-size: 25px;
//margin-top: -10%;
`;




const TextsStyle = styled.div`
  font-family: 'DOSSaemmul';
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 5;
  font-size: 15px;
`;

const ImageButton = styled.button<ImageButtonProps>`
cursor: pointer;
border: ${props => props.selected ? '2px dotted rgba(255, 187, 0, 0.5)' : 'none'};
border-radius: 50px; // 이 속성을 통해 모서리를 둥글게 만듭니다. 
background-image: url(${props => props.src});
background-size: cover;
background-color: transparent;
z-index: 5;
`;

type ImageButtonProps = {
    src: string;
    alt: string;
    selected: boolean;
};

const SelectWrapper = styled.div`
  width: 300px;
`;

const SelectContainer = styled.div`
margin-top: 70px;
position: relative; 
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
z-index: 4;
margin-bottom: 365px;

@media (min-width: 360px) { // 디바이스의 너비가 570px 이상일 때 적용될 스타일
    margin-top: 20px;
    align-items: center;
    justify-content: center;
    margin-bottom: 85px;
}
@media (min-width: 389px) { // 디바이스의 너비가 570px 이상일 때 적용될 스타일
    margin-top: 20px;
    align-items: center;
    justify-content: center;
    margin-bottom: 105px;
}
@media (min-width: 429px) { // 디바이스의 너비가 570px 이상일 때 적용될 스타일
    margin-top: 20px;
    align-items: center;
    justify-content: center;
    margin-bottom: 185px;
}
@media (min-width: 599px) { // 디바이스의 너비가 570px 이상일 때 적용될 스타일
    margin-top: 20px;
    align-items: center;
    justify-content: center;
    margin-bottom: 252px;
}
@media (min-width: 799px) { // 디바이스의 너비가 570px 이상일 때 적용될 스타일
    margin-top: 20px;
    align-items: center;
    justify-content: center;
    margin-bottom: 260px;
}
`;

const H2 = styled.h2`
`;

const P = styled.p`
  margin-top: 6px;
  font-size: 14px;
  padding-bottom: 30px;
`;

const Break = styled.br``;

const SelectClickEvent = styled.div<{ isSelected?: boolean }>`
    position: relative; 

    &::after {
        content: ${props => props.isSelected ? `url(${CheckImage})` : 'none'};
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 20;  // 높은 z-index를 주어 상단에 나타나게 합니다.
    }
`;

const ModalWrapper = styled.div`
  align-items: center;
  justify-content: center;
  margin-top: 50px;

`;
const CenterModalWrapper = styled.div`
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 60px;

`;

const ModalTextsWrapper = styled.div`
position: relative;
display: flex;
font-size: 16px;

line-height: 2;  // 글자 간격
margin-bottom: 10px;
`;

const ModalButton = styled.button`
  font-family: 'DOSSaemmul';
  width: 170px; // 버튼 너비를 조정
  height: 40px; // 버튼 높이를 조정
  padding: 10px; // 내부 패딩을 조정
  background: url(${modalButton}) no-repeat center center; // 이미지를 배경으로 사용
  background-size: cover; // 이미지가 버튼에 맞게 조절
  color: black;
  border-radius: 15px;
  font-size: 17px; 
  border: 0px transparent; // 테두리 색상을 투명
  position: relative;
  z-index: 5;
  &:active { // 버튼이 눌렸을 때의 스타일
    background: url(${modalButtonAfterClick}) no-repeat center center; // 눌렸을 때의 배경 이미지
    background-size: cover; // 이미지가 버튼에 맞게 조절
  }
  margin-top: 50px;
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

export const s = {
    CenteredWrapper,
    TextsStyle,
    Button,
    ImageButton,
    SelectWrapper,
    H2,
    P,
    Break,
    SelectClickEvent,
    TitleTextStyle,
    Wrapper,
    ModalWrapper,
    CenterModalWrapper,
    ModalTextsWrapper,
    ModalButton,
    ErrorCenterModalWrapper,
    ErrorModalTextsWrapper1,
    ErrorModalTextsWrapper2,
    SelectContainer
}

