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

const userId = localStorage.getItem("userId");
const accessToken = localStorage.getItem("accessToken");

function LettersList() {
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState<React.ReactNode>(null); // 모달의 내용을 저장할 상태입니다.
  // 테스트용 코드
  //const [nowDate, setNowDate] = useState<number | null>(2); // 테스트용 2일차 설정
  //const [lettersOverFive, setLettersOverFive] = useState<boolean[]>([true, false, false, false, false]); // 1일차와 2일차 모두 5개의 편지를 받지 못한 상황

  // 출시할 때 사용하는 코드
  const [nowDate, setNowDate] = useState<number | null>(null);
  const [lettersOverFive, setLettersOverFive] = useState<boolean[]>(Array(30).fill(false));
 
  const [treeType, setTreeType] = useState<string>('Maple Tree');

    // 사용자 데이터를 가져옵니다.
    const fetchUserData = async () => {
      const userId = localStorage.getItem("userId");
      const accessToken = localStorage.getItem("accessToken");
      try {
        const response = await axios.get(`http://localhost:8080/api/users/${userId}/letters`, {
          headers: {
            'authorization': `${accessToken}`
          }
        });
        if(response.status===200) {
          const { treeType, nowDate, lettersOverFive } = response.data;
          setNowDate(nowDate);
          setLettersOverFive(lettersOverFive);
          setTreeType(treeType);
          console.log("LettersList");
          console.log(lettersOverFive);
          console.log("LettersList");
          console.log(response.data.lettersOverFive);

        }
      } catch (error: unknown) { //에러 일 경우
        if (error instanceof AxiosError) {
          const status = error?.response?.status;
          console.error('Failed to fetch user info:', error);
          if (status === 404) {
            // 리소스를 찾을 수 없음
          } else if (status === 500) {
              // 서버 내부 오류
          } else {
              // 기타 상태 코드 처리
          }
        } 
        return null;
      }
    };

  useEffect(() => {
    fetchUserData();
    console.log("fetchUserData load")
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
                  alert("날짜 정보를 가져올 수 없습니다.");
                  return;
                }
                if (!isButtonActive) {
                  if (date === nowDate) {
                    alert("아직 오늘 받은 편지 수가 5개 미만입니다!");
                  } else {
                    alert(date-Number(nowDate)+"일 뒤에 열람할 수 있습니다.");
                  }
                } else {
                  handleOpenModal(date);
                }
              }}
              leafImage={treeType === 'Maple Tree' ? 
              (!isButtonActive ? MapleLeafDisabled : MapleLeaf ) :
              (!isButtonActive ? GinkgoLeafDisabled : GinkgoLeaf ) }
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
}

export default LettersList;