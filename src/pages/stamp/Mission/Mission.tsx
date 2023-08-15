import React, { useEffect, useState, useCallback } from 'react';
import Modal from '../../../components/Modal/Modal';
import axios from 'axios';
import {s} from './style'

// 우표의 활성화 상태를 정의하는 타입입니다.
type StampStatus = {
    status: boolean; // 우표 활성화, 비활성화
  };
  
  // 현재 날짜의 속성을 정의하는 인터페이스입니다.
  interface NowDateProps {
    nowDate: number | null;
  }
  
  // 사용자의 ID를 로컬 스토리지에서 가져옵니다.
  const userId = localStorage.getItem("userId")
  
  const StampList: React.FC<NowDateProps> = ({ nowDate }) => {
    const initialStampsStatus: StampStatus[] = Array(30).fill({ status: false });
    const [stampsStatus, setStampsStatus] = useState<StampStatus[]>(initialStampsStatus);
    const [isOpen, setIsOpen] = useState(false);
    const [modalContent, setModalContent] = useState<React.ReactNode>(null); // 모달에 표시될 내용을 저장합니다.
  
    // 서버에서 우표 상태를 가져오는 함수입니다.
    const fetchStampStatus = useCallback(async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/users/${userId}/missions`);
        if (nowDate !== null) {
          setStampsStatus(response.data.stampsStatus);
        }
      } catch (error) {
        console.error(error);
      }
    }, [nowDate]);
  
    // 컴포넌트가 마운트될 때 우표 상태를 가져옵니다.
    useEffect(() => {
        fetchStampStatus();
      }, [fetchStampStatus]);
  
    // 모달을 닫는 함수입니다.
    const handleCloseModal = () => {
      setIsOpen(false);
      setModalContent(null);
    };
  
    return (
      <s.Container>
        <s.TextWrapper>
          <s.TextsStyle>오늘의 미션</s.TextsStyle>
          <s.TextsStyle>어쩌고</s.TextsStyle>
        </s.TextWrapper>
      
  
        {/* 우표 상세 정보를 보여주는 모달입니다. */}
        <Modal isOpen={isOpen} onClose={handleCloseModal}>
          {modalContent}
        </Modal>
      </s.Container>
    );
  };
  
  export default StampList;
  