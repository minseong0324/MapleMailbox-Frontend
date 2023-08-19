import styled from 'styled-components';

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
  padding: 0px;
  margin: 8px;
`;

const ErrorCenterModalWrapper = styled.div`
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 65px;

`;

const ErrorModalTextsWrapper = styled.div`
position: relative;
display: flex;
font-size: 16px;
line-height: 2;  // 글자 간격
margin-bottom: 10px;
`;

export const s = {
    ButtonWrapper,
    TextsStyle,
    LeafButton,
    TextWrapper,
    Container,
    ErrorCenterModalWrapper,
    ErrorModalTextsWrapper
}