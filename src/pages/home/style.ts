import styled from 'styled-components';

// 함수 밖으로 스타일링을 빼주었습니다. (리렌더링 문제 해결)
const CenteredWrapper = styled.div`
position: relative; 
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 100vh;
`;

const Button = styled.button`
font-family: 'LeeSeoyun';
width: 200px; // 버튼 너비를 조정
height: 35px; // 버튼 높이를 조정
padding: 10px; // 내부 패딩을 조정
background:rgb(255, 178, 34);
color: black;
border-radius: 15px;
font-size: 17px; 
border: 1px transparent; // 테두리 색상을 투명
position: relative;
z-index: 2;
&:active { // 버튼이 눌렸을 때의 스타일
    background: rgb(255, 157, 0); // 눌렸을 때의 배경색을 변경
}
`;

const TextsStyle = styled.div`
font-family: 'LeeSeoyun';
display: flex;
flex-direction: column;
align-items: center;
line-height: 0.2;  // 글자 간격
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

const NameInput = styled.input`
font-family: "LeeSeoyun";
width: 200px;
height: 30px;
margin-bottom: 20px;
`;

const LetterArea = styled.textarea`
font-family: "LeeSeoyun";
width: 200px;
height: 200px;
overflow: auto;
margin-bottom: 20px;
resize: none;
`;

const H3 = styled.h3`

`;

const H2 = styled.h2`

`;

const H1 = styled.h1`

`;

const P = styled.p`

`;

const Form = styled.form`

`;

const TreeImg = styled.img`

`;


export const s = {
    CenteredWrapper,
    Button,
    TextsStyle,
    GinkgoCharImage,
    TreeImageWrapper,
    NameInput,
    LetterArea,
    H3,
    H2,
    H1,
    P,
    Form,
    TreeImg
}