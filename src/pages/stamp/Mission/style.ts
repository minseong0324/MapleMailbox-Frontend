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

type StampButtonProps = {
    stampImage: string;
};

const StampButton = styled.button<StampButtonProps>`
  position: relative;
  background: url(${props => props.stampImage}) no-repeat center;
  border: none;
  cursor: pointer;
  width: 90px;
  height: 90px;
  z-index: 2;
  padding: 0px;
  margin: 4px;
`;

export const s = {
    ButtonWrapper,
    TextsStyle,
    StampButton,
    TextWrapper,
    Container,
    
}