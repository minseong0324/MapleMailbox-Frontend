import React, { useEffect, useState, useCallback } from 'react';
import Modal from '../../../components/Modal/Modal';
import axios, {AxiosError} from 'axios';
import StampDetail from '../StampDetail/StampDetail';
import disabledStamp from '../../../assets/stamp/disabledStamp.png';
import { s } from './style';
import MissionText from '../../../components/MissionText/MissionText';
import ErrorModal from "src/components/ErrorModal/ErrorModal";

// 현재 날짜의 속성을 정의하는 인터페이스입니다.
interface NowDateProps {
  nowDate: number | null;
}


const StampList: React.FC<NowDateProps> = ({ nowDate }) => {
  const userId = localStorage.getItem("userId");
    const accessToken = localStorage.getItem("accessToken");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [stampsStatus, setStampsStatus] = useState<boolean[]>(Array(30).fill(false));
  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState<React.ReactNode>(null); // 모달에 표시될 내용을 저장합니다.
  const [isMissionModalOpen, setMissionModalOpen] = useState(false);
  const [isMissionCompleteModalOpen, setMissionCompleteModalOpen] = useState(false); //미션에 성공해서 미션완료하기 버튼을 눌렀을 때 모달창을 띄우기 위한 상태
  const [missionComplete, setMissionComplete] = useState<boolean | null>(false);
  //const [missionComplete, setMissionComplete] = useState<boolean | null>(true); //테스트용
  const [todayMissionCompleteModalOpen, setTodayMissionCompleteModalOpen] = useState(false); //우표를 수령했으면 그 이후로 '오늘의 미션을 완료했어요!' 라고 띄워주는 모달창
  const [isErrorModalOpen, setErrorModalOpen] = useState(false);
  const [modalErrorContent, setModalErrorContent] = useState<React.ReactNode>(null); // 모달에 표시될 내용을 저장합니다.

  // 서버에서 우표 상태를 가져오는 함수입니다.
  const fetchStampStatus = useCallback(async () => {

    const userId = localStorage.getItem("userId");
    const accessToken = localStorage.getItem("accessToken");
    try {
      const response = await axios.get(`http://localhost:8080/api/users/${userId}/missions`, {
        headers: {
          'authorization': `${accessToken}`
        }
      });
      if (response.status === 200) {

          setStampsStatus(response.data.stampsStatus);
          console.log("Stamplist")
          console.log(response.data.stampsStatus)
          console.log("Stamplist--")
      } 
    } catch (error: unknown) { //에러 일 경우
      if (error instanceof AxiosError) {
          const status = error?.response?.status;
          console.error('Failed to fetch user info:', error);
          setModalErrorContent(
              <s.ErrorCenterModalWrapper>
                  <s.ErrorModalTextsWrapper>우표 정보를 가져오는</s.ErrorModalTextsWrapper>
                  <s.ErrorModalTextsWrapper>데에 실패했어요.</s.ErrorModalTextsWrapper>
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
  }, []);

  // 컴포넌트가 마운트될 때 우표 상태를 가져옵니다.
  useEffect(() => {
      fetchStampStatus();
    }, []);

  // 모달을 열고 해당 우표의 상세 정보를 보여주는 함수입니다.
  const handleOpenModal = (index: number) => {
    setSelectedIndex(index);
    setModalContent(<StampDetail index={index} onClose={handleCloseModal} />);
    setIsOpen(true);
  };

    // 미션 모달을 열 때, 미션의 완료 여부를 가져옵니다.
  const handleOpenMissionModal = async () => {
    if(nowDate !== null) {
      if(stampsStatus[nowDate-1] === false) {
        setMissionModalOpen(true);
        try {
          const response = await axios.get(`http://localhost:8080/api/users/${userId}/missions/todayMission`, {
            headers: {
              'authorization': `${accessToken}`
            }
          });
          if (response.status === 200) {
            setMissionComplete(response.data.missionComplete);
  
            console.log("missionComplete")
              console.log(response.data.missionComplete)
              console.log("missionComplete--")
          }
        } catch (error: unknown) { //에러 일 경우
          if (error instanceof AxiosError) {
              const status = error?.response?.status;
              console.error('Failed to fetch user info:', error);
              setModalErrorContent(
                  <s.ErrorCenterModalWrapper>
                      <s.ErrorModalTextsWrapper>미션 정보를 가져오는</s.ErrorModalTextsWrapper>
                      <s.ErrorModalTextsWrapper>데에 실패했어요.</s.ErrorModalTextsWrapper>
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
      } else {
        handleOpenTodayMissionCompleteModal();
      }
    }
  };
  // 미션에 성공해서 미션완료하기 버튼을 눌렀을 때 오픈되는 모달창을 위한 함수
  const handleOpenTodayMissionCompleteModal = () => {
    setTodayMissionCompleteModalOpen(true);
      setModalContent(
        <s.TextWrapper>
          <s.MissionText>
            오늘의 미션을
          </s.MissionText>
          <s.TextsStyle>
            완료했어요!
          </s.TextsStyle>
          <s.Break/>
          <s.TextsStyle>
            내일의 미션을 
          </s.TextsStyle>
          <s.TextsStyle>
            기대해주세요! 
          </s.TextsStyle>

        </s.TextWrapper>
      );
  };

   // 미션 모달창 닫는 함수
   const handleCloseMissionModal = () => {
    setMissionModalOpen(false);
  };

  // 미션 완료하기 버튼 누르면 작동되는 함수
  const handleMissionComplete = async () => {
    //setMissionCompleteModalOpen(true)//테스트용
    //setMissionComplete(true);//테스트용
    //handleOpenMissionCompleteModal(); //테스트용
    try {
      // 1. PUT 요청을 통해 missionCompleteButtonClick 값을 true로 업데이트
      const putResponse = await axios.put(`http://localhost:8080/api/users/${userId}/missions/todayMission`,{
        missionCompleteButtonClick: true
      }, {
        headers: {
          'authorization': `${accessToken}`
        }
      });
      // PUT 요청이 성공적으로 완료되었는지 확인
      if (putResponse.status === 200) {
        try {
          // 2. 성공적으로 완료되었을 때 GET 요청을 통해 stampsStatus 리스트를 가져옴
          const getResponse = await axios.get(`http://localhost:8080/api/users/${userId}/missions`, {
            headers: {
              'authorization': `${accessToken}`
            }
          });
          if(getResponse.status===200) {
            setStampsStatus(getResponse.data.stampsStatus);
            setMissionModalOpen(false);
            setMissionCompleteModalOpen(true)
            setMissionComplete(false); // 미션을 완료했으므로 미션 완료하기 버튼을 비활성화합니다.
            handleOpenMissionCompleteModal(); // 함수 호출을 추가
            console.log("getResponseStamplist")
            console.log(getResponse.data.stampsStatus)
            console.log("getResponseStamplist--")

          }
        } catch (error: unknown) { //에러 일 경우
          if (error instanceof AxiosError) {
              const status = error?.response?.status;
              console.error('Failed to fetch user info:', error);
              setModalErrorContent(
                  <s.ErrorCenterModalWrapper>
                      <s.ErrorModalTextsWrapper>우표 완료 정보를 가져</s.ErrorModalTextsWrapper>
                      <s.ErrorModalTextsWrapper>오는 데에 실패했어요.</s.ErrorModalTextsWrapper>
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
      } 
    } catch (error: unknown) { //에러 일 경우
      if (error instanceof AxiosError) {
          const status = error?.response?.status;
          console.error('Failed to fetch user info:', error);
          setModalErrorContent(
              <s.ErrorCenterModalWrapper>
                  <s.ErrorModalTextsWrapper>미션 완료 정보를 가져</s.ErrorModalTextsWrapper>
                  <s.ErrorModalTextsWrapper>오는 데에 실패했어요.</s.ErrorModalTextsWrapper>
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
  

  // 모달을 닫는 함수입니다.
  const handleCloseModal = () => {
    setIsOpen(false);
    setMissionModalOpen(false);
    setMissionCompleteModalOpen(false);
    setTodayMissionCompleteModalOpen(false);
    setSelectedIndex(null);
    setModalContent(null);
  };

  // 미션에 성공해서 미션완료하기 버튼을 눌렀을 때 오픈되는 모달창을 위한 함수
  const handleOpenMissionCompleteModal = () => {
    if (nowDate !== null && nowDate >= 0 && nowDate < s.stampImages.length) {
      const selectedImage = s.stampImages[nowDate-1];
      setModalContent(
        <s.ShowStampWrapper>
          <s.ShowStampEffect/>
          <s.ShowStamp src={selectedImage} alt="Selected Stamp" />
        </s.ShowStampWrapper>
      );
      setMissionCompleteModalOpen(true);
    } else {
      console.error("Invalid date for stamp");
    }
  };

  const renderStamps = () => {
    const stamps = [];
    for (let i = 0; i < 30; i++) {
      const currentStatus = stampsStatus[i];
      
      stamps.push(
        <s.StampButton 
          key={i}
          onClick={() => {
            console.log("currentStatus.status")
            console.log(currentStatus)
            console.log("currentStatus.status--")
            currentStatus && currentStatus 
              ? handleOpenModal(i) 
              : alert("획득하지 않은 우표입니다.");
          }}
          stampImage={
            currentStatus === true
              ? s.stampImages[i]
              : disabledStamp
          }
        ></s.StampButton>
      );
    }
    return stamps;
  }
  

  return (
    <s.Container>
      <s.ButtonTextWrapper>
        <s.TextWrapper>
          <s.TextsStyle>매일 하나씩</s.TextsStyle>
          <s.TextsStyle>모으는</s.TextsStyle>
          <s.TextsStyle>우표 컬렉션</s.TextsStyle>
        </s.TextWrapper>
        <s.MissionButton onClick={handleOpenMissionModal}/>
      </s.ButtonTextWrapper>
      
      <s.ButtonWrapper>
        {renderStamps()}
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
        <s.MissionText>
          <MissionText nowDate={nowDate} />
        </s.MissionText>
        {/* 미션이 완료되지 않았다면 버튼을 비활성화합니다. */}
        <s.MissionCompletedButton 
          onClick={missionComplete ? handleMissionComplete : undefined}
          disabled={!missionComplete}
          isActive={!!missionComplete}
        >
          {missionComplete ? "완료했습니다!" : "미션 완료하기!"}
        </s.MissionCompletedButton>
      </s.CenteredWrapper>
    </Modal>

       {/* 미션 완료하기 버튼을 누르고 나서 뜨는 모달창 */}
      <Modal isOpen={isMissionCompleteModalOpen} onClose={() => setMissionCompleteModalOpen(false)}>
        <s.CenteredWrapper>
          <s.TextsStyle>오늘의 우표를</s.TextsStyle>
          <s.TextsStyle>획득했어요!</s.TextsStyle>
          {modalContent} {/* 여기에 이미지를 표시 */}
          <s.ModalButton onClick={handleCloseModal}>
            확인
          </s.ModalButton>
        </s.CenteredWrapper>
      </Modal>

      {/* 미션 완료하기 버튼을 누르고 나서 뜨는 모달창 */}
      <Modal isOpen={todayMissionCompleteModalOpen} onClose={() => setTodayMissionCompleteModalOpen(false)}>
        <s.CenteredWrapper>
          {modalContent} {/* 여기에 이미지를 표시 */}
          <s.ModalButton onClick={handleCloseModal}>
            확인
          </s.ModalButton>
        </s.CenteredWrapper>
      </Modal>
      
      <ErrorModal isOpen={isErrorModalOpen} onClose={() => setErrorModalOpen(false)} >
        {modalErrorContent}
      </ErrorModal>
    </s.Container>
  );
};

export default StampList;
