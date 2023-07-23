import styled from 'styled-components';

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

const Button = styled.button`
  font-family: 'LeeSeoyun';
  width: 250px;
  height: 35px;
  padding: 10px;
  margin-top: 30px;
  background:rgb(255, 178, 34);
  color: black;
  border-radius: 15px;
  font-size: 17px; 
  border: 1px transparent;
  position: relative;
  z-index: 2;
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

