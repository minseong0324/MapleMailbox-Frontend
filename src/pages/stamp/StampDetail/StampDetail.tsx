import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import { s } from './style';

type Stamp = {
    index: number;
    disabled: boolean;    // 우표 활성화, 비활성화
  };

type Props = {
  index: number; 
  onClose: () => void; // 뒤로가기 버튼
};

const userId = localStorage.getItem("userId")

const StampDetail: React.FC<Props> = ({ index, onClose }) => {
  const [Stamp, setStamp] = useState<Stamp[]>([]); 


  const fetchStamp = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/users/${userId}/stamp`);    // API 임의로 작성해두었습니다.
      setStamp(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchStamp();
  }, [fetchStamp]);

    return (
      <s.StampWrapper>
            <s.BackButton onClick={onClose}>닫기</s.BackButton>

            <s.StampImage
                stampImage={s.stampImages[index]}>
            </s.StampImage>
      </s.StampWrapper>
    )
};

export default StampDetail;
