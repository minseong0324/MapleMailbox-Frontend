import styled from 'styled-components';

const Wrapper = styled.div`
z-index: 5;
`;

const BackButton = styled.button`
  position: relative;
  font-family: 'DOSSaemmul';
  width: 60px; // 버튼 너비를 조정
  height: 60px; // 버튼 높이를 조정
  border: 0px transparent; // 테두리 색상을 투명
  background: transparent;
  z-index: 6;
  margin-top: 10%;
  margin-left: 4%;
  margin-bottom: -10%;
  font-size: 30px; 

`;

export const s = {
    Wrapper,
    BackButton
}