import React from 'react';
import { s } from './style';

type Props = {
  index: number; 
  onClose: () => void; // 뒤로가기 버튼
};

const StampDetail: React.FC<Props> = ({ index, onClose }) => {
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
