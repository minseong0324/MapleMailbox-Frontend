import React, { useEffect, useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
import Modal from '../../../components/Modal/Modal';
import axios, {AxiosError} from 'axios';
import MapleLeaf from '../../../assets/leafImg/MapleLeaf.png';
import GinkgoLeaf from '../../../assets/leafImg/GinkgoLeaf.png';
import MapleLeafDisabled from '../../../assets/leafImg/MapleLeaf-disabled.png';
import GinkgoLeafDisabled from '../../../assets/leafImg/GinkgoLeaf-disabled.png';
import { s } from './style'
import LettersRead from '../LettersRead/LettersRead';
import ErrorModal from "src/components/ErrorModal/ErrorModal";
import {useToken}  from '../../../contexts/TokenProvider/TokenProvider'

function LettersList() {
  const { accessToken, refreshToken } = useToken();
  const userId = localStorage.getItem("userId");
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState<React.ReactNode>(null); // 모달의 내용을 저장할 상태입니다.
  const [isErrorModalOpen, setErrorModalOpen] = useState(false);
  const [modalErrorContent, setModalErrorContent] = useState<React.ReactNode>(null); // 모달에 표시될 내용을 저장합니다.
  const [nowDate, setNowDate] = useState<number | null>(null);
  const [lettersOverFive, setLettersOverFive] = useState<boolean[]>(Array(30).fill(false));
  const [treeType, setTreeType] = useState<string>('Maple Tree');

    // 사용자 데이터를 가져옵니다.
    const fetchUserData = async () => {
      const userId = localStorage.getItem("userId");
      try {
        const response = await axios.get(`https://api.maplemailbox.com/api/users/${userId}/letters`, {
          headers: {
            'authorization': `${accessToken}`
          }
        });
        if(response.status===200) {
          const { treeType, nowDate, lettersOverFive } = response.data;
          setNowDate(nowDate);
          setLettersOverFive(lettersOverFive);
          setTreeType(treeType);
        }
      } catch (error: unknown) { //에러 일 경우
        if (error instanceof AxiosError) {
            const status = error?.response?.status;
            setModalErrorContent(
              <s.ErrorCenterModalWrapper>
                  <s.ErrorModalTextsWrapper2>편지 정보를</s.ErrorModalTextsWrapper2>
                  <s.ErrorModalTextsWrapper2>불러오지 못했어요.</s.ErrorModalTextsWrapper2>
                  <s.ModalButton onClick={handleErrorModalClose}>닫기</s.ModalButton>
              </s.ErrorCenterModalWrapper>
            );
            if (status === 404) {
                // 리소스를 찾을 수 없음
            } else if (status === 500) {
                // 서버 내부 오류
            } else {
                // 기타 상태 코드 처리
            }
        } 
        setErrorModalOpen(true);
        return null;
      }
    };

  useEffect(() => {
    fetchUserData();
  }, []);

  const handleOpenModal = (selectedDate: number) => {
    setSelectedDate(selectedDate); // 버튼을 클릭하면 선택된 날짜를 설정합니다.
    setModalContent(<LettersRead selectedDate={selectedDate} onClose={handleCloseModal} />); // 모달의 내용을 설정합니다.
    setIsOpen(true); // 그리고 모달을 엽니다.
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    setSelectedDate(null); // 모달을 닫을 때 선택을 해제합니다.
    setModalContent(null); // 모달의 내용을 초기화합니다.
  };

  const handleErrorModalClose = () => {
    setErrorModalOpen(false);
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
          let isButtonActive = false;
          if (nowDate !== null && date < nowDate) {
            isButtonActive = true;
          } else if (nowDate !== null && date === nowDate && lettersOverFive[nowDate-1] === true) {
            isButtonActive = true;
          }

          return (
            <s.LeafButton
              key={index}
              onClick={() => {
                if (nowDate === null) {
                  setModalErrorContent(
                    <s.ErrorCenterModalWrapper>
                        <s.ErrorModalTextsWrapper2>날짜 정보를</s.ErrorModalTextsWrapper2>
                        <s.ErrorModalTextsWrapper2>불러오지 못했어요.</s.ErrorModalTextsWrapper2>
                        <s.ModalButton onClick={handleErrorModalClose}>닫기</s.ModalButton>
                    </s.ErrorCenterModalWrapper>
                  );
                setErrorModalOpen(true);
                  return;
                }
                if (!isButtonActive) {
                  if (date === nowDate) {
                    setModalErrorContent(
                      <s.ErrorCenterModalWrapper>
                          <s.ErrorModalTextsWrapper2>오늘 받은 편지 수가</s.ErrorModalTextsWrapper2>
                          <s.ErrorModalTextsWrapper2>아직 2개 미만이에요.</s.ErrorModalTextsWrapper2>
                          <s.ModalButton onClick={handleErrorModalClose}>닫기</s.ModalButton>
                      </s.ErrorCenterModalWrapper>
                  );
                  setErrorModalOpen(true);
                  } else {
                    setModalErrorContent(
                      <s.ErrorCenterModalWrapper>
                          <s.ErrorModalTextsWrapper2>{date-Number(nowDate)}일 뒤에 </s.ErrorModalTextsWrapper2>
                          <s.ErrorModalTextsWrapper2>열람할 수 있어요.</s.ErrorModalTextsWrapper2>
                          <s.ModalButton onClick={handleErrorModalClose}>닫기</s.ModalButton>
                      </s.ErrorCenterModalWrapper>
                  );
                  setErrorModalOpen(true);
                  }
                } else {
                  handleOpenModal(date);
                }
              }}
              leafImage={treeType === 'Maple Tree' ? 
              (!isButtonActive ? MapleLeafDisabled : MapleLeaf ) :
              (!isButtonActive ? GinkgoLeafDisabled : GinkgoLeaf ) }
            >
              {date}
            </s.LeafButton>
          );
        })}
      </s.ButtonWrapper>

      <Modal isOpen={isOpen} onClose={handleCloseModal}>
        {modalContent}
      </Modal>

      <ErrorModal isOpen={isErrorModalOpen} onClose={() => setErrorModalOpen(false)} >
        {modalErrorContent}
      </ErrorModal>
    </s.Container>
  );
}

export default LettersList;