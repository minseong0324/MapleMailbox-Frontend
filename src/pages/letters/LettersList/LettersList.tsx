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
  content: string;
  tree: 'Maple Tree' | 'Ginkgo Tree';
};

type Date = {
  startDate: number;  // 편지를 처음 받은 날짜
  endDate: number;  // 편지를 마지막으로 받을 날짜
  nowDate: number;  // 오늘이 몇일째인지
};

const LettersList: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [letters, setLetters] = useState<Letter[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState<React.ReactNode>(null); // 모달의 내용을 저장할 상태입니다.
  const [date, setDate] = useState<Date[]>([]); // 날짜들을 저장할 상태입니다.

  const selectedTreeCharacter = useSelector((state: RootState) => state.selectedTreeCharacter);
  const selectedTree = selectedTreeCharacter ? selectedTreeCharacter.tree : 'Maple Tree';

  const fetchLetters = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/users/${email}');
      setLetters(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchDate = useCallback(async () => {
    try {
      const response = await axios.get(`/api/date`); // 서버에서 날짜 정보를 가져옵니다.
      setDate(response.data); // 가져온 날짜 정보를 상태에 저장합니다.
    } catch (error) {
      console.error(error); // 에러가 발생하면 콘솔에 에러를 출력합니다.
    }
  }, [date]);

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
          const nowDate = 1;  // 임시로 현재 1일차라고 해두었습니다. (날짜 관련 서버에서 데이터 받아와야함)
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