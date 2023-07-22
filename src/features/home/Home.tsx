import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeTreeState, incrementLetterCount, resetLetterCount, sendLetter, resetLetter } from '../autumnTree/autumnTreeSlice';
import { RootState } from '../../app/store';
import Menu from '../../components/Menu';
import Modal from '../../components/Modal';
import GinkgoTreeImage from '../../assets/treeImg/GinkgoMainTree.png'
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // axios를 import 합니다.
import "./Home.css";
import "../../static/font/font.css";
import GinkgoCharImg from '../../assets/charImg/ginkgo-small-big2.png';

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


function Home() {
  const dispatch = useDispatch();

  // Redux 스토어에서 treeState와 letterCount를 가져옴
  const treeState = useSelector((state: RootState) => state.autumnTree.treeState);
  const letterCount = useSelector((state: RootState) => state.autumnTree.letterCount);

  // 컴포넌트 로컬 상태 관리를 위한 useState 훅
  const [isSendModalOpen, setSendModalOpen] = useState(false);  // "보내기" 모달의 보임/안보임을 관리하는 상태
  const [senderName, setSenderName] = useState('');  // 보내는 사람 이름을 관리하는 상태
  const [letterContent, setLetterContent] = useState('');  // 편지 내용을 관리하는 상태
  const [isMenuOpen, setMenuOpen] = useState(true);  // 메뉴의 보임/안보임을 관리하는 상태
  const [isServiceModalOpen, setServiceModalOpen] = useState(false);  // "서비스 설명" 모달의 보임/안보임을 관리하는 상태

  const getNextTreeState = (currentTreeState: string) => {
    // 이 함수에서는 API 연결이 필요하다. 다음 트리 상태를 API로부터 가져와야 함.
    return currentTreeState;
  };

  const getTreeImage = (currentTreeState: string) => {
    // 이 함수에서는 API 연결이 필요하다. 트리 이미지를 API로부터 가져와야 함.
    return GinkgoTreeImage;
  };

  const handleTreeStateChange = () => {
    // 트리 상태 변경 처리 함수
    // letterCount가 5 미만일 때 트리 상태를 변경하고, 편지 수를 증가시킴
    if (letterCount < 5) {
      const nextTreeState = getNextTreeState(treeState);
      dispatch(changeTreeState(nextTreeState));
      dispatch(incrementLetterCount());
    }
  };

  // 이벤트 핸들러를 FormEvent로 변경하였습니다.
  const handleSendLetter = async (event: React.FormEvent) => {
     // 백엔드로 보낼 데이터를 정의합니다.
     const letterData = {
      senderName,
      letterContent,
    };

    try {
      // 백엔드로 편지 데이터를 보냅니다.
      // 이 부분에서는 실제 백엔드 API 주소와 HTTP 메서드를 사용해야 합니다.
      // 아래 코드는 예시로 작성된 것이며, 실제 작동하지 않습니다.
      await axios.post('https://your-backend-api.com/letters', letterData);

      // 백엔드로 데이터를 성공적으로 보냈다면, Redux 상태를 업데이트합니다.
      dispatch(incrementLetterCount());
      dispatch(sendLetter({ senderName, letterContent }));

      // 입력 필드를 초기화합니다.
      setSenderName('');
      setLetterContent('');

      // 모달을 닫습니다.
      setSendModalOpen(false);
    } catch (error) {
      // 에러 처리
      console.error('Failed to send letter:', error);
    }
  };

  // senderName 에 이름을 받습니다.
  const writeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSenderName(e.target.value)
  }

  // LetterContent 에 편지 내용을 받습니다.
  const writeLetter = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setLetterContent(e.target.value)
  }

  const navigate = useNavigate();

  const handleShareLink = () => {
    // 링크 공유 처리 함수
    // "/OwnerHome"으로 이동
    navigate('/OwnerHome');
  };

  const handleServiceDescription = () => {
    // 서비스 설명 모달 열기 처리 함수
    setServiceModalOpen(true);
  };

  return (
    <>
    {isMenuOpen && <Menu onLogout={() => {}} onServiceDescription={handleServiceDescription} />}    
    <CenteredWrapper>
    <TextsStyle>
      <h3>가을을 기다리며,</h3>
      <h1>다른이의 단풍나무</h1>
      <br/>
      <p>당신의 따뜻한 마음으로 나무를 물들여봐요.</p>
    </TextsStyle>
    
    <TreeImageWrapper>
      <img className= "treeimg" src={getTreeImage(treeState)} alt="Autumn Tree"/>
      <GinkgoCharImage src={GinkgoCharImg} alt="Ginkgo Image" />
    </TreeImageWrapper>
    
        <br/>
        <Button onClick={() => setSendModalOpen(true)}>단풍잎 물들이기</Button>
        <br/> 
        <Button onClick={handleShareLink}>내 나무 보러가기</Button>

        <Modal isOpen={isSendModalOpen} onClose={() => setSendModalOpen(false)}>
          <h2>단풍잎 물들이기</h2>
          <form onSubmit={handleSendLetter}>
            <NameInput
              type="text"
              placeholder="이름을 입력하세요."
              value={senderName}
              onChange={writeName}
              //onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setSenderName(e.target.value)}
            />
            <LetterArea
              placeholder="전하고 싶은 말을 쓰세요."
              value={letterContent}
              onChange={writeLetter}
              //onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setLetterContent(e.target.value)}
            />
            <Button 
            type="submit"
            >물들이기</Button>
          </form>
        </Modal>


        <Modal isOpen={isServiceModalOpen} onClose={() => setServiceModalOpen(false)}>
          <h3>가을을 기다리며, 단풍우편함</h3>
          <p>
          하루에 5개 이상의 편지를 받으면 오늘의 편지를 열람할 수 있어요.
          <br/>
          어쩌구 저쩌구
          </p>
        </Modal>
      </CenteredWrapper>
    </>
  );

}

export default Home;