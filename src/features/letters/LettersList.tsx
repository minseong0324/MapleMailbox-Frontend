import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import Modal from '../../components/Modal';
import axios from 'axios';
import MapleLeaf from '../../assets/leafImg/MapleLeaf.png';
import GinkgoLeaf from '../../assets/leafImg/GinkgoLeaf.png';
import styled from 'styled-components';
import LettersRead from './LettersRead';

const ButtonWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const TextsStyle = styled.div`
font-family: 'LeeSeoyun';
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
  font-family: 'EarlyFontDiary';
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

type Letter = {
  date: string;
  content: string;
  tree: 'Maple Tree' | 'Ginkgo Tree';
};

const LettersList: React.FC = () => {
  const [, setSelectedDate] = useState<number | null>(null);
  const [, setLetters] = useState<Letter[]>([]);
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
      <TextsStyle>
        매일매일 
      </TextsStyle>
      <TextsStyle>
        따뜻하게 물들어가는
      </TextsStyle>
      <TextsStyle>
        나의 마음
      </TextsStyle>
    
      <ButtonWrapper>
        {Array.from({ length: 30 }).map((_, index) => {
          const date = index + 1;
          return (
            <LeafButton
              key={index}
              onClick={() => {
                handleOpenModal(date);
              }}
              leafImage={selectedTree === 'Maple Tree' ? MapleLeaf : GinkgoLeaf}
            >
              {date}일
            </LeafButton>
          );
        })}
      </ButtonWrapper>
      <Modal isOpen={isOpen} onClose={handleCloseModal}>
        {modalContent}
        <TextsStyle>
            도착한 편지
        </TextsStyle>
      </Modal>
    </>
  );
};

export default LettersList;