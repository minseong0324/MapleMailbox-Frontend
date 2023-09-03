import React from 'react';
import { s } from './style';
import { StampName, StampDescription } from '../../../components/StampDetailDiscription/StampDetailDiscription';

type Props = {
  index: number; 
  onClose: () => void; // 뒤로가기 버튼
};

const StampDetail: React.FC<Props> = ({ index, onClose }) => {
    return (
      <>
       <s.BackButton onClick={onClose}>닫기</s.BackButton>
       <s.Break/>
       <s.TitleTextsStyle>
          {StampName[index]}  {/* 우표 이름 */}
        </s.TitleTextsStyle>
        <s.StampWrapper>
          <s.StampImage
            stampImage={s.stampImages[index]}>
          </s.StampImage>
        </s.StampWrapper>
        <s.TextsStyle>
          {StampDescription[index]}  {/* 우표 설명 */}
        </s.TextsStyle>
      </>
     
    )
};

export default StampDetail;
