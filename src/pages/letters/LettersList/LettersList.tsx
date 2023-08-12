import React, { useEffect, useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../app/store';
import Modal from '../../../components/Modal/Modal';
import axios from 'axios';
import MapleLeaf from '../../../assets/leafImg/MapleLeaf.png';
import GinkgoLeaf from '../../../assets/leafImg/GinkgoLeaf.png';
import MapleLeafDisabled from '../../../assets/leafImg/MapleLeaf-disabled.png';
import GinkgoLeafDisabled from '../../../assets/leafImg/GinkgoLeaf-disabled.png';
import { s } from './style'
import LettersRead from '../LettersRead/LettersRead';

type Letter = {
  date: string;
  tree: 'Maple Tree' | 'Ginkgo Tree';
};


const userId = localStorage.getItem("userId");

const LettersList: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [letters, setLetters] = useState<Letter[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState<React.ReactNode>(null); // 모달의 내용을 저장할 상태입니다.
  const [nowDate, setNowDate] = useState<number | null>(null); //회원가입 한지 며칠이 되었는가.

  const selectedTreeCharacter = useSelector((state: RootState) => state.selectedTreeCharacter);
  const selectedTree = selectedTreeCharacter ? selectedTreeCharacter.tree : 'Maple Tree';

  const fetchLetters = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/users/${userId}`);
      setLetters(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchNowDate = async () => {
    try {
      // 서버에서 nowDate를 얻어오는 API 호출 로직
      // 예: const response = await axios.get('URL_TO_GET_NOWDATE');
      // setNowDate(response.data.nowDate);
      // 아래는 임시로 nowDate 값을 설정하는 예시 코드입니다.
      const responseNowDate = null; // 이 부분을 실제 API 응답 값으로 교체해야 합니다.
      if (responseNowDate !== null) {
        setNowDate(responseNowDate);
      } else {
        setNowDate(1);
      }
    } catch (error) {
      console.error(error);
      setNowDate(1);
    }
  };

  useEffect(() => {
    fetchNowDate();
    fetchLetters();
  }, []);

  const handleOpenModal = (date: number) => {
    setSelectedDate(date); // 버튼을 클릭하면 선택된 날짜를 설정합니다.
    setModalContent(<LettersRead date={date} onClose={handleCloseModal} />); // 모달의 내용을 설정합니다.
    setIsOpen(true); // 그리고 모달을 엽니다.
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    setSelectedDate(null); // 모달을 닫을 때 선택을 해제합니다.
    setModalContent(null); // 모달의 내용을 초기화합니다.
  };

  return (
    <s.Container>
      <s.TextWrapper>
        <s.TextsStyle>
          매일매일 
        </s.TextsStyle>
        <s.TextsStyle>
          따뜻하게 물들어가는
        </s.TextsStyle>
        <s.TextsStyle>
          나의 마음
        </s.TextsStyle>
      </s.TextWrapper>
    
      <s.ButtonWrapper>
        {Array.from({ length: 30 }).map((_, index) => {
          const date = index + 1;
          return (
            <s.LeafButton
              key={index}
              onClick={() => {
                date > nowDate ? alert(date-Number(nowDate)+"일 뒤에 열람할 수 있습니다.") : handleOpenModal(date);
              }}
              leafImage={selectedTree === 'Maple Tree' ? 
              (date > nowDate ? MapleLeafDisabled : MapleLeaf ) :
              (date > nowDate ? GinkgoLeafDisabled : GinkgoLeaf ) }
            >
              {date}일
            </s.LeafButton>
          );
        })}
      </s.ButtonWrapper>

      <Modal isOpen={isOpen} onClose={handleCloseModal}>
        {modalContent}
      </Modal>
    </s.Container>
  );
};

export default LettersList;