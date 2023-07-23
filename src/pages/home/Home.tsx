import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeTreeState, incrementLetterCount, resetLetterCount, sendLetter, resetLetter } from '../../app/autumnTree/autumnTreeSlice';
import { RootState } from '../../app/store';
import Menu from '../../components/Menu';
import Modal from '../../components/Modal';
import GinkgoTreeImage from '../../assets/treeImg/GinkgoMainTree.png'
import { s } from './style'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // axios를 import 합니다.
import "./Home.css";
import "../../static/font/font.css";
import GinkgoCharImg from '../../assets/charImg/ginkgo-small-big2.png';




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
    <s.CenteredWrapper>
    <s.TextsStyle>
      <s.H3>가을을 기다리며,</s.H3>
      <s.H1>다른이의 단풍나무</s.H1>
      <br/>
      <s.P>당신의 따뜻한 마음으로 나무를 물들여봐요.</s.P>
    </s.TextsStyle>
    
    <s.TreeImageWrapper>
      <s.TreeImg src={getTreeImage(treeState)} alt="Autumn Tree"/>
      <s.GinkgoCharImage src={GinkgoCharImg} alt="Ginkgo Image" />
    </s.TreeImageWrapper>
    
        <br/>
        <s.Button onClick={() => setSendModalOpen(true)}>단풍잎 물들이기</s.Button>
        <br/> 
        <s.Button onClick={handleShareLink}>내 나무 보러가기</s.Button>

        <Modal isOpen={isSendModalOpen} onClose={() => setSendModalOpen(false)}>
          <s.H2>단풍잎 물들이기</s.H2>
          <s.Form onSubmit={handleSendLetter}>
            <s.NameInput
              type="text"
              placeholder="이름을 입력하세요."
              value={senderName}
              onChange={writeName}
              //onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setSenderName(e.target.value)}
            />
            <s.LetterArea
              placeholder="전하고 싶은 말을 쓰세요."
              value={letterContent}
              onChange={writeLetter}
              //onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setLetterContent(e.target.value)}
            />
            <s.Button 
            type="submit"
            >물들이기</s.Button>
          </s.Form>
        </Modal>


        <Modal isOpen={isServiceModalOpen} onClose={() => setServiceModalOpen(false)}>
          <s.H3>가을을 기다리며, 단풍우편함</s.H3>
          <s.P>
          하루에 5개 이상의 편지를 받으면 오늘의 편지를 열람할 수 있어요.
          <br/>
          어쩌구 저쩌구
          </s.P>
        </Modal>
      </s.CenteredWrapper>
    </>
  );

}

export default Home;