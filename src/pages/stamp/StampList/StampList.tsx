import React, { useEffect, useState, useCallback } from 'react';
import Modal from '../../../components/Modal/Modal';
import axios from 'axios';
import StampDetail from '../StampDetail/StampDetail';
import disabledStamp from '../../../assets/stamp/disabledStamp.png';
import { s } from './style';

// 우표의 활성화 상태를 정의하는 타입입니다.
type StampStatus = {
  status: boolean; // 우표 활성화, 비활성화
};

// 현재 날짜의 속성을 정의하는 인터페이스입니다.
interface NowDateProps {
  nowDate: number | null;
}

const userId = localStorage.getItem("userId");
const accessToken = localStorage.getItem("accessToken");

const StampList: React.FC<NowDateProps> = ({ nowDate }) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const initialStampsStatus: StampStatus[] = Array(30).fill({ status: false });
  const [stampsStatus, setStampsStatus] = useState<StampStatus[]>(initialStampsStatus);
  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState<React.ReactNode>(null); // 모달에 표시될 내용을 저장합니다.
  const [isMissionModalOpen, setMissionModalOpen] = useState(false);
  const [isMissionCompleteModalOpen, setMissionCompleteModalOpen] = useState(false);
  const [missionComplete, setMissionComplete] = useState<boolean | null>(false);


  // 서버에서 우표 상태를 가져오는 함수입니다.
  const fetchStampStatus = useCallback(async () => {
    const response = await axios.get(`http://localhost:8080/api/users/${userId}/missions`, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    });
    if (response.status === 200) {
      if (nowDate !== null) {
        setStampsStatus(response.data.stampsStatus);
      }
    } else { //에러일 경우 
      console.error("Failed to update mission complete status.");
    }
  }, [nowDate]);

  // 컴포넌트가 마운트될 때 우표 상태를 가져옵니다.
  useEffect(() => {
      fetchStampStatus();
    }, [fetchStampStatus]);

  // 모달을 열고 해당 우표의 상세 정보를 보여주는 함수입니다.
  const handleOpenModal = (index: number) => {
    setSelectedIndex(index);
    setModalContent(<StampDetail index={index} onClose={handleCloseModal} />);
    setIsOpen(true);
  };

    // 미션 모달을 열 때, 미션의 완료 여부를 가져옵니다.
  const handleOpenMissionModal = async () => {
    setMissionModalOpen(true);
    const response = await axios.get(`http://localhost:8080/api/users/${userId}/missions/${nowDate}`, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    });
    if (response.status === 200) {
      setMissionComplete(response.data.missionComplete);
    } else { //에러일 경우 
        console.error("Failed to update mission complete status.");
    }
  };

   // 미션 모달창 닫는 함수
   const handleCloseMissionModal = () => {
    setMissionModalOpen(false);
  };

  // 미션 완료하기 버튼 누르면 작동되는 함수
  const handleMissionComplete = async () => {
      // 1. PUT 요청을 통해 missionCompleteButtonClick 값을 true로 업데이트
      const putResponse = await axios.put(`http://localhost:8080/api/users/${userId}/missions`,{
        missionCompleteButtonClick: true
      }, {
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      });
      // PUT 요청이 성공적으로 완료되었는지 확인
      if (putResponse.status === 200) {
        // 2. 성공적으로 완료되었을 때 GET 요청을 통해 stampsStatus 리스트를 가져옴
        const getResponse = await axios.get(`http://localhost:8080/api/users/${userId}/missions`, {
          headers: {
            'Authorization': `Bearer ${accessToken}`
          }
        });
        setStampsStatus(getResponse.data.stampsStatus);
  
        setMissionModalOpen(false);
        setMissionComplete(true);
      } else { //에러일 경우 
        console.error("Failed to update mission complete status.");
      }
  };
  

  // 모달을 닫는 함수입니다.
  const handleCloseModal = () => {
    setIsOpen(false);
    setSelectedIndex(null);
    setModalContent(null);
  };

  return (
    <s.Container>
      <s.ButtonTextWrapper>
        <s.TextWrapper>
          <s.TextsStyle>매일 하나씩</s.TextsStyle>
          <s.TextsStyle>모으는</s.TextsStyle>
          <s.TextsStyle>우표 컬렉션</s.TextsStyle>
        </s.TextWrapper>
        <s.MissionButton onClick={handleOpenMissionModal}>미션</s.MissionButton>
      </s.ButtonTextWrapper>
      
      <s.ButtonWrapper>
        {/* 각 우표 이미지를 매핑하여 버튼으로 표시합니다. */}
        {s.stampImages.map((image, index) => (
          <s.StampButton 
            key={index} 
            onClick={() => {
              const currentStatus = stampsStatus[index];
              currentStatus && currentStatus.status 
                ? handleOpenModal(index) 
                : alert("획득하지 않은 우표입니다.");
            }}
            stampImage={
              stampsStatus.length > 0 && !stampsStatus[index].status 
                ? disabledStamp 
                : image
            }
          ></s.StampButton>
        ))}
      </s.ButtonWrapper>

      {/* 우표 상세 정보를 보여주는 모달입니다. */}
      <Modal isOpen={isOpen} onClose={handleCloseModal}>
        {modalContent}
      </Modal>

       {/* 오늘의 미션을 보여주는 모달 */}
    <Modal isOpen={isMissionModalOpen} onClose={() => setMissionModalOpen(false)}>
      <s.BackButton onClick={handleCloseMissionModal}>닫기</s.BackButton>
      <s.CenteredWrapper>
        <s.TextsStyle>오늘의 미션!</s.TextsStyle>
        <s.TextsStyle>어쩌고</s.TextsStyle>
        {/* 미션이 완료되지 않았다면 버튼을 비활성화합니다. */}
        <s.ModalButton 
          onClick={missionComplete ? handleMissionComplete : undefined}
          disabled={!missionComplete}
        >
          미션 완료하기!
        </s.ModalButton>
      </s.CenteredWrapper>
    </Modal>
    </s.Container>
  );
};

export default StampList;
