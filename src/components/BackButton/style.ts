import styled from 'styled-components';
import Arrow from '../../assets/arrow/arrow2.png';


const BackWrapper = styled.div`
  font-family: 'NanumBarunpenB';
  position: fixed;
  top: 10px;
  left: 20px;
  z-index: 5;
  max-width: 820px;
  max-height: 1180px;
  margin: auto;
  @media (min-width: 821px) {
    left: calc(50% - 410px + 10px);
  }
  @media (min-height: 1181px) {
    top: calc(50% - 590px + 10px);
  }
`;


const Wrapper = styled.div`
  
`;

const BackButton = styled.button`
  position: relative;
  background: url(${Arrow}) no-repeat center;
  border: none;
  cursor: pointer;
  width: 20px;
  height: 30px;
  z-index: 5;
`;

export const s ={
  BackWrapper,
  Wrapper,
  BackButton
}

/*
const Wrapper = styled.div`
z-index: 5;
`;

const BackButton = styled.button`
  position: relative;
  font-family: 'DOSSaemmul';
  width: 10px; // 버튼 너비를 조정
  height: 30px; // 버튼 높이를 조정
  border: 0px transparent; // 테두리 색상을 투명
  background-image: url(${Arrow});
  background-size: cover;
  background-color: transparent;
  z-index: 6;
  margin-top: 10%;
  margin-left: 4%;
  margin-bottom: -10%;

`;

export const s = {
    Wrapper,
    BackButton
}

/*
import styled from 'styled-components';
import Arrow from '../../assets/arrow/arrow2.png';

const Wrapper = styled.div`
z-index: 5;
padding-top: 2.5em;
`;

const BackButton = styled.button`
  position: fixed;
  font-family: 'DOSSaemmul';
  width: 20px; // 버튼 너비를 조정
  height: 30px; // 버튼 높이를 조정
  border: 0px transparent; // 테두리 색상을 투명
  background-image: url(${Arrow});
  background-size: cover;
  background-color: transparent;
  z-index: 5;
  top: 2em;
  left: 10px;
  @media (min-width: 821px) {
    left: calc(50% - 410px + 30px);
  }
  @media (min-height: 1181px) {
    top: calc(50% - 590px + 0px);
  }
`;

export const s = {
    Wrapper,
    BackButton
*/