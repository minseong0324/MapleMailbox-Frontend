import styled from 'styled-components';
import button1 from '../../assets/button/button1.png'; 
import button4 from '../../assets/button/button4.png'; 


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
margin-top: -10%;
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
border-radius: 15px; // 이 속성을 통해 모서리를 둥글게 만듭니다. 
background-image: url(${props => props.src});
background-size: cover;
background-color: transparent;
`;

type ImageButtonProps = {
    src: string;
    alt: string;
    selected: boolean;
};

const SelectWrapper = styled.div`
  width: 300px;
`;

const H2 = styled.h2`
`;

const P = styled.p`
  margin-top: 6px;
  font-size: 14px;
  padding-bottom: 30px;
`;

const Break = styled.br``;

const SelectClickEvent = styled.div`
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
    Wrapper
}

