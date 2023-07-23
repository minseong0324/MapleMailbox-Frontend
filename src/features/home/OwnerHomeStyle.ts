import styled from 'styled-components';

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
  
 const CenteredWrapper = styled.div`
  position: relative; 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

 const TextsStyle = styled.div`
  font-family: 'LeeSeoyun';
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 0.2;  // 글자 간격
`;

 const ModalTextsStyle = styled.div`
  font-family: 'LeeSeoyun';
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; 
  font-size: 15px;
  height: 10%; 
`;

 const ModalTextsWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

// 캐릭터 이미지 위치 스타일링 (위치 변경 시 이 부분을 수정)
 const CharImage = styled.img`
  position: absolute;
  z-index: 2;
  top: 77%; // top offset from tree image
  right: 25%; // right offset from tree image
`;

 const TreeImageWrapper = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
`;

export const s = {
    Button,
    CenteredWrapper,
    TextsStyle,
    ModalTextsStyle,
    ModalTextsWrapper,
    CharImage,
    TreeImageWrapper
}