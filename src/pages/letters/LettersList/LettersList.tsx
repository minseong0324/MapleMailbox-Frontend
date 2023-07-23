import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../app/store';
import Modal from '../../../components/Modal/Modal';
import axios from 'axios';
import MapleLeaf from '../../../assets/leafImg/MapleLeaf.png';
import GinkgoLeaf from '../../../assets/leafImg/GinkgoLeaf.png';
import { s } from './style'
import LettersRead from '../LettersRead/LettersRead';

type Letter = {
  date: string;
  content: string;
  tree: 'Maple Tree' | 'Ginkgo Tree';
};

const LettersList: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [letters, setLetters] = useState<Letter[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState<React.ReactNode>(null); // 모달의 내용을 저장할 상태입니다.

  const selectedTreeCharacter = useSelector((state: RootState) => state.selectedTreeCharacter);
  const selectedTree = selectedTreeCharacter ? selectedTreeCharacter.tree : 'Maple Tree';

  const fetchLetters = async () => {
    try {
      const response = await axios.get('/api/letters');
      setLetters(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
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
    <>
      <s.TextsStyle>
        매일매일 
      </s.TextsStyle>
      <s.TextsStyle>
        따뜻하게 물들어가는
      </s.TextsStyle>
      <s.TextsStyle>
        나의 마음
      </s.TextsStyle>
    
      <s.ButtonWrapper>
        {Array.from({ length: 30 }).map((_, index) => {
          const date = index + 1;
          return (
            <s.LeafButton
              key={index}
              onClick={() => {
                handleOpenModal(date);
              }}
              leafImage={selectedTree === 'Maple Tree' ? MapleLeaf : GinkgoLeaf}
            >
              {date}일
            </s.LeafButton>
          );
        })}
      </s.ButtonWrapper>
      <Modal isOpen={isOpen} onClose={handleCloseModal}>
        {modalContent}
        <s.TextsStyle>
            도착한 편지
        </s.TextsStyle>
      </Modal>
    </>
  );
};

export default LettersList;