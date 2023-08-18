import styled from 'styled-components';

const KakaoLoginButton = styled.img`
  position: relative;
  z-index: 2;
  width: 250px;
  height: 40px;
`;

const KakaoWrapper = styled.div`
  position: relative;
  z-index: 2;

`;

const ModalTextsWrapper = styled.div`
position: relative;
display: flex;
font-size: 18px;

line-height: 2;  // 글자 간격
margin-bottom: 10px;
`;

const ModalWrapper = styled.div`
  align-items: center;
  justify-content: center;
  margin-top: 50px;

`;

export const s = {
    KakaoLoginButton,
    KakaoWrapper,
    ModalTextsWrapper,
    ModalWrapper
}