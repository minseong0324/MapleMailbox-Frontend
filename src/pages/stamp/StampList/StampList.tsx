import React, { useEffect, useState, useCallback } from 'react';
import Modal from '../../../components/Modal/Modal';
import axios from 'axios';
import StampDetail from '../StampDetail/StampDetail';
import disabledStamp from '../../../assets/stamp/disabledStamp.png';
import { s } from './style';

type Stamp = {
  index: number;
  disabled: boolean;    // 우표 활성화, 비활성화
};

const StampList: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [stamp, setStamp] = useState<Stamp[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState<React.ReactNode>(null); // 모달의 내용을 저장할 상태입니다.

  const fetchStamp = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/users/{email}/stamp');    // API 임의로 작성해두었습니다.
      setStamp(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchStamp();
  }, []);

  const handleOpenModal = (index: number) => {
    setSelectedIndex(index);
    setModalContent(<StampDetail index={index} onClose={handleCloseModal} />); // 모달의 내용을 설정합니다.
    setIsOpen(true); // 그리고 모달을 엽니다.
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    setSelectedIndex(null);
    setModalContent(null); // 모달의 내용을 초기화합니다.
  };

  return (
    <s.Container>
      <s.TextWrapper>
        <s.TextsStyle>
          매일 하나씩
        </s.TextsStyle>
        <s.TextsStyle>
          모으는
        </s.TextsStyle>
        <s.TextsStyle>
          우표 컬렉션
        </s.TextsStyle>
      </s.TextWrapper>
    
      <s.ButtonWrapper>
      {s.stampImages.map((image, index) => (
        <s.StampButton 
          key={index} 
          onClick={() => {
            //stamp ? handleOpenModal(index) : alert("획득하지 않은 우표입니다.")     // 테스트용
            stamp ? alert("획득하지 않은 우표입니다.") : handleOpenModal(index)
            //stamp[index].disabled ? alert("획득하지 않은 우표입니다.") : handleOpenModal(index)
          }}
          stampImage= { 
            //stamp ? image : disabledStamp       // 테스트용
            stamp ? disabledStamp : image 
            //stamp[index].disabled ? disabledStamp : image
          }
          >
        </s.StampButton>
      ))};
      </s.ButtonWrapper>

      <Modal isOpen={isOpen} onClose={handleCloseModal}>
        {modalContent}
      </Modal>
    </s.Container>
  );
};

export default StampList;