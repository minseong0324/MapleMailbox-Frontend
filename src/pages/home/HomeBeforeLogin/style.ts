import styled from 'styled-components';
import '../../../static/font/font.css';
import button1 from '../../../assets/button/button1.png'; 
import button2 from '../../../assets/button/button2.png'; 
import button3 from '../../../assets/button/button3.png'; 
import button4 from '../../../assets/button/button4.png'; 


const Button = styled.button`
  margin-bottom: 15px;
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
  z-index: 2;
  &:active { // 버튼이 눌렸을 때의 스타일
    background: url(${button1}) no-repeat center center; // 눌렸을 때의 배경 이미지
    background-size: cover; // 이미지가 버튼에 맞게 조절
  }
`;

const ButtonWrapper = styled.div`
  position: relative;
  bottom: -30px;
  font-family: 'DOSSaemmul';
  z-index: 2;
`;


  const CenteredWrapper = styled.div`
  font-family: 'DOSSaemmul';
  position: relative; 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const TextsStyle = styled.div`
  font-family: 'DOSSaemmul';
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 0.2;  // 글자 간격
  padding-top: 30px;
`;

const GinkgoCharImage = styled.img`
  position: absolute;
  z-index: 2;
  top: 77%; // top offset from tree image
  right: 25%; // right offset from tree image
`;

const TreeImageWrapper = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  z-index: 2;
`;

const H3 = styled.h3`
  margin-bottom: 5px;
  font-size: 15px;
`;

const H2 = styled.h2`
`;

const H1 = styled.h1`
  //margin-top: 0px;
  font-family: 'DOSGothic';
  font-size: 28px;
`;

const P = styled.p`
  margin-top: 6px;
  font-size: 14px;
  padding-bottom: 30px;
`;

const Break = styled.br``;

const Form = styled.form`

`;

const TreeImg = styled.img`
 
`;

export const s = {
    Button,
    CenteredWrapper,
    TextsStyle,
    GinkgoCharImage,
    TreeImageWrapper,
    H3,
    H2,
    H1,
    P,
    Form,
    TreeImg,
    Break,
    ButtonWrapper
}