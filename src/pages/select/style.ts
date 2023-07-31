import styled from 'styled-components';
import button1 from '../../assets/button/button1.png'; 
import button2 from '../../assets/button/button2.png'; 
import button3 from '../../assets/button/button3.png'; 
import button4 from '../../assets/button/button4.png'; 


const Button = styled.button`
  font-family: 'LeeSeoyun';
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
  z-index: 2;
  &:active { // 버튼이 눌렸을 때의 스타일
    background: url(${button1}) no-repeat center center; // 눌렸을 때의 배경 이미지
    background-size: cover; // 이미지가 버튼에 맞게 조절
  }
`;

const CenteredWrapper = styled.div`
  position: relative; 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  z-index: 4;
`;

const TextsStyle = styled.div`
  font-family: 'LeeSeoyun';
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 5;
  font-size: 20px;
`;

const ImageButton = styled.button<ImageButtonProps>`
cursor: pointer;
border: ${props => props.selected ? '2px solid rgba(255, 187, 0, 0.5)' : 'none'};
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

export const s = {
    CenteredWrapper,
    TextsStyle,
    Button,
    ImageButton
}

