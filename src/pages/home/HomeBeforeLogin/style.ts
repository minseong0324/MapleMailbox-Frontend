import styled from 'styled-components';
import button1 from '../../../assets/button/button1.png'; 
import button2 from '../../../assets/button/button2.png'; 
import button3 from '../../../assets/button/button3.png'; 
import button4 from '../../../assets/button/button4.png'; 
import { isMobile } from 'react-device-detect';


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


const mobileStyles = `
  /* 모바일 스타일 */

  /* 모바일 모든 크기 가로모드용 스타일 */
  @media screen and (max-width: 820px) and (orientation: landscape) {
    height: 320px;
  }

  /* 큰 태블릿 세로모드용 스타일 */
  @media screen and (min-width: 821px) and (orientation: portrait) {
    height: 1180px;
  }

  /* 큰 태블릿 제외 air, air mini 태블릿 모든 크기 세로모드용 스타일 */
  @media screen and (max-width: 820px) and (orientation: portrait) {
    height: 950px;
  }

  /* 모바일 세로모드용 스타일 */
  @media screen and (max-width: 599px) and (orientation: portrait) {
    height: 820px;
  }
`;

export const CenteredWrapper = styled.div`
  font-family: 'DOSSaemmul';
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 820px;

  ${isMobile ? mobileStyles : ''}
`;

const TextsStyle = styled.div`
  font-family: 'DOSSaemmul';
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 0.2;  // 글자 간격
  padding-top: 50px;
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
  //font-size: 16px;
`;

const H2 = styled.h2`
`;

const H1 = styled.h1`
  //margin-top: 0px;
  font-family: 'DOSGothic';
  font-size: 28px;
  //font-size: 33px;
  padding-bottom: 7px;
  color: #111;
`;

const P = styled.p`
  margin-top: 6px;
  font-size: 14px;
  //font-size: 16px;
  padding-bottom: 30px;
  font-family: 'DOSSaemmul';
`;

const Break = styled.br``;

const Form = styled.form`

`;

const TreeImg = styled.img`
 
`;

const PolicyTextsWrapper = styled.div`
  position: fixed;
  bottom: -20px;  // 화면 하단에 고정
  width: 100%;  // 화면 너비만큼 차지
  font-family: 'DOSGothic';
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 0.2;
  //padding-top: 100px; // padding 추가
  z-index: 2;
  // 반응형 디자인 (예: 미디어 쿼리를 사용하여 화면 크기가 768px 이상일 때 적용되는 스타일)
  @media (min-width: 768px) {
    bottom: -5%;  // 화면 하단에서 조금 더 아래로
    width: auto; // 너비를 자동으로 설정
  }
`;

const PolicyTextsStyle = styled.p`
  margin-top: 6px;
  font-size: 8px;
  //font-size: 16px;
  padding-bottom: 10px;
`;

const PolicyStyledLink = styled.a`
  color: #333;  // 색상 설정
  text-decoration: underline;  // 밑줄 추가

  &:hover {
    color: darkblue;  // 마우스 오버 시 색상 변경
  }
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
    ButtonWrapper,
    PolicyTextsStyle,
    PolicyTextsWrapper,
    PolicyStyledLink
}